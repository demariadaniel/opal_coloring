// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Drawer Components
import ColorApp from './ColorApp';
import SceneApp from './SceneApp';
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
    open: false,
    index: 1,
    drawerIs: 'COLOR',
    colors: [white, white, white, white, white, white, white, white, white, white],
    scene: {name:'Sky Castle', icon: "cloud_circle"}
  }
  onColorClick(e, num){
      this.setState({
        open: !this.state.open,
        index: num,
        drawerIs: 'COLOR'
      });
      console.log(this)
  }
  onSceneClick(e){
      this.setState({
        open: !this.state.open,
        drawerIs: 'SCENE'
      });
      console.log(this)
  }
  applyColor(color){
    let newColors = this.state.colors;
    newColors.splice(this.state.index, 1, color);
    this.setState({
      colors: newColors,
      open: false
    });
  }
  applyScene(scene){
    this.setState({
      scene: scene,
      open: false
    });
  }
  render (){
    return (
      <MuiThemeProvider>
        <div className="BGcontainer">
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

            <div className="BG" style={{backgroundColor: this.state.colors[9].color}}>
              {(this.state.scene.name === 'Rainbow') ? <RainbowBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Mermaid') ? <MermaidBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Sky Castle') ? <SkyCastleBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Farm') ? <FarmBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Fairy') ? <FairyBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Treasure') ? <TreasureBox colors={this.state.colors}/> : null}
              {(this.state.scene.name === 'Ghost') ? <GhostBox colors={this.state.colors}/> : null}
            </div>

            <Drawer open={this.state.open} className="drawerStylez">
                {(this.state.drawerIs === 'COLOR') ? <ColorApp applyColor={(color)=>this.applyColor(color)}/> : null}
                {(this.state.drawerIs === 'SCENE') ? <SceneApp applyScene={(scene)=>this.applyScene(scene)}/> : null}
            </Drawer>
            <div className="sceneBtnBox">
              <RaisedButton onClick={e=>this.onSceneClick(e)} className="raised">
                <p className="sceneBtn">Scene: {this.state.scene.name}</p>
                <i className="material-icons md-32 sceneIco">{this.state.scene.icon}</i>
              </RaisedButton>
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
