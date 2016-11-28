import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {everyColor, grey, white} from './AllColors';

class HowToPlay extends Component {
    state = {
        colors: []
    }
    componentDidMount(){
        let rndm = 0;
        let __color = [];
        for(let i = 0; i < 15; i++){
            rndm = parseInt(Math.random()*51);
            __color[i] = everyColor[rndm].color;
        }
        this.setState({
            colors: __color
        })
    }
    render(index){
        let rndm = 0;
        let __color = this.state.colors;
        setTimeout(()=>{
            let i = parseInt(Math.random()*15);
                rndm = parseInt(Math.random()*51);
                __color[i] = everyColor[rndm].color;
                this.setState({
                    colors: __color
                })
            console.log('a')
        }, 300);
        return(
            <div className="howToPlay">
                <h1>Welcome to Opal!</h1>
                    {/* Logo */}
                <div className="logo">
                        {/* Outline */}
                    <i className="material-icons logoIcon" 
                        style={{"color":this.state.colors[0], 
                                "transform" : "translateX(-50%) translateY(-16%) rotateZ(180deg) scaleX(1.5)"}}>
                            keyboard_arrow_up
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color":this.state.colors[1], 
                                "transform" : "translateX(-50%) translateY(15%) scaleY(1.0) scaleX(1.5)"}}>
                            keyboard_arrow_up
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[14], "transform" : "translateX(-50%) scaleY(1.45)"}}>
                            panorama_fisheye
                    </i>
                        {/* Top Diamonds */}
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[2], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-74%) translateY(-14%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[3], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-25%) translateY(-14%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[4], 
                                "fontSize":"9rem",
                                "transform" : 
                                    "translateX(-74%) translateY(14%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[5], 
                                "fontSize":"9rem",
                                "transform" : 
                                    "translateX(-25%) translateY(14%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                        {/* Middle Diamonds */}
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[6], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-8%) translateY(49%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[7], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-8%) translateY(50%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[8], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-92%) translateY(50%) scaleY(1.45) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 2
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[9], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-93%) translateY(49%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                        {/* Bottom Diamonds */}
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[10], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-74%) translateY(113%) scaleY(1.5) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[11], 
                                "fontSize":"10rem",
                                "transform" : 
                                    "translateX(-25%) translateY(113%) scaleY(1.45) scaleX(1.45)",
                                "zIndex" : 1
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[12], 
                                "fontSize":"9rem",
                                "transform" : 
                                    "translateX(-74%) translateY(106%) scaleY(1.5) scaleX(1.45) rotateZ(180deg)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                    <i className="material-icons logoIcon" 
                        style={{"color": this.state.colors[13], 
                                "fontSize":"9rem",
                                "transform" : 
                                    "translateX(-25%) translateY(106%) scaleY(1.5) scaleX(1.45)",
                                "zIndex" : 3
                                }}>
                            play_arrow
                    </i>
                </div>
                <p>Opal is a kids color-by-numbers app, where surprise pictures are revealed as you play.</p>
                <br/>
                <div>
                    <h2>How to Play</h2>
                    <h3 className="rainbow">Colors</h3>
                        <p>  Click one of the color buttons at the top-right of the screen to open the Colors menu.
                        
                        </p>
                        <p>  Select a color, then press `Choose` and part of the picture will appear.
                        
                        </p>
                        <p>  Choose all 10 colors to see the whole scene!
                        
                        </p>
                    <br/>
                    <h3 className="rainbow">Checkmarks</h3>
                        <p>  Each scene comes with a set of challenges called 'Checkmarks.'
                        
                        </p>
                        <p>  There are a few different types of checkmarks, including Spelling, Counting and Creative questions.
                        
                        </p>
                        <p>  Some checkmarks ask you to change the scene using a slider or by clicking on the picture.
                        
                        </p>
                        <p>  When you have entered your answer, click the square box next to the challenge to complete that 
                        
                        </p>
                        <p>checkmark!</p>
                    <br/>
                    <h3 className="rainbow">Coins</h3>
                        <p>  Choosing colors and completing checkmarks will earn you coins!</p>
                        <p>  Coins can be used to unlock new scenes.</p>
                        <p>  Coins can also unlock stickers and animations to keep in your 'Collection'.</p>
                        <p>  'Collection' will be added to version 2.0 of Opal.</p>
                </div>
            </div>
            )
        }
    }


export default HowToPlay;
