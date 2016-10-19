import React, { Component } from 'react';
//import Ghost from './scenes/ghost';

class GhostBox extends Component {
    render(){
        return (
            <div className="ghostBox">
                  {this.props.colors.map((color, i)=>{
                    return(
                        <i
                            key={i} 
                            style={this.props.colors[i===9 ? 0 : i]} 
                            className="material-icons md-250">
                            all_inclusive
                        </i>
                        )
                    })
                }
            </div>
        )
    }
}

export default GhostBox;