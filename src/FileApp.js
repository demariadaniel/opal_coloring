import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js';
import axios from 'axios';

class FileApp extends Component {
    state = {
        palettes: [],
        user: this.props.user,
        drawerIs: this.props.drawerIs,
        title: "",
        password: "",
        loggedIn: this.props.loggedIn,
        error: false,
        message: ""
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
                this.setState({
                    palettes: res.data,
                    drawerIs: this.props.drawerIs
                })
                console.log(this.state.palettes)
            })
    }
    onChange(e, type){
        if (type === "TITLE"){
            this.setState({
                title: e.target.value
            })
        } else if (type === "ARTIST" && this.state.loggedIn === false){
            this.setState({
                user: {userName: e.target.value}
            })
        }
    }
    onLoginClick(){

    }
    validate(){
        let __message = "Please enter a";
        if (this.titleInput.value === ""){
            __message += " title"
        }
        if (this.artistInput.value === "" && !this.state.loggedIn){
            __message += " and a user name"
        }
        console.log(__message)
        if (__message.length < 15){
            console.log(__message.length)
            this.props.onSaveColors(this.state.title, this.state.user);
            this.setState({
                message: "",
                error: false
            })
        } else {
            __message += "!";
            this.setState({
                message: __message,
                error: true
            })
            console.log(this.state)
        }
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
            <div className="scenePreview">
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
                    {this.state.palettes.length > 0 ?
                        this.state.palettes.map((palette, j)=>{
                        return (
                        <div key={j}>
                        <FlatButton 
                            onClick={e=>this.props.onLoadColors(palette.title)} 
                            style={{color: brightColors[parseInt(Math.random()*10)].color, 
                            display: 'block', margin: '0 auto'}}>
                                {palette.title}
                                {palette.user.userName != "" ? ` by ${palette.user.userName}` : null}
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
                    : <p className="rainbow">No palettes saved!</p> }
                    <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                        Cancel
                    </FlatButton>
                </div>
                <div className="scenePreview">
                    <i className="material-icons md-250">
                        vertical_align_top
                    </i>
                </div>
            </div>
            )
        } else if (this.props.drawerIs === "SAVE"){
            return(
                <div className="App">
                <div className="App-header">
                    <i className="material-icons close" onClick={()=>this.props.onCancel()}>
                        close
                    </i>
                    <p style={white}>Title</p>
                    <input className={"fileInput"} 
                        ref={(input) => { this.titleInput = input }}
                        onChange={(e)=>this.onChange(e, "TITLE")}/>
                    {this.state.loggedIn ? null :
                        <p style={white}>Artist<br/>
                            <input className={"fileInput"} 
                                ref={(input) => { this.artistInput = input }}
                                onChange={(e)=>this.onChange(e, "ARTIST")}/>
                        </p>
                    }
                    {this.state.error ? <p className="rainbow"> {this.state.message}</p> : <br/> }
                    <FlatButton style={white} 
                        onClick={(e)=>this.validate()}>
                        Save
                    </FlatButton>
                    <FlatButton style={white} onClick={()=>this.props.onCancel()}>
                        Cancel
                    </FlatButton>
                </div>
                <div className="scenePreview">
                    <i className="material-icons md-250">
                        vertical_align_bottom
                    </i>
                </div>
            </div>
            )
        }
    }
}

export default FileApp;