import React, { Component } from 'react';
//import SkyCastle from './scenes/sky_castle';

class SkyCastleBox extends Component {
    render(){
        return (
            <div className="skyCastleBox">
                  {this.props.colors.map((color, i)=>{
                    return(
                        <i
                            key={i} 
                            style={this.props.colors[i===9 ? 0 : i]} 
                            className="material-icons md-250">
                            cloud_circle
                        </i>
                        )
                    })
                }
            </div>
        )
    }
}

export default SkyCastleBox;