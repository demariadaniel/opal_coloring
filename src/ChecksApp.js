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
                this.incorrect();
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
                this.correct(checkmark);
                this.props.answer(i);
            }
        }
    }
    changeanswer(){

    }
    correct(checkmark){
        this.setState({
            open: true,
            message: `Checkmark complete! Great job.
            You've earned ${checkmark.prize} coins!`,
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
    incorrect(){
        this.setState({
            open: true,
            message: "Incorrect! Try again.",
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
        const OK = [
                (<FlatButton onClick={()=>this.oK()}>
                    OK!
                </FlatButton>)
            ];
        const OPTIONS = [
                (<FlatButton onClick={()=>this.changeAnswer()}>
                    "Yes please!"
                </FlatButton>),
                (<FlatButton onClick={()=>this.oK()}>
                    "No thanks."
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
                                <p>{checkmark.text}</p>
                                {checkmark.type == "COUNT" || checkmark.type == "CREATIVE" ? 
                                (<input style={{"backgroundColor": "#222", "color": "white"}} 
                                        onChange={(e)=>this.onChange(e, i)}/>) 
                                : null }
                                <Checkbox
                                    onCheck={(e)=>this.answer(e, checkmark, i)}
                                    checked={checkmark.complete} 
                                    />
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