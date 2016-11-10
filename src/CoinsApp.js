import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js'

class CoinsApp extends Component {
    state = {
        coins: this.props.coins
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
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                <p>Coins: <span className="rainbow">{this.props.coins}</span></p>
                <FlatButton style={white} onClick={()=>this.props.buyScene()}>
                    Unlock a New Scene
                </FlatButton>
                <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                    Cancel
                </FlatButton>
            </div>
            <div className="scenePreview" style={{color: grey}}>
                <i className="material-icons md-250">
                    camera
                </i>
            </div>
          </div>
        )
    }
}

export default CoinsApp;