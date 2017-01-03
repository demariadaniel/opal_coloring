import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
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
        options: false,
        clickComplete: false,
        change: 0
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
            if (checkmark.answer=== parseInt(this.state.tempanswers[i])){
                this.props.answer(i);
                this.correct(checkmark);
            } else {
                this.incorrect(checkmark);
            }
        } else if (checkmark.type == "CREATIVE") {
            if (checkmark.complete){
                this.setState({
                    open: true,
                    message: checkmark.correct(this.state.tempanswers[i]),
                    options: false,
                    change: i
                })
            } else {
                this.props.answer(i);
                this.correct(checkmark, i);
            }
        } else if (checkmark.type == "SLIDER") {
            if (this.state.tempanswers[i] <= checkmark.maxAnswer 
                && this.state.tempanswers[i] >= checkmark.minAnswer){
                    if (checkmark.clickAnswer === false){
                        this.setState({
                            open: true,
                            message: checkmark.hint,
                            options: false
                        })
                    } else {
                        this.props.answer(i)
                        this.correct(checkmark, i)
                    }
                } else {
                    this.incorrect(checkmark)
                }
        }
    } 
    changeAnswer(){
        // Display old answer
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.clickComplete != false){
            this.answer(null, nextProps.clickComplete.checkmark, nextProps.clickComplete.i)
        }
    }
    correct(checkmark, i){
        let _message = checkmark.correct ? checkmark.correct(this.state.tempanswers[i]) : `Checkmark complete! Great job.`;
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
    onSlide(value, checkmark, i){
        this.props.onSlide(value, checkmark)
        let _answers = this.state.tempanswers;
            _answers[i] = value;
            this.setState({
                tempanswers: _answers
            })
    }
    render(){
        let iconStyle = (checkmark) => {
            let style = {};
            checkmark.complete ? null : style["fill"] = "white";
            checkmark.type == "CLICK" ? style["left"] = "0.625rem" : style["left"] = "5.5rem";
            return style
        }
        const OK = [
                (<FlatButton onClick={()=>this.oK()}>
                    OK!
                </FlatButton>)
            ];
        // OPTIONS & changeAnswer not currently used, may reuse in future
        const OPTIONS = [
                (<FlatButton onClick={(e)=>this.changeAnswer(e)}
                    style={{"color" : "rgb(0, 188, 212)"}}>
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
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                {this.state.checkmarks.map((checkmark, i)=>{
                        return (
                            <div key={i} 
                                className={checkmark.type == "CLICK" ?
                                    "checkmark checkLess" : "checkmark checkMore"}
                                >
                                {checkmark.type == "CLICK" ? null :
                                    <p style={{'textAlign':'left'}}
                                        className={checkmark.type == "SLIDER" ? "checkStext" : "checkPtext"}>
                                        {checkmark.text}
                                    </p>
                                }
                                {checkmark.type == "COUNT" ? 
                                (<TextField 
                                        disabled={checkmark.complete}
                                        inputStyle={white}
                                        type="number"
                                        floatingLabelStyle={grey}
                                        floatingLabelFocusStyle={{"color":"rgb(0, 188, 212)"}}
                                        floatingLabelText="Enter a number"
                                        onChange={(e)=>this.onChange(e, i)}/>)
                                        : null }
                                {checkmark.type == "CREATIVE" ? 
                                (<TextField 
                                        inputStyle={white}
                                        type="text"
                                        floatingLabelStyle={grey}
                                        floatingLabelFocusStyle={{"color":"rgb(0, 188, 212)"}}
                                        floatingLabelText="Write a name"
                                        onChange={(e)=>this.onChange(e, i)}/>)
                                        : null }
                                 {checkmark.type == "SLIDER" ? 
                                (<Slider 
                                        onChange={(e, value)=>this.onSlide(value, checkmark, i)}
                                        max={checkmark.max}
                                        min={checkmark.min}
                                        defaultValue={checkmark.default}
                                        step={checkmark.step ? checkmark.step : 0.1}
                                        />)
                                        : null }
                                <Checkbox
                                    style={checkmark.type == "CLICK" ? null : {"bottom":"3.5rem"}}
                                    className={checkmark.type=="SLIDER" ? "checkSlide" : null}
                                    label=
                                        {checkmark.type == "CLICK" ? checkmark.text : null }
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
className={"checkInput"}
*/

export default ChecksApp;