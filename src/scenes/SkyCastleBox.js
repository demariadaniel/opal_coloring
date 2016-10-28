import React, { Component } from 'react';

 {/* REM Measurements: 
     7.8125rem = 125px
     3.4375rem = 55px
     22.5rem   = 360px
                        */}

class SkyCastleBox extends Component {
    state = {
        colors: this.props.colors,
        test: false
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
            <div style={{"color":this.props.colors[0].color, "zIndex":"2"}} className="layer">
                {/* Top Left Cloud */}
                <i className="material-icons md-250"
                    style={{'left': '19.3125rem', 'fontSize': '7.8125rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'left': '19.3125rem', 'top': '1.5rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250">
                    cloud
                </i>
                {/* Bottom Right Cloud */}
                <i className="material-icons md-250"
                    style={{'left': '6.25rem', 'top':'15.625rem', 'fontSize': '7.8125rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'left': '13.0625rem', 'top':'15.625rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'left': '-10rem', 'top':'15.625rem'}}
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
            <div style={{"color":this.props.colors[1].color, "zIndex":"3"}} className="layer">
            {/* Castle Cloud Base */}
                {/* Left */}
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'9.375rem', 'top':'17.5rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'8.125rem', 'top':'18.75rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'6.875rem', 'top':'17.5rem'}}
                    >
                    cloud
                </i>
                {/* 3/4 Right */}
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'9.375rem', 'top':'17.5rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'8.125rem', 'top':'18.75rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'6.875rem', 'top':'17.5rem'}}
                    >
                    cloud
                </i>
                {/* Far Right */}
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'16.25rem', 'top':'17.5rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'14.375rem', 'top':'18.75rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'fontSize': '7.8125rem', 'left':'13.125rem', 'top':'17.5rem'}}
                    >
                    cloud
                </i>
                {/* Crack in Wall */}
           {/*     <i className="material-icons md-250"
                    style={{"left": "75rem", "top": "12rem", "fontSize": "6rem", "position":"absolute"}} 
                    onClick={e=>{console.log('click works')}} 
                    >
                    show_chart
                </i>
                <i className="material-icons md-250"
                    style={{"left": "75rem", "top": "12rem", "fontSize": "5rem", "position":"absolute",
                    "transform": "rotateZ(63deg)"}}
                    onClick={e=>{console.log('click works')}} 
                    >
                    show_chart
                </i> */}
                {/* Hidden Panel */}
               {/* <i className="material-icons md-250"
                    style={{"left": "77.5rem", "top": "8.1rem", "fontSize": "4rem", "position":"absolute"}}
                    >
                    folder
                </i> */}
            </div>
            )
    }
}
class LayerThree extends Component {
    render(){
        return(
            <div style={this.props.colors[2]} className="layer">
                {/* Sun & Rays */}
                <i className="material-icons md-250"
                    style={{'top':'1rem', 'left':'1rem'}}
                    >
                    brightness_low
                </i>
                <i className="material-icons md-250"
                    style={{'transform':'rotateZ(160deg)', 'fontSize':'3.4375rem', 'top':'-8.6875rem'}}
                    >
                    hdr_strong
                </i>
                <i className="material-icons md-250"
                    style={{'transform':'rotateZ(200deg)', 'fontSize':'3.4375rem', 'left': '-3.25rem', 'top':'-2rem'}}
                    >
                    hdr_strong
                </i>
                <i className="material-icons md-250"
                    style={{'transform':'rotateZ(245deg)', 'fontSize':'3.4375rem', 'left': '-11.6875rem', 'top':'55px'}}
                    >
                    hdr_strong
                </i>
                <i className="material-icons md-250"
                    style={{'transform':'rotateZ(285deg)', 'fontSize':'3.4375rem', 'left': '-22.5rem', 'top':'3.625rem'}}
                    >
                    hdr_strong
                </i>
            </div>
            )
    }
}
class LayerFour extends Component {
    render(){
        return(
            <div style={{"color":this.props.colors[3].color, "zIndex":"1"}} className="layer">
                {/* Tower Details */}
                <i className="material-icons md-250"
                    style={{"fontSize":"8rem", "left":"36.75rem", "top":"3.6rem"}}
                    >
                    power_input
                </i>
                <i className="material-icons md-250"
                    style={{"fontSize":"8rem", "left":"65.75rem", "top":"3.6rem"}}
                    >
                    power_input
                </i>
                {/* Top of Walls */}
                <i className="material-icons md-250"
                    style={{"fontSize":"5rem", "left":"27rem", "top":"1.85rem"}}
                    >
                   keyboard_capslock
                </i>
                <i className="material-icons md-250"
                    style={{"fontSize":"5rem", "left":"25.5rem", "top":"1.85rem"}}
                    >
                   keyboard_capslock
                </i>
                <i className="material-icons md-250"
                    style={{"fontSize":"5rem", "left":"24rem", "top":"1.85rem"}}
                    >
                   keyboard_capslock
                </i>
                <i className="material-icons md-250"
                    style={{"fontSize":"5rem", "left":"32rem", "top":"1.85rem"}}
                    >
                   keyboard_capslock
                </i>
                <i className="material-icons md-250"
                    style={{"fontSize":"5rem", "left":"30.5rem", "top":"1.85rem"}}
                    >
                   keyboard_capslock
                </i>
                <i className="material-icons md-250"
                    style={{"fontSize":"5rem", "left":"29rem", "top":"1.85rem"}}
                    >
                   keyboard_capslock
                </i>
                {/* Stairs */}
                <i className="material-icons md-250"
                    style={{"left": "56.5rem", "top": "6.75rem", "fontSize": "5rem", "position":"absolute",
                        "transform":"rotateZ(180deg)"
                    }}>
                    dehaze
                </i>
                {/* Walls */}
                <i className="material-icons md-250"
                    style={{"left": "43rem", "top": "10rem", "fontSize": "12rem", "position":"absolute"
                    }}>
                    border_inner
                </i>
                <i className="material-icons md-250"
                    style={{"left": "63rem", "top": "10rem", "fontSize": "12rem", "position":"absolute"
                    }}>
                    border_inner
                </i>
            </div>
            )
    }
}
class LayerFive extends Component {
    render(){
        return(
            <div style={this.props.colors[4]} className="layer">
                {/* Roof */}
                <i className="material-icons md-250"
                    style={{"left": "56.65rem", "top": "-0.25rem", "fontSize": "5rem", "position":"absolute"}}
                    >
                    account_balance
                </i>
                {/* Flag */}
                <i className="material-icons md-250"
                    style={{"left": "48rem", "top": "3rem", "fontSize": "4rem", "position":"absolute"}}
                    >
                    assistant_photo
                </i>
                <i className="material-icons md-250"
                    style={{"left": "68rem", "top": "3rem", "fontSize": "4rem", "position":"absolute"}}
                    >
                    assistant_photo
                </i>
                {/* Lights */}
              {/*}  <i className="material-icons md-250"
                    style={{"left": "53.25rem", "top": "11.5rem", "fontSize": "4rem", "position":"absolute",
                        "transform":"rotateZ(180deg)"
                    }} >
                    mic_none
                </i>
                <i className="material-icons md-250"
                    style={{"left": "60.75rem", "top": "11.5rem", "fontSize": "4rem", "position":"absolute",
                        "transform":"rotateZ(180deg)"
                    }} >
                    mic_none
                </i>
                <i className="material-icons md-250"
                    style={{"left": "53.25rem", "top": "12.8rem", "fontSize": "4rem", "position":"absolute"
                    }} >
                    mic_none
                </i>
                <i className="material-icons md-250"
                    style={{"left": "60.75rem", "top": "12.8rem", "fontSize": "4rem", "position":"absolute"
                    }} >
                    mic_none
                </i>
                <i className="material-icons md-250"
                    style={{"left": "53.25rem", "top": "3.5rem", "fontSize": "4rem", "position":"absolute",
                        "transform":"rotateZ(180deg)"
                    }} >
                    mic_none
                </i>
                <i className="material-icons md-250"
                    style={{"left": "60.75rem", "top": "3.5rem", "fontSize": "4rem", "position":"absolute",
                        "transform":"rotateZ(180deg)"
                    }} >
                    mic_none
                </i>
               <i className="material-icons md-250"
                    style={{"left": "53.25rem", "top": "4.8rem", "fontSize": "4rem", "position":"absolute"
                    }} >
                    mic_none
                </i>
                <i className="material-icons md-250"
                    style={{"left": "60.75rem", "top": "4.8rem", "fontSize": "4rem", "position":"absolute",
                    }} >
                    mic_none
                </i> */}
                 {/* Center Arrows */}
                <i className="material-icons md-250"
                    style={{"left": "52.75rem", "top": "7.5rem", "fontSize": "5rem", "position":"absolute",
                    "transform":"rotateZ(90deg)"
                    }} >
                    trending_flat
                </i>
                <i className="material-icons md-250"
                    style={{"left": "60.25rem", "top": "7.5rem", "fontSize": "5rem", "position":"absolute",
                    "transform":"rotateZ(90deg)"
                    }} >
                    trending_flat
                </i>
                <i className="material-icons md-250"
                    style={{"left": "52.75rem", "top": "15.5rem", "fontSize": "5rem", "position":"absolute",
                    "transform":"rotateZ(90deg)"
                    }} >
                    trending_flat
                </i>
                <i className="material-icons md-250"
                    style={{"left": "60.25rem", "top": "15.5rem", "fontSize": "5rem", "position":"absolute",
                    "transform":"rotateZ(90deg)"
                    }} >
                    trending_flat
                </i>
                {/* Airbending Symbols */}
                <i className="material-icons md-250"
                    style={{"left": "54.25rem", "top": "12.75rem", "fontSize": "2rem", "position":"absolute"
                    }} >
                    arrow_downward
                </i>
                <i className="material-icons md-250"
                    style={{"left": "53.75rem", "top": "12.75rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    panorama_fish_eye
                </i>
                <i className="material-icons md-250"
                    style={{"left": "48rem", "top": "8.5rem", "fontSize": "2rem", "position":"absolute"
                    }} >
                    arrow_downward
                </i>
                <i className="material-icons md-250"
                    style={{"left": "47.5rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    panorama_fish_eye
                </i>
                <i className="material-icons md-250"
                    style={{"left": "68rem", "top": "8.5rem", "fontSize": "2rem", "position":"absolute"
                    }} >
                    arrow_downward
                </i>
                <i className="material-icons md-250"
                    style={{"left": "67.5rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    panorama_fish_eye
                </i>
                <i className="material-icons md-250"
                    style={{"left": "61.75rem", "top": "12.75rem", "fontSize": "2rem", "position":"absolute"
                    }} >
                    arrow_downward
                </i>
                <i className="material-icons md-250"
                    style={{"left": "61.25rem", "top": "12.75rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    panorama_fish_eye
                </i>
            </div>
            )
    }
}
class LayerSix extends Component {
    render(){
        return(
            <div style={{"color":this.props.colors[5].color, "zIndex":"1"}} className="layer">
                {/* Left Tower */}
                <i className="material-icons md-250"
                    style={{"transform":"rotateZ(180deg)", "left": "36rem", "fontSize": "9rem"}}
                    >
                    line_style
                </i>
                <i className="material-icons md-250"
                    style={{"left": "27rem", "top": "8rem", "fontSize": "9rem"}}
                    >
                    dashboard
                </i>
                <i className="material-icons md-250"
                    style={{"left": "18rem", "top": "14rem", "fontSize": "9rem"}}
                    >
                    dashboard
                </i>
                {/* Right Tower */}
                <i className="material-icons md-250"
                    style={{"transform":"rotateZ(180deg)", "left": "46rem", "fontSize": "9rem"}}
                    >
                    line_style
                </i>
                <i className="material-icons md-250"
                    style={{"left": "37rem", "top": "8rem", "fontSize": "9rem"}}
                    >
                    dashboard
                </i>
                <i className="material-icons md-250"
                    style={{"left": "28rem", "top": "14rem", "fontSize": "9rem"}}
                    >
                    dashboard
                </i>
                {/* Doorway */}
                <i className="material-icons md-250"
                    style={{"left": "54rem", "top": "10rem", "fontSize": "10rem", "position":"absolute",
                    "transform":"rotateZ(180deg)"
                    }}
                    >
                    format_underline
                </i>
                <i className="material-icons md-250"
                    style={{"left": "56rem", "top": "16rem", "fontSize": "6rem", "position":"absolute",
                    "transform":"rotateZ(180deg)"
                    }}
                    >
                    view_headline
                </i>
                {/* Throne */}
                <i className="material-icons md-250"
                    style={{"left": "56rem", "top": "5rem", "fontSize": "3rem", "position":"absolute"}}
                    >
                    event_seat
                </i>
                <i className="material-icons md-250"
                    style={{"left": "59rem", "top": "5rem", "fontSize": "3rem", "position":"absolute"}}
                    >
                    event_seat
                </i>
                {/* Inner Walls */}
                <i className="material-icons md-250"
                    style={{"left": "44rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
                </i>
                <i className="material-icons md-250"
                    style={{"left": "44.5rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
                </i>
                <i className="material-icons md-250"
                    style={{"left": "51rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
                </i>
                <i className="material-icons md-250"
                    style={{"left": "50.5rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
                </i>
                <i className="material-icons md-250"
                    style={{"left": "71rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
                </i>
                <i className="material-icons md-250"
                    style={{"left": "70.5rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
                </i>
                <i className="material-icons md-250"
                    style={{"left": "64rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
                </i>
                <i className="material-icons md-250"
                    style={{"left": "64.5rem", "top": "8.5rem", "fontSize": "3rem", "position":"absolute"
                    }} >
                    border_clear
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
            <div style={{"color": this.props.colors[7].color, "zIndex":"2"}} className="layer">

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