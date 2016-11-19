import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js';
import axios from 'axios';

class FileApp extends Component {
    state = {
        palettes: [],
        user: this.props.user,
        drawerIs: this.props.drawerIs,
        icon: "vertical_align_top"
    }
    componentWillMount(){
        if (this.state.drawerIs == "LOAD"){
            axios.get('http://localhost:8080/palettes')
                .then(res=>{
                    this.setState({
                        palettes: res.data
                    })
                })
            }
    }
    onSaveClick(){

    }
    onLoadClick(e, palette){

    }
    onLoginClick(){

    }
    render(){
        console.log(this.state)
        return(
            <div className="App">
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                    close
                </i>
                {this.state.palettes.map((palette, j)=>{
                    return (
                    <div>
                    <FlatButton 
                        key={j}
                        onClick={e=>this.props.onLoadColors(palette.title)} 
                        style={{color: brightColors[j+3].color, display: 'block', margin: '0 auto'}}>
                        {palette.title}
                    </FlatButton>
                    {palette.palette.map(color=>{
                        return (
                            <i className="material-icons md-32 colorIco" 
                                style={{"color": color.color, "fontSize":"1.25rem"}}
                                >
                                lens
                            </i>
                                )
                            })
                        }
                    </div>
                    )
                })      
                }
                
            {/* <FlatButton style={white} onClick={()=>this.applyScene()}>
                    Apply
                </FlatButton> */} 
                <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                    Cancel
                </FlatButton>
            </div>
            <div className="scenePreview" style={{color: this.state.myColor}}>
                <i className="material-icons md-250">
                    {this.state.icon}
                </i>
            </div>
          </div>
        )
    }
}

export default FileApp;