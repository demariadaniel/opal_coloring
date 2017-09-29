import React, { Component } from 'react';
let placeholder = true;
//import Fairy from './scenes/fairy';

class FairyBox extends Component {
    render(){
        if (!this.props.test){
            return (
                <div className="fairyBox">
                    <LayerOne   color={this.props.colors[0].color} />
                    <LayerTwo   color={this.props.colors[1].color} />
                    <LayerThree   color={this.props.colors[2].color} />
                    <LayerFour   color={this.props.colors[3].color} />
                    <LayerFive   color={this.props.colors[4].color} />
                    <LayerSix   color={this.props.colors[5].color} />
                    <LayerSeven   color={this.props.colors[6].color} />
                    <LayerEight   color={this.props.colors[7].color} />
                    <LayerNine   color={this.props.colors[8].color} />
                </div>
            )
        } else {
            return (
                <div className="fairyBox">
                    {/* Placeholder scene. Map each color on to an icon. Color 9
                    is the background, so use color 0 instead when i === 9.   */}
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
}

class LayerOne extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
                <i style={{"top": "25rem", "left":"30rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                    local_florist
                </i>
                <i style={{"top": "25rem", "left":"32rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                    local_florist
                </i>
                <i style={{"top": "25rem", "left":"34rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                    local_florist
                </i>
                <i style={{"top": "25rem", "left":"36rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                    local_florist
                </i>
            </div>
        )
    }
}

class LayerTwo extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
                <i style={{"top": "19rem", "left":"31rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                        local_florist
                </i>
                <i style={{"top": "19rem", "left":"33rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                        local_florist
                </i>
                <i style={{"top": "19rem", "left":"35rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                        local_florist
                </i>
            </div>
        )
    }
}

class LayerThree extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
                <i style={{"top": "12rem", "left":"32rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                        local_florist
                </i>
                <i style={{"top": "12rem", "left":"34rem", "font-size": "4rem"}}
                    className="material-icons md-250">
                        local_florist
                </i>
            </div>
        )
    }
}

class LayerFour extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
            </div>
        )
    }
}

class LayerFive extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
            </div>
        )
    }
}

class LayerSix extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
            </div>
        )
    }
}

class LayerSeven extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
            </div>
        )
    }
}

class LayerEight extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
            </div>
        )
    }
}

class LayerNine extends Component {
    render(){
        return (
            <div style={{"color":this.props.color}} >
            </div>
        )
    }
}

export default FairyBox;