import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class HowToPlay extends Component {
    state = {
        tutorial : false
    }
    // componentWillUnmount(){
    //     console.log('unmount')
    //     this.setState({
    //         tutorial: false
    //     })
    // }
    tutorial(){
        this.setState({
            tutorial: true
        })
    }
    render(){
        return(
            <div className="howToPlay">
                <h1>Welcome to Opal!</h1>
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
