import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {brightColors, white, grey}  from './AllColors.js';

class ChecksApp extends Component {
    state = {
        checkmarks: this.props.checkmarks.checkmarks,
        complete: this.props.checkmarks.complete,
        tempanswers: [],
    }
    answer(e, checkmark, i){
        if (checkmark.complete) {
            console.log('Complete!')
        } else if (checkmark.type == "COUNT"){
            if (checkmark.answer.includes(this.state.tempanswers[i].toLowerCase())){
                console.log("correct");
                this.props.answer(i);
            } else {
                console.log('wrong')
                // let _checkmarks = this.state.checkmarks;
                // _checkmarks[i].complete = false;
                // this.setState({
                //     checkmarks: _checkmarks
                // })
            }
        } else if (checkmark.type == "CREATIVE") {
            console.log(this.state.tempanswers[i])
        }

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
        console.log(this.state.checkmarks)
        return(
          <div className="App">
            <div className="App-header">
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
                                <Checkbox onCheck={(e)=>this.answer(e, checkmark, i)}
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