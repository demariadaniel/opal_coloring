import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js'
// Scenes
import FairyBox from './scenes/FairyBox';
import FarmBox from './scenes/FarmBox';
import GhostBox from './scenes/GhostBox';
import MermaidBox from './scenes/MermaidBox';
import RainbowBox from './scenes/RainbowBox';
import SkyCastleBox from './scenes/SkyCastleBox';
import TreasureBox from './scenes/TreasureBox';

class SceneApp extends Component {
    state = {
        myScene: {name:'Sky Castle', icon: "wb_cloudy"},
        scenes: [
            {name:'Sky Castle', icon: "cloud_circle", isUnlocked: true, scene: SkyCastleBox},
            {name:'Fairy', icon: "local_florist", isUnlocked: false, scene: FairyBox},
            {name:'Farm', icon: "wb_sunny", isUnlocked: false, scene: FarmBox},
            {name:'Ghost', icon: "all_inclusive", isUnlocked: false, scene: GhostBox},
            {name:'Mermaid', icon: "filter_tilt_shift", isUnlocked: false, scene: MermaidBox},
            {name:'Rainbow', icon: "leak_add", isUnlocked: false, scene: RainbowBox},
            {name:'Treasure', icon: "star_half", isUnlocked: false, scene: TreasureBox}
        ],
        myColor: grey,
        index: 0
    }
    applyScene(){
        this.props.applyScene(this.state.myScene, this.state.index);
        //this.setState({myScene: {color: "#222"}});
    }
    onSceneClick(e, scene, color, index){
        this.setState({
            myScene: scene,
            myColor: color,
            index: index
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
                
                <FlatButton style={white} onClick={()=>this.applyScene()}>
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