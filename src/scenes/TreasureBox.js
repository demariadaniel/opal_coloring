import React, { Component } from 'react';
//import Treasure from './scenes/treasure';

class TreasureBox extends Component {
    render(){
        return (
            <div className="treasureBox">
                  {this.props.colors.map((color, i)=>{
                    return(
                        <i
                            key={i} 
                            style={this.props.colors[i===9 ? 0 : i]} 
                            className="material-icons md-250">
                            texture
                        </i>
                        )
                    })
                }
            </div>
        )
    }
}

export default TreasureBox;