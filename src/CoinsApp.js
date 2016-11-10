import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js'

class CoinsApp extends Component {
    state = {
        coins: this.props.coins,
        price: 0,
        type: "",
        choice: "",
        error: false
    }
    applyScene(){
        this.props.applyScene(this.state.myScene);
        //this.setState({myScene: {color: "#222"}});
    }
    choose(){
        if (this.state.type == "SCENE"){
            this.props.buyScene()
        }
    }
    componentDidUpdate(){
        if (this.state.price > this.state.coins && this.state.error == false){
            this.setState({
                error: true
            })
        }
    }
    price(price, type, choice){
        this.setState({
            price: price,
            type: type,
            choice: choice
        })
    }
    onCancel(){
        this.setState({
            price: 0,
            type: "",
            choice: "",
            error: false
        })
        this.props.onCancel()
    }
    render(){
        return(
            <div className="App">
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                <FlatButton style={white} onClick={()=>this.price(9, "SCENE")}>
                    Unlock a New Scene
                </FlatButton>
                <p style={grey}>
                    Cost: <span className="rainbow">{this.state.price}</span>
                </p>
                <p style={grey}>
                    Total Coins: 
                    <span className="rainbow">{this.props.coins}</span>
                </p>

                <FlatButton style={this.state.error ? grey : white} onClick={()=>this.choose()} 
                    disabled={this.state.error}>
                    Choose
                </FlatButton>
                <FlatButton style={white} onClick={()=>this.onCancel()}>
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