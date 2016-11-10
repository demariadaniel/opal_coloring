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
import {FairyBox, FarmBox, GhostBox, MermaidBox, RainbowBox, 
    SkyCastleBox, TreasureBox, AllScenes} from './AllScenes';
// Material Components
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Styles & Colors
import {white} from './AllColors';
import './styles/index.css';
import './styles/App.css';

//export initColors array from AllColors

// all scenes imported/managed by SceneApp
// BG/ternary operator moved to SceneApp
//  change BG to display this.state.currentScene.scene
//  each scene object has it's Box component as a property
//  export scenes array from SceneApp  

//colorIndex
//sceneIndex


class App extends Component {
  state = {
    openL: false,
    openR: false,
    colorIndex: 1,
    sceneIndex: 0,
    drawerIs: 'COLOR',
    colors: [white, white, white, white, white, white, white, white, white, white],
    scene: AllScenes[0],
    scenes: AllScenes,
    coins: 0,
    coinFlip: false,
    buying: false
  }
  onCancel(){
    this.setState({openL: false, openR: false, buying: false})
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
    let newCoins = this.state.coins;
    console.log(color)
    if (this.state.colors[this.state.colorIndex].change===false){
      console.log(this.state.colors[this.state.colorIndex])
      color.change = true;
      newCoins += 1;
    }
    console.log(newCoins)
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
        balance -= 9;
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
  buyScene(){
    this.setState({
      openL: false,
      drawerIs: 'SCENE',
      buying: true 
    })
    console.log(this.state);
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
  render (){
    return (
      <MuiThemeProvider>
        <div className="BGcontainer">
          {/* Color Buttons */}
          <div className="colorBtnBox">
             {/* Debug Cheat Button */}
             {/* <i className="material-icons md-32 colorIco" 
                onClick={(e)=>this.cheat(e)}>
                track_changes
              </i> */}
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
                  <p className="menuBtn">Checkmarks</p>
                  <i className="material-icons md-32 sceneIco">check</i>
                </RaisedButton>
                <RaisedButton onClick={e=>this.onAppClick(e, "CHALLENGES", "openR")} className="raised">
                  <p className="menuBtn">Challenges</p>
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