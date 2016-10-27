import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js'

class CoinsApp extends Component {
    state = {
        myScene: {name:'Sky Castle', icon: "wb_cloudy"},
        scenes: [
            {name:'Fairy', icon: "local_florist", isUnlocked: false},
            {name:'Farm', icon: "wb_sunny", isUnlocked: false},
            {name:'Ghost', icon: "all_inclusive", isUnlocked: false},
            {name:'Mermaid', icon: "filter_tilt_shift", isUnlocked: false},
            {name:'Rainbow', icon: "leak_add", isUnlocked: false},
            {name:'Sky Castle', icon: "cloud_circle", isUnlocked: true},
            {name:'Treasure', icon: "star_half", isUnlocked: false}
        ],
        myColor: grey
    }
    applyScene(){
        this.props.applyScene(this.state.myScene);
        //this.setState({myScene: {color: "#222"}});
    }
    onSceneClick(e, scene, color){
        this.setState({
            myScene: scene,
            myColor: color
        })
    }
    render(){
        return(
            <div className="App">
            <div className="App-header">
                {this.state.scenes.map((scene, j)=>{
                    return (
                    <FlatButton 
                        key={j}
                        onClick={e=>this.onSceneClick(e, scene, brightColors[j+3].color)} 
                        style={{color: brightColors[j+3].color, display: 'block', margin: '0 auto'}}>
                        {scene.isUnlocked ? scene.name : "?????"}
                    </FlatButton>
                    )
                })      
                }
                
                <FlatButton style={white} onClick={()=>this.applyScene()}>
                    Apply
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

export default CoinsApp;