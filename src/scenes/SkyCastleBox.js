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
                <LayerOne color={this.state.colors[0].color} />
                <LayerTwo color={this.state.colors[1].color} />
                <LayerThree color={this.state.colors[2].color} />
                <LayerFour color={this.state.colors[3].color} />
                <LayerFive color={this.state.colors[4].color} />
                <LayerSix color={this.state.colors[5].color} />
                <LayerSeven color={this.state.colors[6].color} />
                <LayerEight color={this.state.colors[7].color} />
                <LayerNine color={this.state.colors[8].color} />
            </div>
        )
    }
}

class LayerOne extends Component {
    render(){
        return(
            <div style={{"color":this.props.color, "zIndex":"2"}} className="layer">
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
            <div style={{"color":this.props.color, "zIndex":"3"}} className="layer">
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
                {/* Balloon */}
                <i className="material-icons md-250"
                    style={{"left": "22.5rem", "top": "4rem", "fontSize": "3rem", "position":"absolute",
                    "transform":"rotateZ(-30deg)"}}
                    >
                    room
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
            <div style={{"color":this.props.color, 'zIndex':3}} className="layer">
                {/* Sun & Rays */}
                <i className="material-icons md-250"
                    style={{"font-size":'10rem', "position":'absolute'}}
                    >
                    brightness_low
                </i>
                <div style={{"transform": "rotateZ(-22.5deg)", "top": "2.25rem", "left": "-1.25rem", 
                "position": "absolute"}}>
                    <i className="material-icons md-250"
                        style={{'transform':'rotateZ(90deg)', 'fontSize':'2.5rem', "position":'absolute', "top":"-2.25rem", "left":"3.25rem"}}
                        >
                        hdr_strong
                    </i>
                    <i className="material-icons md-250"
                        style={{'transform':'rotateZ(145deg)', 'fontSize':'2.5rem', "position":'absolute', "top":"-.25rem", "left":"8rem"}}
                        >
                        hdr_strong
                    </i>
                    <i className="material-icons md-250"
                        style={{'transform':'rotateZ(180deg)', 'fontSize':'2.5rem', "position":'absolute', 
                        "top":"3.75rem", "left":"9.5rem"}}
                        >
                        hdr_strong
                    </i>
                    <i className="material-icons md-250"
                        style={{'transform':'rotateZ(225deg)', 'fontSize':'2.5rem', "position":'absolute',
                        "top":"8rem", "left":"8rem" }}
                        >
                        hdr_strong
                    </i>
                    <i className="material-icons md-250"
                        style={{'transform':'rotateZ(270deg)', 'fontSize':'2.5rem', "position":'absolute',
                        "top":"9.5rem", "left":"3.75rem" }}
                        >
                        hdr_strong
                    </i>
                    <i className="material-icons md-250"
                        style={{'transform':'rotateZ(-45deg)', 'fontSize':'2.5rem', "position":'absolute', "top":"8rem", "left":"-.5rem" }}
                        >
                        hdr_strong
                    </i>
                    <i className="material-icons md-250"
                        style={{'fontSize':'2.5rem', "position":'absolute', "top":"3.75rem", "left":"-2rem" }}
                        >
                        hdr_strong
                    </i>
                    <i className="material-icons md-250"
                        style={{'transform':'rotateZ(45deg)', 'fontSize':'2.5rem', "position":'absolute', 
                        "top":"-.25rem", "left":"-.5rem"}}
                        >
                        hdr_strong
                    </i>
                </div>
                {/* Balloon Strings */}
                <i className="material-icons md-250"
                    style={{"left": "24rem", "top": "6rem", "fontSize": "2rem", "position":"absolute",
                    "transform":"rotateZ(210deg)"}}
                    >
                    gesture
                </i>
                <i className="material-icons md-250"
                    style={{"left": "21rem", "top": "3rem", "fontSize": "2rem", "position":"absolute",
                    "transform":"rotateZ(210deg)"}}
                    >
                    gesture
                </i>
                <i className="material-icons md-250"
                    style={{"left": "20rem", "top": "6rem", "fontSize": "2rem", "position":"absolute",
                    "transform":"rotateZ(210deg)"}}
                    >
                    gesture
                </i>
            </div>
            )
    }
}
class LayerFour extends Component {
    render(){
        return(
            <div style={{"color":this.props.color, "zIndex":"1"}} className="layer">
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
                {/* Balloon */}
                <i className="material-icons md-250"
                    style={{"left": "19.4rem", "top": "1rem", "fontSize": "3rem", "position":"absolute",
                    "transform":"rotateZ(-30deg)"}}
                    >
                    room
                </i>
            </div>
            )
    }
}
class LayerFive extends Component {
    render(){
        return(
            <div style={{"color":this.props.color}} className="layer">
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
                {/* Balloon */}
                <i className="material-icons md-250"
                    style={{"left": "18.4rem", "top": "4rem", "fontSize": "3rem", "position":"absolute",
                    "transform":"rotateZ(-30deg)"}}
                    >
                    room
                </i>
            </div>
            )
    }
}
class LayerSix extends Component {
    render(){
        return(
            <div style={{"color":this.props.color, "zIndex":"1"}} className="layer">
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
            <div style={{"color":this.props.color}} className="layer hidden">
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
            <div style={{"color": this.props.color, "zIndex":"4"}} className="layer">
                <div style={{"position": "absolute", "left": "-4rem", "top": "3rem"}}>
                 {/* Dragon Head */} 
                 <i className="material-icons md-250"
                    style={{"left": "16rem", "top": "9.25rem", "fontSize": "3rem", "position":"absolute",
                    "transform":"rotateZ(80deg)"
                    }}>
                    explore
                </i>
                <i className="material-icons md-250"
                    style={{"left": "18rem", "top": "9.5rem", "fontSize": "4rem", "position":"absolute",
                    "transform":"rotateZ(115deg)"
                    }}>
                    bluetooth
                </i>
                <i className="material-icons md-250"
                    style={{"left": "16.5rem", "top": "11rem", "fontSize": "4rem", "position":"absolute",
                    "transform":"rotateZ(-45deg)"
                    }}>
                    bluetooth
                </i>
                <i className="material-icons md-250"
                    style={{"left": "18rem", "top": "6.5rem", "fontSize": "8rem", "position":"absolute",
                    "transform":"rotateZ(-66deg)"
                    }}>
                    flash_on
                </i>
                <i className="material-icons md-250"
                    style={{"left": "15rem", "top": "4.5rem", "fontSize": "8rem", "position":"absolute",
                    "transform":"rotateZ(-66deg)"
                    }}>
                    flash_on
                </i>
                 <i className="material-icons md-250"
                    style={{"left": "12.5rem", "top": "9.25rem", "fontSize": "8rem", "position":"absolute",
                    "transform":"rotateZ(315deg) rotateY(180deg)"
                    }}>
                    flash_on
                </i>
                <i className="material-icons md-250"
                    style={{"left": "15rem", "top": "11.5rem", "fontSize": "7rem", "position":"absolute",
                    "transform":"rotateZ(315deg) rotateY(180deg)"
                    }}>
                    flash_on
                </i>
                </div>
                {/* Dragon Body */}
                <i className="material-icons md-250"
                    style={{"left": "2rem", "top": "10.5rem", "fontSize": "7rem", "position":"absolute",
                    "transform":"rotateZ(-9deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "4rem", "top": "13rem", "fontSize": "7rem", "position":"absolute",
                    "transform":"rotateZ(171deg) rotateY(180deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "1.5rem", "top": "15rem", "fontSize": "7rem", "position":"absolute",
                    "transform":"rotateZ(130deg) rotateY(180deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "-0.5rem", "top": "17rem", "fontSize": "7rem", "position":"absolute",
                    "transform":"rotateZ(259deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "2.5rem", "top": "19.75rem", "fontSize": "7rem", "position":"absolute",
                    "transform":"rotateZ(220deg)"
                    }}>
                    terrain
                </i>
            </div>
            )
    }
}
class LayerNine extends Component {
    render(){
        return(
            <div style={{"color":this.props.color}} className="layer hidden">
                <i className="material-icons md-250">
                    cloud_circle
                </i>
            </div>
            )
    }
}

export default SkyCastleBox;