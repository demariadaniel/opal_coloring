// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Drawer Components
import ColorApp from './ColorApp';
import SceneApp from './SceneApp';
import CoinsApp from './CoinsApp';
import ChecksApp from './ChecksApp';
import ChallengesApp from './ChallengesApp';
import FileApp from './FileApp';
// Scenes
import FairyBox from './scenes/FairyBox';
import FarmBox from './scenes/FarmBox';
import GhostBox from './scenes/GhostBox';
import MermaidBox from './scenes/MermaidBox';
import RainbowBox from './scenes/RainbowBox';
import SkyCastleBox from './scenes/SkyCastleBox';
import TreasureBox from './scenes/TreasureBox';
// Material Components
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Styles & Colors
import {white} from './AllColors';
import './styles/index.css';
import './styles/App.css';

class App extends Component {
  state = {
    openL: false,
    openR: false,
    index: 1,
    drawerIs: 'COLOR',
    colors: [white, white, white, white, white, white, white, white, white, white],
    scene: {name:'Sky Castle', icon: "cloud_circle", isUnlocked: true}
  }
  onCancel(){
    this.setState({openL: false, openR: false})
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
            index: num,
            drawerIs: 'COLOR'
        })
      }, 200)
      } else {
      this.setState({
        openR: !this.state.openR,
        index: num,
        drawerIs: 'COLOR'
      })
    }
  }
  onAppClick(e, app, side){
        if (this.state.openL || this.state.openR){
        this.setState({
          openL: false,
          openR: false,  
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
  applyColor(color){
    let newColors = this.state.colors;
    newColors.splice(this.state.index, 1, color);
    this.setState({
      colors: newColors,
      openR: false
    });
  }
  applyScene(scene){
    this.setState({
      scene: scene,
      openL: false
    });
  }
  render (){
    return (
      <MuiThemeProvider>
        <div className="BGcontainer">
          
          {/* Color Buttons */}
          <div className="colorBtnBox">
              {this.state.colors.map((color, i)=>{
                if(i<5){
                  return(
                    <RaisedButton key={i} onClick={e=>this.onColorClick(e, i)} className="raised">
                        <p className="colorBtn">Color {i+1}</p>
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
                        <p className="colorBtn">Color {i+1}</p>
                        <i className="material-icons md-32 colorIco" style={this.state.colors[i]}>opacity</i>
                    </RaisedButton>
                  )
                  } else {return null}
                })
              }
              <RaisedButton key={9} onClick={e=>this.onColorClick(e, 9)} className="raised">
                  <p className="colorBtn">BG</p>
                  <i className="material-icons md-32 colorIco" style={this.state.colors[9]}>opacity</i>
              </RaisedButton>
            </div>

            {/* Canvas */}
            <div className="BG" style={{backgroundColor: this.state.colors[9].color}}>
              {(this.state.scene.name === 'Rainbow') ? <RainbowBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Mermaid') ? <MermaidBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Sky Castle') ? <SkyCastleBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Farm') ? <FarmBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Fairy') ? <FairyBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Treasure') ? <TreasureBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Ghost') ? <GhostBox colors={this.state.colors}/> : null}
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
                    /> 
                  : null}
                  {(this.state.drawerIs === 'CHALLENGES') ? 
                  <ChallengesApp 
                    applyScene={(scene)=>this.applyScene(scene)}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
            </Drawer>
            <Drawer open={this.state.openL} className="drawerStylez">
                {(this.state.drawerIs === 'COINS') ? 
                  <CoinsApp 
                    applyColor={(color)=>this.applyColor(color)}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
                {(this.state.drawerIs === 'SCENE') ? 
                  <SceneApp 
                    applyScene={(scene)=>this.applyScene(scene)}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
                {(this.state.drawerIs === 'FILE') ? 
                  <FileApp 
                    applyScene={(scene)=>this.applyScene(scene)}
                    onCancel={()=>this.onCancel()}
                    /> 
                  : null}
            </Drawer>


            {/* Scene, Coins, Checkmarks, Challenges Buttons */}
            <div className="btmBtnBox">
              <div className="btmBtnBoxLeft">
                <RaisedButton onClick={e=>this.onAppClick(e, "SCENE", "openL")} className="raised">
                  <p className="sceneBtn">
                    Scene: {this.state.scene.isUnlocked ? this.state.scene.name : "?????"}
                  </p>
                  <i className="material-icons md-32 sceneIco">{this.state.scene.icon}</i>
                </RaisedButton>
                <RaisedButton onClick={e=>this.onAppClick(e, "COINS", "openL")} className="raised">
                  <p className="sceneBtn">Coins</p>
                  <i className="material-icons md-32 sceneIco">camera</i>
                </RaisedButton>
              </div>
              <div className="btmBtnBoxRight">
                <RaisedButton onClick={e=>this.onAppClick(e, "CHECKS", "openR")} className="raised">
                  <p className="checkBtn">Checkmarks</p>
                  <i className="material-icons md-32 sceneIco">check</i>
                </RaisedButton>
                <RaisedButton onClick={e=>this.onAppClick(e, "CHALLENGES", "openR")} className="raised">
                  <p className="challengeBtn">Challenges</p>
                  <i className="material-icons md-32 sceneIco">beenhere</i>
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
