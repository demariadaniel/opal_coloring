import React, { Component } from 'react';
//import Fairy from './scenes/fairy';

class FairyBox extends Component {
    render(){
        return (
            <div className="fairyBox">
                  {this.props.colors.map((color, i)=>{
                    return(
                        <i
                            key={i} 
                            style={this.props.colors[i===9 ? 0 : i]} 
                            className="material-icons md-250">
                            local_florist
                        </i>
                        )
                    })
                }
            </div>
        )
    }
}

export default FairyBox;