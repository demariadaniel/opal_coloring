import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js'

class SceneApp extends Component {
    state = {
        myScene: this.props.scenes[0],
        scenes: this.props.scenes,
        myColor: grey,
        index: 0,
        buying: this.props.buying,
        error: false
    }
    applyScene(){
        if (this.state.myScene.isUnlocked && this.state.buying){
            this.setState({
                error: true
            })
        } else if (this.state.myScene.isUnlocked || this.state.buying) {
            this.props.applyScene(this.state.myScene, this.state.index);
        }
    }
    disabled(){
        if (this.state.myScene.isUnlocked && this.state.buying){
            return true
        } else if (this.state.myScene.isUnlocked == false && this.state.buying == false){
            return true
        } else {
            return false
        }
    }
    onSceneClick(e, scene, color, index){
        this.setState({
            myScene: scene,
            myColor: color,
            index: index,
            error: false
        })
    }
    render(){
        return(
            <div className="App">
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                {this.state.scenes.map((scene, j)=>{
                    return (
                    <FlatButton 
                        key={j}
                        onClick={e=>this.onSceneClick(e, scene, brightColors[j+3].color, j)}
                        className = {scene.isUnlocked ? null : "rainbow"}  
                        style={{color: brightColors[j+3].color, display: 'block', margin: '0 auto'}}>
                            {scene.isUnlocked ? scene.name : "?????"}
                    </FlatButton>
                    )
                })      
                }
                <p className={this.state.error ? "rainbow2" : "black"}>
                    {this.state.error ? "Choose Another Scene!" : "____________________"}
                </p>
                <FlatButton style={this.disabled() ? grey : white} 
                    disabled={this.disabled()}
                    onClick={()=>this.applyScene()}>
                    Choose
                </FlatButton>
                <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                    Cancel
                </FlatButton>
            </div>
            <div className="scenePreview" style={{color: this.state.myColor}}>
                <i className="material-icons md-250">
                    {this.state.myScene.icon}
                </i>
            </div>
          </div>
        )
    }
}

export default SceneApp;