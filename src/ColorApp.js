import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {stdColors, brightColors, darkColors, white, grey}  from './AllColors.js'

class ColorApp extends Component {
  state = {
    myColor: {color: "#222"},
    colors: stdColors
  }
  onColorClick(e, color) {
    this.setState({myColor: color})
  }
  onLightClick(e, colors) {
      if (colors === "BRIGHT") {
          this.setState({colors: brightColors})
      } else if (colors === "DARK") {
          this.setState({colors: darkColors})
      } else if (colors === "NORMAL") {
          this.setState({colors: stdColors})
      } else {
          this.setState({colors: stdColors})
    }
  }
  applyColor(){
      this.props.applyColor(this.state.myColor);
      this.setState({myColor: {color: "#222"}});
  }
  render() {
    return (
        <div className="App">
          <div className="App-header">
            {this.state.colors.map(color=>{
                return (
                  <FlatButton 
                      style={color} 
                      rippleColor={color.color}
                      onClick={e=>this.onColorClick(e, color)}
                      key={color.color}    
                      >
                      {color.name}
                  </FlatButton>
                )
              })      
            }
            <div className="shades">
                <FlatButton onClick={e=>this.onLightClick(e, "BRIGHT")} style={grey}>
                    Bright
                </FlatButton>
                <FlatButton onClick={e=>this.onLightClick(e, "NORMAL")} style={grey}>
                    Normal
                </FlatButton>
                <FlatButton onClick={e=>this.onLightClick(e, "DARK")} style={grey}>
                    Dark
                </FlatButton>
            </div>
            <FlatButton style={white} onClick={()=>this.applyColor()}>
                Apply
            </FlatButton>
          </div>
          <div 
            className="colorPreview"
            style={{backgroundColor: this.state.myColor.color}}
              >
          </div>
        </div>
    );
  }
}

export default ColorApp;
