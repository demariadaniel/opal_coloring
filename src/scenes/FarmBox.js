import React, { Component } from 'react';
//import Farm from './scenes/farm';

class FarmBox extends Component {
    render(){
        return (
            <div className="farmBox">
                  {this.props.colors.map((color, i)=>{
                    return(
                        <i
                            key={i} 
                            style={this.props.colors[i===9 ? 0 : i]} 
                            className="material-icons md-250">
                            wb_sunny
                        </i>
                        )
                    })
                }
            </div>
        )
    }
}

export default FarmBox;