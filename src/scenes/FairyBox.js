import React, { Component } from 'react';
let placeholder = true;
//import Fairy from './scenes/fairy';

class FairyBox extends Component {
    render() {
        if (!this.props.test) {
            return (
                <div className="fairyBox">
                    <LayerOne color={this.props.colors} />
                    <LayerTwo color={this.props.colors} />
                    <LayerThree color={this.props.colors} />
                    <LayerFour color={this.props.colors[3].color} />
                    <LayerFive color={this.props.colors[4].color} />
                    <LayerSix color={this.props.colors[5].color} />
                    <LayerSeven color={this.props.colors[6].color} />
                    <LayerEight color={this.props.colors[7].color} />
                    <LayerNine color={this.props.colors[8].color} />
                </div>
            )
        } else {
            return (
                <div className="fairyBox">
                    {/* Placeholder scene. Map each color on to an icon. Color 9
                    is the background, so use color 0 instead when i === 9.   */}
                    {this.props.colors.map((color, j) => {
                        return (
                            <i
                                key={j}
                                style={this.props.colors[j === 9 ? 0 : j]}
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
    render() {
        let index = () => Math.floor(Math.random() * 3);
        // Random color: "color":this.props.color[index()].color
        return (
            <div>
                <i style={{
                    "top": "30rem", "left": "0rem", "font-size": "3rem",
                    "color": this.props.color[0].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "30rem", "left": "5rem", "font-size": "3rem",
                    "color": this.props.color[1].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "30rem", "left": "10rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
               {/* <i style={{
                    "top": "30rem", "left": "15rem", "font-size": "3rem",
                    "color": this.props.color[1].color
                }}
                    className="material-icons design">
                    local_florist
                </i>*/}
                <i style={{
                    "top": "30rem", "left": "20rem", "font-size": "3rem",
                    "color": this.props.color[0].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                {/*<i style={{
                    "top": "30rem", "left": "25rem", "font-size": "3rem",
                    "color": this.props.color[1].color
                }}
                    className="material-icons design">
                    local_florist
                </i>*/}
                <i style={{
                    "top": "30rem", "left": "30rem", "font-size": "3rem",
                    "color": this.props.color[2].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "30rem", "left": "35rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "30rem", "left": "40rem", "font-size": "3rem",
                    "color": this.props.color[0].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                {/*<i style={{
                    "top": "30rem", "left": "45rem", "font-size": "3rem",
                    "color": this.props.color[1].color
                }}
                    className="material-icons design">
                    local_florist
                </i>*/}
                <i style={{
                    "top": "30rem", "left": "50rem", "font-size": "3rem",
                    "color": this.props.color[2].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "30rem", "left": "55rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "27rem", "left": "75rem", "font-size": "3rem",
                    "color": this.props.color[1].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
            </div>
        )
    }
}

class LayerTwo extends Component {
    render() {
        let index = () => Math.floor(Math.random() * 3);
        return (
            <div>
                {/*<i style={{
                    "top": "27rem", "left": "2.5rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
            </i>*/}
                <i style={{
                    "top": "27rem", "left": "7.5rem", "font-size": "3rem",
                    "color": this.props.color[index()].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "27rem", "left": "12.5rem", "font-size": "3rem",
                    "color": this.props.color[1].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "27rem", "left": "17.5rem", "font-size": "3rem",
                    "color": this.props.color[2].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "27rem", "left": "22.5rem", "font-size": "3rem",
                    "color": this.props.color[index()].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "27rem", "left": "27.5rem", "font-size": "3rem",
                    "color": this.props.color[0].color}}
                    className="material-icons design">
                    local_florist
                </i>
                {/*<i style={{"top": "27rem", "left":"32.5rem", "font-size": "3rem",
                    "color":this.props.color[1].color}}
                    className="material-icons design">
                    local_florist
                </i>*/}
                <i style={{"top": "27rem", "left":"37.5rem", "font-size": "3rem",
                    "color":this.props.color[2].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{"top": "27rem", "left":"42.5rem", "font-size": "3rem",
                    "color":this.props.color[1].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{"top": "27rem", "left":"47.5rem", "font-size": "3rem",
                    "color":this.props.color[index()].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{"top": "27rem", "left":"52.5rem", "font-size": "3rem",
                    "color":this.props.color[1].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{"top": "27rem", "left":"57.5rem", "font-size": "3rem",
                    "color":this.props.color[0].color}}
                    className="material-icons design">
                    local_florist
                </i>
                {/*<i style={{"top": "27rem", "left":"62.5rem", "font-size": "3rem",
                    "color":this.props.color[1].color}}
                    className="material-icons design">
                    local_florist
            </i>*/}
                <i style={{"top": "27rem", "left":"67.5rem", "font-size": "3rem",
                    "color":this.props.color[2].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{"top": "27rem", "left":"72.5rem", "font-size": "3rem",
                    "color":this.props.color[index()].color}}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "27rem", "left": "77.5rem", "font-size": "3rem",
                    "color": this.props.color[0].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                {/*<i style={{
                    "top": "27rem", "left": "82.5rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>*/}
            </div>
        )
    }
}

class LayerThree extends Component {
    render() {
        let index = () => Math.floor(Math.random() * 3);
        return (
            <div>
                <i style={{
                    "top": "24rem", "left": "5rem", "font-size": "3rem",
                    "color": this.props.color[2].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "10rem", "font-size": "3rem",
                    "color": this.props.color[0].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "15rem", "font-size": "3rem",
                    "color": this.props.color[1].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "25rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "30rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                {/*<i style={{
                    "top": "24rem", "left": "35rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>*/}
                <i style={{
                    "top": "24rem", "left": "40rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "45rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "55rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "60rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "65rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>
                <i style={{
                    "top": "24rem", "left": "70rem", "font-size": "3rem",
                    "color": this.props.color[index()].color
                }}
                    className="material-icons design">
                    local_florist
                </i>

            </div>
        )
    }
}

class LayerFour extends Component {
    render() {
        return (
            <div style={{ "color": this.props.color }} >
            </div>
        )
    }
}

class LayerFive extends Component {
    render() {
        return (
            <div style={{ "color": this.props.color }} >
            </div>
        )
    }
}

class LayerSix extends Component {
    render() {
        return (
            <div style={{ "color": this.props.color }} >
            </div>
        )
    }
}

class LayerSeven extends Component {
    render() {
        return (
            <div style={{ "color": this.props.color }} >
            </div>
        )
    }
}

class LayerEight extends Component {
    render() {
        return (
            <div style={{ "color": this.props.color }} >
            </div>
        )
    }
}

class LayerNine extends Component {
    render() {
        return (
            <div style={{ "color": this.props.color }} >
            </div>
        )
    }
}

export default FairyBox;