import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {brightColors, everyColor, grey, white} from './AllColors';

class HowToPlay extends Component {
    state = {
        colors: []
    }
    componentDidMount(){
        // Fill array of random colors on page load.
        // Makes sure colors[15] & [16] are not white.
        let rndm = 0;
        let __color = [];
        for(let i = 0; i < 17; i++){
            rndm = parseInt(Math.random()*17);
            if ((i === 15 || i === 16) && (rndm === 17)){
                rndm = parseInt(Math.random()*16);
            }
            __color[i] = brightColors[rndm].color;
        }
        this.setState({
            colors: __color
        })
    }
    render(){
        setTimeout(()=>{
            // Randomly change one color every 300ms
            // Indexes 15/16 (inner stars) should not be white
            let rndm = 0;
            let __color = this.state.colors;
            let i = parseInt(Math.random()*16);
                rndm = parseInt(Math.random()*51);
                let noWhiteStars=()=>{
                    if ((i === 15 || i === 16) && (rndm === 33)){
                        rndm = parseInt(Math.random()*51);
                        noWhiteStars()
                    }
                }
                noWhiteStars()
                __color[i] = everyColor[rndm].color;
                this.setState({
                    colors: __color
                })
        }, 300);
        return(
            <div className="howToPlay">
                <h1>Welcome to Opal!</h1>
                    {/* Logo */}
                <div className="logo">
                        {/* Outline */}
                    <i className="material-icons logoIcon" 
                        style={{"color": white.color, "transform" : "translateX(-50%) scaleY(1.45)",
                                "zIndex" : 5}}>
                            panorama_fisheye
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color":this.state.colors[0], 
                                "transform" : "translateX(-50%) translateY(-16%) rotateZ(180deg) scaleX(1.5)",
                                "zIndex" : 4}}>
                            keyboard_arrow_up
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color":this.state.colors[1], 
                                "transform" : "translateX(-50%) translateY(15%) scaleX(1.5)",
                                "zIndex" : 4}}>
                            keyboard_arrow_up
                    </i>
                                       <i className="material-icons logoIcon" 
                        style={{"color":this.state.colors[14], 
                                "transform" : "translateX(-50%) scaleY(0.9)",
                                "zIndex" : 3}}>
                            stop
                    </i>
                        {/* Top Diamonds */}
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[2], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-73%) translateY(-14%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[3], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-25%) translateY(-14%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[4], 
                                "fontSize":"7rem",
                                "transform" : 
                                    "translateX(-73%) translateY(14%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[5], 
                                "fontSize":"7rem",
                                "transform" : 
                                    "translateX(-25%) translateY(14%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                        {/* Middle Diamonds */}
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[16], "fontSize":"4rem",
                                "transform":"scaleY(1.45) translateY(100%) translateX(-50%",
                                "zIndex" : 5}}>
                            lens
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[6], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-8%) translateY(49%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[7], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-8%) translateY(50%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[8], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-92%) translateY(50%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 2
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[9], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-93%) translateY(49%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                        {/* Bottom Diamonds */}
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[10], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-73%) translateY(113%) scaleY(1.5) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[11], 
                                "fontSize":"8rem",
                                "transform" : 
                                    "translateX(-26%) translateY(113%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[12], 
                                "fontSize":"7rem",
                                "transform" : 
                                    "translateX(-73%) translateY(106%) scaleY(1.5) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[13], 
                                "fontSize":"7rem",
                                "transform" : 
                                    "translateX(-26%) translateY(106%) scaleY(1.5) scaleX(1.45)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                        {/* Stars */}
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[15], 
                                "fontSize":"4rem",
                                "transform" : 
                                    "translateX(-256%) translateY(160%)",
                                "zIndex" : 4
                                }}>
                            grade
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[0], 
                                "fontSize":"4rem",
                                "transform" : 
                                    "translateX(-356%) translateY(160%)",
                                "zIndex" : 4
                                }}>
                            grade
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[15], 
                                "fontSize":"4rem",
                                "transform" : 
                                    "translateX(156%) translateY(160%)",
                                "zIndex" : 4
                                }}>
                            grade
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[16], 
                                "fontSize":"4rem",
                                "transform" : 
                                    "translateX(256%) translateY(160%)",
                                "zIndex" : 4
                                }}>
                            grade
                    </i>
                </div>
                <p>Opal is a kids color-by-numbers app, where surprise pictures are revealed as you play.</p>
                <br/>
                {this.props.smallDevice ? 
                <div>
                    <p>Sorry, Opal is not ready to work on mobile devices yet!</p>
                    <p>Try us out on your laptop or tablet. Thanks!</p>
                </div>
                    : 
                <div>
                    <h2>How to Play</h2>
                    <h3 className="rainbow">Colors</h3>
                        <p>  Click one of the color buttons at the top-right of the screen to open the Colors menu.</p>
                        <p>  Select a color, then press `Choose` and part of the picture will appear.</p>
                        <p>  Choose all 10 colors to see the whole scene!</p>
                    <br/>
                    <h3 className="rainbow">Checkmarks</h3>
                        <p>  Each scene comes with a set of challenges called 'Checkmarks.'</p>
                        <p>  There are a few different types of checkmarks, including Spelling, Counting and Creative questions.</p>
                        <p>  Some checkmarks ask you to change the scene using a slider or by clicking on the picture.</p>
                        <p>  When you have entered your answer, click the square box next to the challenge to complete that </p>
                        <p>checkmark!</p>
                    <br/>
                    <h3 className="rainbow">Coins</h3>
                        <p>  Choosing colors and completing checkmarks will earn you coins!</p>
                        <p>  Coins can be used to unlock new scenes.</p>
                        <p>  Coins can also unlock stickers and animations to keep in your 'Collection'.</p>
                        <p>  'Collection' is not yet finished and will be added to the next version of Opal.</p>
                    <br/>
                    <h3 className="rainbow">Save & Load</h3>
                        <p>  You can save your color palette to use again next time you play.</p>
                        <p>  Open the 'Save' menu, enter a title for your palette and your name, then click 'Save'</p>
                        <p>  Open the 'Load' menu to choose from the list of saved palettes</p> 
                        <p>  Palettes are saved 'community style' so you can use palettes that other players have created!</p>
                    <br/>
                    <h3 className="rainbow">Coming Soon...</h3>
                        <p>More Scenes, More Challenges</p>
                        <p>Animations, Stickers, and more in your Collection</p>
                        <p>Progress Tracking & Autosave</p>
                        <p>Short stories with each scene</p>
                        <p>Share your picture to Facebook</p>
                    <br/>
                </div>
                }
            </div>
            )
        }
    }


export default HowToPlay;
