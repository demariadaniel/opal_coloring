import React, { Component } from 'react';

class SkyCastleBox extends Component {
    state = {
        colors: this.props.colors,
        test: false,
    }
    render(){
        return (
            <div className="skyCastleBox">
                <LayerOne color={this.state.colors[0].color} />
                <LayerTwo color={this.state.colors[1].color} />
                <LayerThree color={this.state.colors[2].color} />
                <LayerFour color={this.state.colors[3].color} />
                <LayerFive color={this.state.colors[4].color} 
                            flag={this.props.slider.flag} />
                <LayerSix color={this.state.colors[5].color} />
                <DragonLayer color0={this.state.colors[6].color} 
                            color1={this.state.colors[7].color} 
                            dragon={this.props.slider.dragon} />
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
                    style={{'left': '19.3125rem', 'fontSize': '7.8125rem', 'top': '-2rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250"
                    style={{'left': '19.3125rem', 'top': '-0.5rem'}}
                    >
                    cloud
                </i>
                <i className="material-icons md-250" style={{'top': '-2rem'}}>
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
                {/* Outline Clouds */}
               <i className="material-icons md-250" 
                    style={{'top': '15rem', "left": "20.25rem", "fontSize": "11rem", 
                    "position":"absolute"}}>
                    filter_drama
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
                    style={{'fontSize': '7.8125rem', 'left':'12rem', 'top':'18.5rem'}}
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
                    style={{"left": "22.5rem", "top": "3rem", "fontSize": "3rem", "position":"absolute",
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
                {/* Old Sun: 10rem Old Rays: top 2.25 left -1.25 no scale */}
                <i className="material-icons md-250"
                    style={{"fontSize":'8rem', "position":'absolute', "left":"7rem"}}
                    >
                    brightness_low
                </i>
                <div style={{"transform": "rotateZ(-22.5deg) scale(0.7)", "top": "2.25rem", "left": "6.5rem", 
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
                    style={{"left": "24rem", "top": "5rem", "fontSize": "2rem", "position":"absolute",
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
                {/* Sword */}
                {/* In hand: left:30, top:16.25, fontSize:3, rotateZ(180) */}
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "30rem", "top": "17.75rem", "fontSize": "3rem",
                    "transform":"rotateZ(120deg) rotateY(-180deg)"}}>
                    colorize
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
        let brokenFlag=()=>{
            let style = {
                "left": "47.75rem", 
                "top": "3rem", 
                "fontSize": "4rem", 
                "position":"absolute",
                "transformOrigin": "bottom center",
                "transform": "rotateZ("+this.props.flag+")"
            }
            return style
        }
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
                    style={brokenFlag()}
                    >
                    assistant_photo
                </i>
                <i className="material-icons md-250"
                    style={{"left": "68rem", "top": "3rem", "fontSize": "4rem", "position":"absolute"}}
                    >
                    assistant_photo
                </i>

                {/* Princess Wand */}
              {/*  <i className="material-icons md-250"
                    style={{"left": "53.25rem", "top": "11.5rem", "fontSize": "4rem", "position":"absolute",
                        "transform":"rotateZ(180deg)"
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
class DragonLayer extends Component {
    render(){
        let dragonChallenge =()=>{
            let _top = (0.5*this.props.dragon.top).toString();
            if (_top.charAt(0) === "-"){
                _top = _top.substring(1)
            } else {
                _top = '-' + _top
            }
            let style = {
                'left': this.props.dragon.left + "rem",
                'top': _top + "rem"
            }
            return style
        }
        let wingFlap =()=>{
            let rotate = this.props.dragon.rotate;
            let style={
                "position": "absolute", 
                "left": "-1rem", 
                "top": "0.5rem",
                "transformOrigin":"100% 100%",
                "transform":"rotateZ("+rotate+"deg)"
            }
            return style
        }
        return(
            <div className="layer wing" style={dragonChallenge()}>
            <div style={{"color":this.props.color0, "zIndex":"6"}} className="layer">
                {/* Wing */}
                <div style={wingFlap()}>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "0rem", "top": "2.25rem", "fontSize": "10rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "0.5rem", "top": "5.75rem", "fontSize": "10rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                 <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "3.5rem", "top": "7.25rem", "fontSize": "10rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "0.25rem", "top": "4rem", "fontSize": "10rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                 <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "4.25rem", "top": "6.25rem", "fontSize": "8rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                 <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "2rem", "top": "7rem", "fontSize": "8rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "3.4rem", "top": "5.5rem", "fontSize": "8rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "5rem", "top": "8.5rem", "fontSize": "8rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "2rem", "top": "5.5rem", "fontSize": "8rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "3rem", "top": "5rem", "fontSize": "7rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "6rem", "top": "9.5rem", "fontSize": "7rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                 <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "3rem", "top": "8rem", "fontSize": "7rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                 <i className="material-icons md-250"
                    style={{"position": "absolute", "left": "5.25rem", "top": "7.25rem", "fontSize": "7rem",
                    "transform":"rotateZ(-180deg) rotateY(-180deg)"}}>
                    done
                </i>
                </div>
                {/* Details */}
                <i className="material-icons md-250"
                    style={{"left": "13rem", "top": "10rem", "fontSize": "4rem", "position":"absolute",
                    "transform":"rotateY(180deg)"
                    }}>
                    show_chart
                </i>
                <i className="material-icons md-250"
                    style={{"left": "12rem", "top": "14.25rem", "fontSize": "4rem", "position":"absolute",
                    "transform":"rotateZ(215deg)"
                    }}>
                    show_chart
                </i>
             {/*   <i className="material-icons md-250"
                    style={{"left": "3rem", "top": "14.25rem", "fontSize": "2rem", "position":"absolute",
                    "transform":"rotateZ(56deg)"
                    }}>
                    details
                </i>
                <i className="material-icons md-250"
                    style={{"left": "4.5rem", "top": "17.25rem", "fontSize": "2rem", "position":"absolute",
                    "transform":"rotateZ(80deg)"
                    }}>
                    details
                </i>
                <i className="material-icons md-250"
                    style={{"left": "3rem", "top": "14.25rem", "fontSize": "2rem", "position":"absolute",
                    "transform":"rotateZ(56deg)"
                    }}>
                    details
                </i>
                <i className="material-icons md-250"
                    style={{"left": "4.5rem", "top": "17.25rem", "fontSize": "2rem", "position":"absolute",
                    "transform":"rotateZ(80deg)"
                    }}>
                    details
                </i> */}
            </div>
            <div style={{"color": this.props.color1, "zIndex":"4"}} className="layer">
                {/* Old rotate: left: -4, top: 3, 0 rotate */}
                <div style={{"position": "absolute", "left": "-4rem", "top": "10rem",
                    "transform":"rotateZ(-18deg)"}}>
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
                    style={{"left": "8rem", "top": "7.5rem", "fontSize": "9rem", "position":"absolute"}}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "6.5rem", "top": "12rem", "fontSize": "8.5rem", "position":"absolute",
                    "transform":"rotateY(180deg) rotateZ(180deg)"
                    }}>
                    terrain
                </i>
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
                    style={{"left": "2.5rem", "top": "21.75rem", "fontSize": "7rem", "position":"absolute",
                    "transform":"rotateZ(220deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "8rem", "top": "25rem", "fontSize": "6rem", "position":"absolute",
                    "transform":"rotateZ(200deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "13rem", "top": "26.25rem", "fontSize": "5rem", "position":"absolute",
                    "transform":"rotateZ(185deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "17rem", "top": "27rem", "fontSize": "3rem", "position":"absolute",
                    "transform":"rotateZ(186deg)"
                    }}>
                    terrain
                </i>
                <i className="material-icons md-250"
                    style={{"left": "19.5rem", "top": "27.25rem", "fontSize": "3rem", "position":"absolute",
                    "transform":"rotateZ(185deg)"
                    }}>
                    terrain
                </i>
                {/* Spikes */}
                <i className="material-icons md-250"
                    style={{"left": "4rem", "top": "21rem", "fontSize": "5rem", "position":"absolute",
                    "transform":"rotateZ(225deg)"
                    }}>
                    fast_forward
                </i>
                <i className="material-icons md-250"
                    style={{"left": "9rem", "top": "24.5rem", "fontSize": "4rem", "position":"absolute",
                    "transform":"rotateZ(195deg)"
                    }}>
                    fast_forward
                </i>
                <i className="material-icons md-250"
                    style={{"left": "13.5rem", "top": "26rem", "fontSize": "3rem", "position":"absolute",
                    "transform":"rotateZ(185deg)"
                    }}>
                    fast_forward
                </i>
            </div>
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