import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ColorApp from './ColorApp';
import {white, darkGrey} from './AllColors';
import RainbowBox from './RainbowBox';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import './App.css';

class App extends Component {
  state = {
    open: false,
    index: 1,
    drawerIs: 'COLOR',
    colors: [white, white, white, white, white, white, white, white, white, white]
  }
  onColorClick(e, button, num){
      this.setState({
        open: !this.state.open,
        index: num
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
  render (){
    return (
      <MuiThemeProvider>
        <div className="BGcontainer">
          <div className="colorBtnBox">
              {this.state.colors.map((color, i)=>{
                if(i<5){
                  return(
                    <RaisedButton key={i} onClick={e=>this.onColorClick(e, 'COLOR', i)} className="raised">
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
                    <RaisedButton key={i} onClick={e=>this.onColorClick(e, 'COLOR', i)} className="raised">
                        <p className="colorBtn">Color {i+1}</p>
                          <i className="material-icons md-32 colorIco" style={this.state.colors[i]}>opacity</i>
                    </RaisedButton>
                  )
                  } else {return null}
                })
              }
              <RaisedButton key={9} onClick={e=>this.onColorClick(e, 'COLOR', 9)} className="raised">
                          <p className="colorBtn">BG</p>
                            <i className="material-icons md-32 colorIco" style={this.state.colors[9]}>opacity</i>
              </RaisedButton>
            </div>

            <div className="BG" style={{backgroundColor: this.state.colors[9].color}}>
                <RainbowBox colors={this.state.colors}/>
            </div>

            <Drawer open={this.state.open} className="drawerStylez">
                {(this.state.drawerIs === 'COLOR') ? <ColorApp applyColor={(color)=>this.applyColor(color)}/> : null}
            </Drawer>

        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
    <App />, 
  document.getElementById('root')
);
