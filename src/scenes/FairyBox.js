import React, { Component } from 'react';
//import Fairy from './scenes/fairy';

class FairyBox extends Component {
    render(){
        return (
            <div className="fairyBox">
                  {this.props.colors.map((color, j)=>{
                    return(
                        <i
                            key={j} 
                            style={this.props.colors[j===9 ? 0 : j]} 
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