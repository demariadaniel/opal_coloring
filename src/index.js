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
import Logo from './Logo';
import HowToPlay from './HowToPlay';

// Scenes
import {FairyBox, FarmBox, GhostBox, MermaidBox, RainbowBox, 
    SkyCastleBox, TreasureBox, AllScenes, Scenes} from './AllScenes';

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
    openA: false,             //Opens/Closes Dialog Modal Window
    openB: false,             //Toggles Between Logo/Instructions
    openC: false,             //Show/Hide Instructions
    openL: false,             //Open Left Menu
    openR: false,             //Open Right Menu
    colorIndex: 1,            //Current Color Selected in Colors Array
    sceneIndex: 0,            //Current Scene Selected in Scenes Array
    drawerIs: 'COLOR',        //What Menu to Display
    colors: [white, white, white, white, white, white, white, white, white, white],
                              //Array of Color Objects / Current Palette
    scene: AllScenes[1],      //Current Scene Displayed
    scenes: AllScenes,        //Collection of all Scene Objects
    coins: 0,                 //Total Coins
    coinFlip: false,          //Coin Animation Toggle
    buying: false,            //Enable/Disable Buying Feature
    debug: false,             //Debug Mode Enable/Disable
    clickComplete: false,     //Used to complete Click Challenges
    complete: 0,              //Number of Checkmarks Completed
    userName: "UserName",     //Current User Name
    loggedIn: false,          //Logged In
    smallDevice: false,       //True if on Mobile devices smaller than a tablet
    slider: {                 //Values for Slider challenges
      flag: "14deg",
      dragon: 0,
      treasure: 0
    },
    message: "",              //Message to display in Modal
    error: false,             //Problem?
    page: 0                   //Current Page in Instructions
  }
  componentDidMount=()=>{
    // Determine if using Mobile device on page load
      if(screen.width < 675){
      this.setState({
        smallDevice : true,
        openA: true,
        message: <Logo smallDevice={true}/>
      })
    } else {
      this.setState({
        openA:true, 
        openC: true, 
        message: <Logo smallDevice={false}/>
      })
    }
  }
  onCancel(){
    //Close current menu
    this.setState({openL: false, openR: false, buying: false, message:""})
  }
  oK(){
    //Close modal window
    this.setState({openA: false, openC: false, message:""})
  }
  onColorClick(e, num){
    //Open Color Menu w/ selected color index
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
    //Opens Logo/Instructions or Side Menus
    if (app === "OPAL"){
          this.setState({
            openA: true,
            openC: true,
            message: <HowToPlay page={this.state.page} />
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
  answer(i, answer){
    let _scene = this.state.scene;
    let _coins = this.state.coins;
    _scene.checkmarks.checkmarks[i].myAnswer = answer;
    if (_scene.checkmarks.checkmarks[i].complete === false){
      _scene.checkmarks.complete += 1;
      _scene.checkmarks.checkmarks[i].complete = true;
      _coins += _scene.checkmarks.checkmarks[i].prize;
    }
    this.setState({
      scene: _scene,
      coins: _coins,
      clickComplete: false
    })
  }
  applyColor(color){
    let newColors = this.state.colors;
    let _scene = this.state.scene;
    let newCoins = this.state.coins;
    if (_scene.colors[this.state.colorIndex].change===false){
      newCoins += 3;
    }
    color.change = true;
    newColors.splice(this.state.colorIndex, 1, color);
    _scene.colors = newColors;
    AllScenes[this.state.sceneIndex] = _scene;
    this.setState({
      colors: newColors,
      openR: false,
      coins: newCoins,
      scene: _scene,
      scenes: AllScenes
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
        scene: scene,
        scenes: AllScenes,
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
            clickComplete: complete,
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
  flipPage(num){
    this.setState({
      page: this.state.page+num,
      message: <HowToPlay page={this.state.page+num} />
    })
  }
  onSaveColors(title, user){
    console.log(user)
    let newPalette = {
      title: title,
      palette: this.state.colors,
      userName: user
    };
    console.log(newPalette)
    axios.post('/palettes/', newPalette)
      .then(res =>{
        if (res.data.error){
          console.log(res.data)
          this.setState({
            openA: true,
            openC: false,
            message: res.data.errorMessage
          })
        } else {
          console.log(res.data)
          this.setState({
            openA: true,
            openC: false,
            message: `${title} saved to palettes!`
          })
       }
      })
  }
  onLoadColors(title){
    axios.get('/palettes/'+title)
      .then(res =>{
        if (res.data.error){
          this.setState({
            message: res.data.errorMessage
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
  onUserSave(mode, user, password){
    let saveData = {
      userName: user,
      password: password,
      background: this.state.background,
      sceneIndex: this.state.sceneIndex,
      colors: this.state.colors,
      coins: this.state.coins,
      complete: this.state.complete,
      scene: this.state.scene,
      scenes: this.state.scenes,
      slider: [ this.state.slider ]   // Convert to Array for easy Storage
    }
    let newURL = '/users/new/'+ user;
    let saveURL = '/users/save/'+ user;
    axios.post(mode === "NEW" ? newURL : saveURL, saveData)
      .then(res =>{
        console.log("res: ")
        console.log(res)
        if (res.data.error){
          this.setState({
            message: res.data.errorMessage
          })
        } else {
          this.setState({
            openA: true,
            message: mode === "NEW" ? 
              `${res.data.userName}'s profile created!` :
              `${res.data.userName}'s profile saved successfully!`
          })
       }
      })
  }
  onUserLoad(user, password){
    axios.get('/users/'+user)
      .then(res =>{
        if (res.data.error){
          this.setState({
            openA: true,
            error: true,
            message: res.data.errorMessage
          })
        } else {
          console.log(res.data)
            this.setState({
              openA: true,
              message: `Welcome back ${res.data.userName}!`,
              userName: res.data.userName,
              background: res.data.background,
              colors: res.data.colors,
              coins: res.data.coins,
              complete: res.data.complete,
              scenes: res.data.scenes,
              scene: res.data.scene,
              // sceneIndex: res.data.sceneIndex,
              slider: res.data.slider[0]
          })
          // this.onCancel()
          // Used to close drawer, but ended up erasing this.state.message
        }
      })
  }
  toggleLogo(){
    if(!this.state.smallDevice){
      this.setState({
        openB: !this.state.openB,
        message: this.state.openB ? 
            <Logo smallDevice={this.state.smallDevice}/>
            :
            <HowToPlay page={this.state.page} smallDevice={this.state.smallDevice}/> 
      })
    }
  }
  render (){
    // Backgrounds as JSX
    let imagesTest = [];
    for (let i = 0; i < images.length; i++){
      imagesTest.push(<img src={images[i]} />)
    }
    // Shorthand variable for Scene
    let Scene = Scenes[this.state.scene.index];

    // Buttons for Modal 
    // Returns an array of buttons 
    // 1st 4 only return if looking at Logo / Instructions
    const OK = [(this.state.openB && this.state.openC ? 
      <FlatButton onClick={()=>this.toggleLogo()}
                  disabled={this.state.smallDevice}>
                  Logo
      </FlatButton>
      : null),
      (!this.state.openB && this.state.openC ? 
      <FlatButton onClick={()=>this.toggleLogo()}
                  disabled={this.state.smallDevice}>
                  Instructions
      </FlatButton>
      : null),
      (this.state.openB && this.state.openC ? 
      <FlatButton onClick={()=>this.flipPage(-1)}
                  disabled={this.state.page === 0}>
                  &#60;&#60;
      </FlatButton>
      : null),
      (this.state.openB && this.state.openC ? 
      <FlatButton onClick={()=>this.flipPage(1)}
                  disabled={this.state.page === 4}>
                  >>
      </FlatButton>
      : null),
      (<FlatButton onClick={()=>this.oK()}
                   disabled={this.state.smallDevice}>
          {this.state.openC ? "Let's Play!" : "OK!"}
      </FlatButton>)
              ];

    const BG = {
        "backgroundImage": `url(${images[this.state.background]})`
    }
    console.log(this.state)
    console.log(OK)
    return (
      <MuiThemeProvider>
        <div className="BGcontainer" style={BG}>
            <Dialog open={this.state.openA} 
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
              <Scene
                checkmarks={this.state.scene.checkmarks}
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
                    answer={(i, answer)=>this.answer(i, answer)}
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
                    debug={this.state.debug}
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
                    message={this.state.message}
                    userName={this.state.userName}
                    onUserSave={(mode, user, password)=>this.onUserSave(mode, user, password)}
                    onUserLoad={(user, password)=>this.onUserLoad(user, password)}
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
    screen.width < 675 ? <Logo smallDevice={true} /> : <App />, 
  document.getElementById('root')
);