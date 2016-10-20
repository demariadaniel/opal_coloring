import React, { Component } from 'react';
//import SkyCastle from './scenes/sky_castle';

class SkyCastleBox extends Component {
    state = {
        colors: this.props.colors
    }
    render(){
        console.log(this.state.colors)
        return (
            <div className="skyCastleBox">
                <LayerOne colors={this.state.colors} />
                <LayerTwo colors={this.state.colors} />
                <LayerThree colors={this.state.colors} />
                <LayerFour colors={this.state.colors} />
                <LayerFive colors={this.state.colors} />
                <LayerSix colors={this.state.colors} />
                <LayerSeven colors={this.state.colors} />
                <LayerEight colors={this.state.colors} />
                <LayerNine colors={this.state.colors} />
            </div>
        )
    }
}

class LayerOne extends Component {
    render(){
        return(
            <div style={this.props.colors[0]} className="layer">
                {/* Top Left Cloud */}
                <i className="material-icons md-250"
                    style={{'left': '309px', 'fontSize': '125px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'left': '309px', 'top': '23px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250">
                    cloud
                </i>
                {/* Bottom Right Cloud */}
                <i className="material-icons md-250"
                    style={{'left': '100px', 'top':'250px', 'fontSize': '125px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'left': '209px', 'top':'250px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'left': '-160px', 'top':'250px'}}
                    >
                    cloud
                </i>
            </div>
            )
    }
}

class LayerTwo extends Component {
    render(){
        return(
            <div style={this.props.colors[1]} className="layer">
            {/* Castle Cloud Base */}
                {/* Left */}
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'150px', 'top':'280px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'130px', 'top':'300px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'110px', 'top':'280px'}}
                    >
                    cloud
                </i>
                {/* 3/4 Right */}
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'150px', 'top':'280px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'130px', 'top':'300px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'110px', 'top':'280px'}}
                    >
                    cloud
                </i>
                {/* Far Right */}
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'260px', 'top':'280px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'230px', 'top':'300px'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '125px', 'left':'210px', 'top':'280px'}}
                    >
                    cloud
                </i>
            </div>
            )
    }
}
class LayerThree extends Component {
    render(){
        return(
            <div style={this.props.colors[2]} className="layer">
                <i className="material-icons md-250"
                    style={{'top':'15px', 'left':'15px'}}
                    >
                    brightness_low
                </i>
            </div>
            )
    }
}
class LayerFour extends Component {
    render(){
        return(
            <div style={this.props.colors[3]} className="layer hidden">
                <i className="material-icons md-250"
                    style={{"font-size":"360px"}}
                    >
                    rss_feed
                </i>
            </div>
            )
    }
}
class LayerFive extends Component {
    render(){
        return(
            <div style={this.props.colors[4]} className="layer hidden">
                <i className="material-icons md-250">
                    cloud_circle
                </i>
            </div>
            )
    }
}
class LayerSix extends Component {
    render(){
        return(
            <div style={this.props.colors[5]} className="layer hidden">
                <i className="material-icons md-250">
                    cloud_circle
                </i>
            </div>
            )
    }
}
class LayerSeven extends Component {
    render(){
        return(
            <div style={this.props.colors[6]} className="layer hidden">
                <i className="material-icons md-250">
                    cloud_circle
                </i>
            </div>
            )
    }
}
class LayerEight extends Component {
    render(){
        return(
            <div style={this.props.colors[7]} className="layer hidden">
                <i className="material-icons md-250">
                    cloud_circle
                </i>
            </div>
            )
    }
}
class LayerNine extends Component {
    render(){
        return(
            <div style={this.props.colors[8]} className="layer hidden">
                <i className="material-icons md-250">
                    cloud_circle
                </i>
            </div>
            )
    }
}

export default SkyCastleBox;