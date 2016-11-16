import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js'

class ChecksApp extends Component {
    state = {
        scene: this.props.scene,
        complete: 0,
        total: 10,
        answer: ""
    }
    onChange(e, challenge){
        e.preventDefault();
        if (e.target.value.toLowerCase() == "debug"){
            this.props.debug()
        }
        this.setState({
            answer: e.target.value
        })
    }
    render(){
        return(
            <div className="App">
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                <p className="rainbow">Count the balloons</p>
                <input style={{"backgroundColor": "#222", "color": "white"}}
                    onChange={(e)=>this.onChange(e, "BALLOONS")}/>
                <FlatButton style={white} type="submit">
                    Submit
                </FlatButton>
                <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                    Cancel
                </FlatButton>
            </div>
            <div className="scenePreview" style={{color: this.state.myColor}}>
                <i className="material-icons md-250">
                    check
                </i>
            </div>
          </div>
        )
    }
}

export default ChecksApp;