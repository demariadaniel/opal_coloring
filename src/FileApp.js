import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, white, grey}  from './AllColors.js';
import axios from 'axios';

class FileApp extends Component {
    state = {
        palettes: [],
        userName: this.props.userName,
        drawerIs: this.props.drawerIs,
        title: "",
        password: "",
        loggedIn: this.props.loggedIn,
        error: false,
        errorMessage: ""
    }
    componentWillMount(){
        if (this.props.drawerIs === "LOAD"){
            this.loadPalettes()
        }
    }
    componentWillReceiveProps(nextProps){
        if (this.state.drawerIs !== nextProps.drawerIs){
            if (nextProps.drawerIs === "LOAD"){
                this.loadPalettes()
            } else {
                this.setState({
                   drawerIs: this.props.drawerIs
                })
            }
        }
        if (this.state.errorMessage != nextProps.errorMessage){
            this.setState({
                errorMessage: nextProps.errorMessage,
                error: true
            })
        }
    }
    loadPalettes(){
        axios.get('/palettes')
            .then((res, err) =>{
                if (err){
                    console.log(err);
                    this.setState({
                        error: true,
                        errorMessage: err
                    })
                }
                this.setState({
                    palettes: res.data,
                    drawerIs: this.props.drawerIs
                })
            })
    }
    onCancel(){
        this.setState({
            error: false,
            errorMessage: ""
        })
        this.props.onCancel()
    }
    onChange(e, type){
        if (type === "TITLE"){
            this.setState({
                title: e.target.value
            })
        } else if (type === "ARTIST" && this.state.loggedIn === false){
            this.setState({
                userName: e.target.value
            })
        } else if (type === "USER"){
            this.setState({
                userName: e.target.value
            })
        } else if (type === "PASSWORD"){
            this.setState({
                password: e.target.value
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
            __message += __message.indexOf('title') == -1 ? '' : " and"
            __message += " user name"
        }
        if (__message.length < 15){
            this.props.onSaveColors(this.titleInput.value, this.artistInput.value);
        } else {
            __message += "!";
            this.setState({
                message: __message,
                error: true
            })
        }
    }
    render(){
        if (this.props.drawerIs === "LOGIN"){
            return(
            <div className="App">
            <div className="App-header">
                <i className="material-icons close" onClick={()=>this.onCancel()}>
                    close
                </i>

                <input className={"fileInput"}
                        placeholder={this.state.userName} 
                        ref={(input) => { this.userInput = input }}
                        onChange={(e)=>this.onChange(e, "USER")}/>                
                <input className={"fileInput"}
                        placeholder="Password" 
                        ref={(input) => { this.passwordInput = input }}
                        onChange={(e)=>this.onChange(e, "PASSWORD")}/>  
                <p className="rainbow" 
                    onClick={(e)=>this.props.onUserSave("NEW", this.state.userName, this.state.password)}>
                        Create
                </p>
                <p className="rainbow" 
                    onClick={(e)=>this.props.onUserSave("SAVE", this.state.userName, this.state.password)}>
                        Save
                </p>
                <p className="rainbow" 
                    onClick={(e)=>this.props.onUserLoad(this.state.userName, this.state.password)}>
                        Load
                </p>

                <FlatButton style={white} onClick={()=>this.onCancel()}>
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
                    <i className="material-icons close" onClick={()=>this.onCancel()}>
                        close
                    </i>
                    {this.state.error ? <p className="rainbow"> {this.state.errorMessage}</p> : <br/> }
                    {this.state.palettes.length > 0 ?
                        this.state.palettes.map((palette, j)=>{
                        return (
                        <div key={j}>
                        <FlatButton 
                            onClick={e=>this.props.onLoadColors(palette.title)} 
                            style={{color: brightColors[parseInt(Math.random()*10)].color, 
                            display: 'block', margin: '0 auto'}}>
                                {palette.title}
                                {palette.userName !== "" ? ` by ${palette.userName}` : null}
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
                    <FlatButton style={white} onClick={()=>this.onCancel()}>
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
                    <i className="material-icons close" onClick={()=>this.onCancel()}>
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
                    {this.state.error ? <p className="rainbow"> {this.state.errorMessage}</p> : <br/> }
                    <FlatButton style={white} 
                        onClick={(e)=>this.validate()}>
                        Save
                    </FlatButton>
                    <FlatButton style={white} onClick={()=>this.onCancel()}>
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