import React, { Component } from 'react';

class Layer extends Component {
    render(){
        return (
                <i 
                    style={this.props.color} 
                    className="material-icons md-250">
                    leak_add
                </i>
        )
    }
}

// class Mermaid extends Component {
//     render(){
//         return(
//                 {this.props.colors.map((color, i)=>{
//                     return (<Layer key={i} color={color}/>)
//                 })
//             }
//         )
//     }
// }

//export default Mermaid;