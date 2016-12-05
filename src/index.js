// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Drawer Components
import ColorApp from './ColorApp';
import SceneApp from './SceneApp';
import CoinsApp from './CoinsApp';
import ChecksApp from './ChecksApp';
import CollectionApp from './CollectionApp';
import FileApp from './FileApp';
import HowToPlay from './HowToPlay';

// Scenes
import {FairyBox, FarmBox, GhostBox, MermaidBox, RainbowBox, 
    SkyCastleBox, TreasureBox, AllScenes} from './AllScenes';

// Material Components
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Styles & Colors
import {white} from './AllColors';
import './styles/index.css';
import './styles/App.css';
const image0 = require('./images/seigaiha.png');
const image1 = require('./images/asanoha-400px.png');
const image2 = require('./images/sayagata-400px.png');
const images = [image0, image1, image2];

// App will need way to load initial slider values

class App extends Component {
  state = {
    background: 0,
    openL: false,
    openM: false,
    openR: false,
    colorIndex: 1,
    sceneIndex: 0,
    drawerIs: 'COLOR',
    colors: [white, white, white, white, white, white, white, white, white, white],
    scene: AllScenes[0],
    scenes: AllScenes,
    coins: 0,
    coinFlip: false,
    buying: false,
    debug: false,
    clickComplete: false,
    complete: 0,
    user: {
      userName: "",
      id: 0
    },
    loggedIn: false,
    smallDevice: false,
    slider: {
      flag: "14deg",
      dragon: 0,
      treasure: 0
    },
    message: "",
    errorMessage: ""
  }
  componentDidMount(){
    this.setState({openM:true, message: <HowToPlay/>})
  }
  onCancel(){
    this.setState({openL: false, openR: false, buying: false, errorMessage:""})
  }
  oK(){
    this.setState({openM: false, message:""})
  }
  onColorClick(e, num){
    if (this.state.openL || this.state.openR){
        this.setState({
          openR: false,
          openL: false 
        })
        setTimeout(()=>{
          this.setState({
            openR: !this.state.openR,
            colorIndex: num,
            drawerIs: 'COLOR'
        })
      }, 200)
      } else {
      this.setState({
        openR: !this.state.openR,
        colorIndex: num,
        drawerIs: 'COLOR'
      })
    }
  }
  onAppClick(e, app, side){
    if (app === "OPAL"){
          this.setState({
            openM: true,
            message: <HowToPlay/>
        })
      } else if (this.state.openL || this.state.openR){
        this.setState({
          openL: false,
          openR: false
        })
        setTimeout(()=>{
          this.setState({
            [`${side}`]: !this.state[`${side}`],
                      drawerIs: app  
        })
      }, 200)
      } else {
      this.setState({
        [`${side}`]: !this.state[`${side}`],
        drawerIs: app
      });
    }
  }
  answer(i){
    let _scene = this.state.scene;
    let _coins = this.state.coins;
    _scene.checkmarks.checkmarks[i].complete = true;
    _scene.checkmarks.complete += 1;
    _coins += _scene.checkmarks.checkmarks[i].prize;
    this.setState({
      scene: _scene,
      coins: _coins,
      clickComplete: false
    })
  }
  applyColor(color){
    let newColors = this.state.colors;
    let newCoins = this.state.coins;
    if (this.state.colors[this.state.colorIndex].change===false){
      color.change = true;
      newCoins += 3;
    }
    newColors.splice(this.state.colorIndex, 1, color);
    this.setState({
      colors: newColors,
      openR: false,
      coins: newCoins
    });
  }
  applyScene(scene, index){
    if (this.state.buying && scene.isUnlocked){
      console.log('error!')
    } else {
      let balance = this.state.coins;
      if (this.state.buying){
        scene.isUnlocked = true;
        balance -= 25;
      }
      AllScenes[index] = scene;
      this.setState({
        scene: AllScenes[index],
        sceneIndex: index,
        openL: false,
        coins: balance,
        buying: false
      });
    }
  }
  bgClick(value){
    let bgIndex = this.state.background;
    if (value === "LEFT"){
      bgIndex--;
      if(bgIndex < 0){
        bgIndex = images.length - 1;
      }
    } else {
      bgIndex++;
      if(bgIndex >= images.length){
        bgIndex = 0;
      }
    }
    console.log(bgIndex);
    this.setState({
      background:bgIndex
    })
  }
  buyScene(){
    this.setState({
      openL: false,
      drawerIs: 'SCENE',
      buying: true 
    })
    setTimeout(()=>{
      this.setState({
        openL: true,
      })
    }, 200)
  }
  cheat(e){
    console.log(e)
    let coins = this.state.coins+10;
    this.setState({
      coins: coins
    })
  }
  clickChallenge(value){
    let _scene = this.state.scene;
    for (let i = 0; i < _scene.checkmarks.checkmarks.length; i++){
      if(_scene.checkmarks.checkmarks[i].type === "SLIDER" 
        || _scene.checkmarks.checkmarks[i].type === "CLICK"){
        if(_scene.checkmarks.checkmarks[i].value === value){
          _scene.checkmarks.checkmarks[i].clickAnswer = true;
          let complete = {
            i: i,
            checkmark: _scene.checkmarks.checkmarks[i]
          }
          this.setState({
            scene: this.state.scene,
            clickComplete: complete
          })
        }
      }
    }
  }
  componentWillUpdate(nextProps, nextState){
    if (nextState.coins > this.state.coins || this.state.coins > nextState.coins){
      this.setState({
        coinFlip: true
      })
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.coinFlip){
      setTimeout(()=>{
        this.setState({
          coinFlip: false
        })
      }, 2000)
    }
  }
  debug(){
    this.setState({
      debug: true
    })
  }
  onSaveColors(title, user){
    let newPalette = {
      title: title,
      palette: this.state.colors,
      user: user
    };
    axios.post('http://localhost:8080/palettes/', newPalette)
      .then(res =>{
        if (res.data.error){
          this.setState({
            errorMessage: res.data.errorMessage
          })
        } else {
          this.setState({
            openM: true,
            message: `${title} saved to palettes!`
          })
          this.onCancel()
       }
      })
  }
  onLoadColors(title){
    axios.get('http://localhost:8080/palettes/'+title)
      .then(res =>{
        if (res.data.error){
          this.setState({
            errorMessage: res.data.errorMessage
          })
        } else {
          let _colors = this.state.colors; 
          for(let i = 0; i < 10; i++){
            _colors[i] = res.data.palette[i];
            this.setState({
              colors: _colors
            })
          }
        }
      })
  }
  onSlide(value, checkmark){
    let _slider = this.state.slider;
    let result;
    if (checkmark.kind == "rotate"){
      result = value + "deg";
    } else if (checkmark.kind === "move"){
      result = value;
    } else if (checkmark.kind === "multi"){
      console.log('why')
      result = {};
      for (let j = 0; j < checkmark.keys.length; j++){
        let property = checkmark.keys[j];
        result[property] = value;
      }
    }
    _slider[checkmark.value] = result;
    this.setState({
      slider: _slider
    })
  }
  render (){
    if(this.state.smallDevice === false 
      && screen.width < 675){
      this.setState({
        smallDevice : true
      })
    }
    const OK = [
      (<FlatButton onClick={()=>this.oK()}>
          {this.state.openM ? "Let's Play!" : "OK!"}
        </FlatButton>)
              ];
    const BG = {
        "backgroundImage": `url(${images[this.state.background]})`
    }
    return (
      <MuiThemeProvider>
        <div className="BGcontainer" style={BG}>
            <Dialog open={this.state.openM} 
                actions={OK}
                autoScrollBodyContent={true}
                onRequestClose={()=>this.oK()}>
                {this.state.message}
            </Dialog>
          {/* Menu Buttons */}
          <div className="menuBtnBox">
              <RaisedButton onClick={e=>this.onAppClick(e, "OPAL")} className="raised">
                  <p className="menuBtn">Opal</p>
                  <i className="material-icons md-32 colorIco" style={this.state.colors[0]}>opacity</i>
              </RaisedButton>
              <RaisedButton onClick={e=>this.onAppClick(e, "LOGIN", "openL")} className="raised">
                  <p className="menuBtn">Login</p>
                  <i className="material-icons md-32 colorIco" style={{"color" : "rgb(0, 0, 0)"}}>
                    perm_identity
                  </i>
              </RaisedButton>
              <RaisedButton onClick={e=>this.onAppClick(e, "SAVE", "openL")} className="raised">
                  <p className="menuBtn">Save</p>
                  <i className="material-icons md-32 colorIco" style={{"color" : "rgb(0, 0, 0)"}}>
                  vertical_align_bottom    
                  </i>
              </RaisedButton>
              <RaisedButton onClick={e=>this.onAppClick(e, "LOAD", "openL")} className="raised">
                  <p className="menuBtn">Load</p>
                  <i className="material-icons md-32 colorIco" style={{"color" : "rgb(0, 0, 0)"}}>
                    vertical_align_top
                  </i>
              </RaisedButton>
          </div>
          <div className="menuBtnBox2">
              <RaisedButton className="menuBtn raised" onClick={e=>this.bgClick("LEFT")}
                  style={{"minWidth":"2rem"}}>
                  <i className="material-icons md-32 colorIco" style={{"color" : "rgb(0, 0, 0)"}}>
                    chevron_left
                  </i>
              </RaisedButton>
              <RaisedButton className="menuBtn raised">
                Background
              </RaisedButton>
              <RaisedButton className="menuBtn raised" onClick={e=>this.bgClick("RIGHT")}
                  style={{"minWidth":"2rem"}}>
                  <i className="material-icons md-32 colorIco" style={{"color" : "rgb(0, 0, 0)"}}>
                    chevron_right
                  </i>
              </RaisedButton>
          </div>
          {/* Color Buttons */}
          <div className="colorBtnBox">
             {/* Debug Cheat Button */}
             {this.state.debug ? 
                <i className="material-icons md-32 colorIco" 
                    onClick={(e)=>this.cheat(e)}>
                    track_changes
                </i> : null }
              {this.state.colors.map((color, i)=>{
                if(i<5){
                  return(
                    <RaisedButton key={i} onClick={e=>this.onColorClick(e, i)} className="raised">
                        <p className="menuBtn">Color {i+1}</p>
                        <i className="material-icons md-32 colorIco" style={this.state.colors[i]}>opacity</i>
                    </RaisedButton>
                  )
                  } else {return null}
              })
            }
          </div>
          <div className="colorBtnBox2">
              {this.state.colors.map((color, i)=>{
                if(i>4 && i!==9){
                  return(
                    <RaisedButton key={i} onClick={e=>this.onColorClick(e, i)} className="raised">
                        <p className="menuBtn">Color {i+1}</p>
                        <i className="material-icons md-32 colorIco" style={this.state.colors[i]}>opacity</i>
                    </RaisedButton>
                  )
                  } else {return null}
                })
              }
              <RaisedButton key={9} onClick={e=>this.onColorClick(e, 9)} className="raised">
                  <p className="menuBtn">BG</p>
                  <i className="material-icons md-32 colorIco" style={this.state.colors[9]}>opacity</i>
              </RaisedButton>
              
            </div>

            {/* Canvas */}
            <div className="BG" style={{backgroundColor: this.state.colors[9].color}}>
              <this.state.scene.scene 
                colors={this.state.colors} 
                slider={this.state.slider} 
                clickChallenge={(value)=>this.clickChallenge(value)}/>
            </div>

            {/* Drawers */}
            <Drawer open={this.state.openR} className="drawerStylez" openSecondary={true}>
                {(this.state.drawerIs === 'COLOR') ? 
                  <ColorApp 
                    applyColor={(color)=>this.applyColor(color)}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
                {(this.state.drawerIs === 'CHECKS') ? 
                  <ChecksApp 
                    applyScene={(scene)=>this.applyScene(scene)}
                    onCancel={()=>this.onCancel()}
                    onSlide={(v,c)=>this.onSlide(v,c)}
                    debug={()=>this.debug()}
                    checkmarks={this.state.scene.checkmarks}
                    answer={(i)=>this.answer(i)}
                    clickComplete={this.state.clickComplete}
                    /> 
                  : null}
                  {(this.state.drawerIs === 'COLLECTION') ? 
                  <CollectionApp 
                    applyScene={(scene)=>this.applyScene(scene)}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
            </Drawer>
            <Drawer open={this.state.openL} className="drawerStylez">
                {(this.state.drawerIs === 'COINS') ? 
                  <CoinsApp 
                    buyScene={()=>this.buyScene()}
                    coins={this.state.coins}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
                {(this.state.drawerIs === 'SCENE') ? 
                  <SceneApp
                    buying={this.state.buying}
                    scenes={this.state.scenes} 
                    applyScene={(scene)=>this.applyScene(scene)}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
                {(this.state.drawerIs === 'SAVE' || 
                  this.state.drawerIs === "LOAD" || 
                  this.state.drawerIs === "LOGIN") ? 
                  <FileApp
                    drawerIs = {this.state.drawerIs}
                    loggedIn = {this.state.loggedIn}
                    onSaveColors={(title, user)=>this.onSaveColors(title, user)} 
                    onLoadColors={(title)=>this.onLoadColors(title)}
                    onLogin={(userId, password)=>this.onLogin(userId, password)}
                    onCancel={()=>this.onCancel()}
                    errorMessage={this.state.errorMessage}
                    user={this.state.user}
                    /> 
                  : null}
            </Drawer>


            {/* Scene, Coins, Checkmarks, Challenges Buttons */}
            <div className="btmBtnBox">
              <div className="btmBtnBoxLeft">
                <RaisedButton onClick={e=>this.onAppClick(e, "SCENE", "openL")} className="raised">
                  <p className="menuBtn">
                    Scene: {this.state.scene.isUnlocked ? this.state.scene.name : "?????"}
                  </p>
                  <i className="material-icons md-32 sceneIco">{this.state.scene.icon}</i>
                </RaisedButton>
                <RaisedButton onClick={e=>this.onAppClick(e, "COINS", "openL")} className="raised">
                  <p className={"menuBtn "+(this.state.coinFlip ? "rainbow2" : null)}> 
                      Coins: {this.state.coins}
                      </p>
                  <i className={"material-icons md-32 coinIco "+
                      (this.state.coinFlip ? "coinFlip" : null)}>
                      camera
                      </i>
                </RaisedButton>
              </div>
              <div className="btmBtnBoxRight">
                <RaisedButton onClick={e=>this.onAppClick(e, "CHECKS", "openR")} className="raised">
                  <p className="menuBtn">Checkmarks: {this.state.scene.checkmarks.complete} / {this.state.scene.checkmarks.checkmarks.length}</p>
                  <i className="material-icons md-32 sceneIco">check</i>
                </RaisedButton>
                <RaisedButton onClick={e=>this.onAppClick(e, "COLLECTION", "openR")} className="raised">
                  <p className="menuBtn">Collection</p>
                  <i className="material-icons md-32 sceneIco">redeem</i>
                </RaisedButton>
              </div>
            </div>  
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
    <App />, 
  document.getElementById('root')
);