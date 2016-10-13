import React, { Component } from 'react';

class RainbowBox extends Component {
    render(){
        return (
            <div className="rainbowBox">
                {this.props.colors.map((color, i)=>{
                    return(
                        <i
                            key={i} 
                            style={this.props.colors[i==9 ? 0 : i]} 
                            className="material-icons md-250">
                            leak_add
                        </i>
                        )
                    })
                }
            </div>
        )
    }
}

export default RainbowBox;