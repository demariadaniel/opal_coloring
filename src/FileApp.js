import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js';
import axios from 'axios';

class FileApp extends Component {
    state = {
        palettes: [],
        user: this.props.user,
        drawerIs: this.props.drawerIs
    }
    componentWillMount(){
        if (this.props.drawerIs == "LOAD"){
            this.loadPalettes()
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if (this.state.drawerIs != nextProps.drawerIs){
            if (nextProps.drawerIs == "LOAD"){
                this.loadPalettes()
            } else {
                this.setState({
                   drawerIs: this.props.drawerIs
                })
            }
        }
    }
    loadPalettes(){
        axios.get('http://localhost:8080/palettes')
            .then(res=>{
                console.log('palettes');
                this.setState({
                    palettes: res.data,
                    drawerIs: this.props.drawerIs
                })
            })
    }
    onSaveClick(){

    }
    onLoadClick(e, palette){

    }
    onLoginClick(){

    }
    render(){
        if (this.props.drawerIs === "LOGIN"){
            return(
            <div className="App">
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>

                <p className="rainbow">Feature coming soon!</p>

                <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                    Cancel
                </FlatButton>
            </div>
            <div className="scenePreview" style={{color: this.state.myColor}}>
                <i className="material-icons md-250">
                    perm_identity
                </i>
            </div>
          </div>
            )
        } else if (this.props.drawerIs === "LOAD"){
        return(
            <div className="App">
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                {this.state.palettes.map((palette, j)=>{
                    return (
                    <div key={j}>
                    <FlatButton 
                        onClick={e=>this.props.onLoadColors(palette.title)} 
                        style={{color: brightColors[j+3].color, display: 'block', margin: '0 auto'}}>
                        {palette.title}
                    </FlatButton>
                    {palette.palette.map((color, k)=>{
                        return (
                            <i className="material-icons md-32 colorIco" 
                                style={{"color": color.color, "fontSize":"1.25rem"}}
                                key={k}
                                >
                                opacity
                            </i>
                                )
                            })
                        }
                    </div>
                    )
                })      
                }
                <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                    Cancel
                </FlatButton>
            </div>
            <div className="scenePreview" style={{color: this.state.myColor}}>
                <i className="material-icons md-250">
                    vertical_align_top
                </i>
            </div>
          </div>
        )
    }
    }
}

export default FileApp;