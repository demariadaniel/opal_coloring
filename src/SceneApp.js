import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js'

class SceneApp extends Component {
    state = {
        myScene: {name:'Sky Castle', icon: "wb_cloudy"},
        scenes: [
            {name:'Fairy', icon: "local_florist"},
            {name:'Farm', icon: "wb_sunny"},
            {name:'Ghost', icon: "all_inclusive"},
            {name:'Mermaid', icon: "filter_tilt_shift"},
            {name:'Rainbow', icon: "leak_add"},
            {name:'Sky Castle', icon: "cloud_circle"},
            {name:'Treasure', icon: "star_half"}
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
                    <FlatButton onClick={e=>this.onSceneClick(e, scene, brightColors[j+3].color)} 
                        style={{color: brightColors[j+3].color, display: 'block', margin: '0 auto'}}>
                        {scene.name}
                    </FlatButton>
                    )
                })      
                }
                
                <FlatButton style={white} onClick={()=>this.applyScene()}>
                    Apply
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