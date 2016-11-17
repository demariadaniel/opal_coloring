import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js';

class ChecksApp extends Component {
    state = {
        checkmarks: this.props.checkmarks.checkmarks,
        complete: this.props.checkmarks.complete,
        tempanswers: [],
        open: false,
        message: "",
        options: false
    }
    answer(e, checkmark, i){
        if (checkmark.complete && checkmark.type != "CREATIVE") {
            this.setState({
                open: true,
                message: "Checkmark already complete.",
                options: false
            })
        } else if (this.state.tempanswers[i] == undefined && 
                  (checkmark.type == "COUNT" || checkmark.type == "CREATIVE")) {
            this.incomplete();    
        } else if (checkmark.type == "COUNT"){
            if (checkmark.answer.includes(this.state.tempanswers[i].toLowerCase())){
                this.props.answer(i);
                this.correct(checkmark);
            } else {
                this.incorrect(checkmark);
            }
        } else if (checkmark.type == "CREATIVE") {
            if (checkmark.complete){
                this.setState({
                    open: true,
                    message: `Your current answer is ${this.state.tempanswers[i]}.
                    Would you like to change this?`,
                    options: true
                })
            } else {
                this.correct(checkmark, i);
                this.props.answer(i);
            }
        }
    } 
    changeAnswer(){

    }
    correct(checkmark, i){
        let _message = checkmark.correct ? checkmark.correct : `Checkmark complete! Great job.`;
        if (checkmark.type == "CREATIVE" && checkmark.correct){
            _message += this.state.tempanswers[i] + "."
        }
        _message += ` You've earned ${checkmark.prize} coins!`;
        this.setState({
            open: true,
            message: _message,
            options: false
        })
    }
    incomplete(){
        this.setState({
            open: true,
            message: "Please enter an answer.",
            options: false
        })
    }
    incorrect(checkmark){
        this.setState({
            open: true,
            message: checkmark.incorrect? checkmark.incorrect : "Incorrect! Try again.",
            options: false
        })
    }
    oK(){
        this.setState({
            open: false
        })
    }
    onChange(e, i){
        //e.preventDefault();
        if (e.target.value.toLowerCase() == "debug"){
            this.props.debug()
        } else {
            let _answers = this.state.tempanswers;
            _answers[i] = e.target.value;
            this.setState({
                tempanswers: _answers
            })
        }
    }
    render(){
        let iconStyle = (checkmark) => {
            let style = {};
            checkmark.complete ? null : style["fill"] = "white";
            checkmark.type == "COUNT" || checkmark.type == "CREATIVE" ? 
                    style["left"] = "5.5rem" : style["left"] = "0.625rem";
            console.log(style)
            return style
        }
        const OK = [
                (<FlatButton onClick={()=>this.oK()}>
                    OK!
                </FlatButton>)
            ];
        const OPTIONS = [
                (<FlatButton onClick={(e)=>this.changeAnswer(e)}>
                    Yes please!
                </FlatButton>),
                (<FlatButton onClick={()=>this.oK()}>
                    No thanks.
                </FlatButton>)
            ];
        return(
          <div className="App">
            <Dialog open={this.state.open} actions={this.state.options ? OPTIONS : OK}>
                {this.state.message}
            </Dialog>
            <div className="Checks-App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                {this.state.checkmarks.map((checkmark, i)=>{
                        return (
                            <div className="checkmark" key={i}>
                                {checkmark.type == "COUNT" || checkmark.type == "CREATIVE" ? 
                                    <p style={{'textAlign':'left'}}>{checkmark.text}</p> : null}
                                {checkmark.type == "COUNT" || checkmark.type == "CREATIVE" ? 
                                (<input className={"checkInput"}
                                        onChange={(e)=>this.onChange(e, i)}/>)
                                        : null }
                                <Checkbox
                                    label=
                                        {checkmark.type == "COUNT" || checkmark.type == "CREATIVE" ? 
                                        null : checkmark.text}
                                    labelPosition={"left"}
                                    labelStyle={white}
                                    iconStyle={iconStyle(checkmark)}
                                    onCheck={(e)=>this.answer(e, checkmark, i)}
                                    checked={checkmark.complete} 
                                />
                                <br/>
                            </div>
                            )
                    })
                }
                <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                    Cancel
                </FlatButton>
            </div>
            <div className="scenePreview">
                <i className="material-icons md-250">
                    check
                </i>
            </div>
          </div>
        )
    }
}

/*
                {this.state.checkmarks.map((checkmark, i)=>{
                        console.log(checkmark)
                        return (<Checkbox/>)
                    })
                }



*/

export default ChecksApp;