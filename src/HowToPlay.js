import React, { Component } from 'react';
import Logo from './Logo';
import FlatButton from 'material-ui/FlatButton';
import { brightColors, everyColor, grey, white } from './AllColors';

class HowToPlay extends Component {
    render() {
        // this.props.page determines which page of instructions we see
        console.log(this.props)
        return (
            <div className="howToPlay">
                <h1 style={{ "marginTop": 0 }}>Welcome to Opal!</h1>
                <div>
                    <h2>How to Play</h2>
                    {this.props.page === 0 ?
                        <div>
                            <h3 className="rainbow">Colors</h3>
                            <p>Click one of the color buttons at the top-right of the screen to open the Colors menu.
                           Select a color, then press `Choose` and part of the picture will appear. </p>
                            <p>Choose all 10 colors to see the whole scene!</p>
                        </div>
                        : null}
                    {this.props.page === 1 ?
                        <div>
                            <h3 className="rainbow">Checkmarks</h3>
                            <p>  Each scene comes with a set of challenges called 'Checkmarks.'</p>
                            <p>  There are a few different types of checkmarks, including Spelling, Counting and Creative questions.
                             Some checkmarks ask you to change the scene using a slider or by clicking on the picture.</p>
                            <p>  When you have entered your answer, click the square box next to the challenge to complete that checkmark!</p>
                        </div>
                        : null}
                    {this.props.page === 2 ?
                        <div>
                            <h3 className="rainbow">Coins</h3>
                            <p>  Choosing colors and completing checkmarks will earn you coins!</p>
                            <p>  Coins can be used to unlock new scenes.</p>
                            <p>  Coins can also unlock stickers and animations to keep in your 'Collection'.</p>
                            <p>  'Collection' is not yet finished and will be added to the next version of Opal.</p>
                        </div>
                        : null}
                    {this.props.page === 3 ?
                        <div>
                            <h3 className="rainbow">Save & Load</h3>
                            <p>  You can save your color palette to use again next time you play.</p>
                            <p>  Open the 'Save' menu, enter a title for your palette and your name, then click 'Save'</p>
                            <p>  Open the 'Load' menu to choose from the list of saved palettes</p>
                            <p>  Palettes are saved 'community style' so you can use palettes that other players have created!</p>
                        </div>
                        : null}
                    {this.props.page === 4 ?
                        <div>
                            <h3 className="rainbow">Coming Soon...</h3>
                            <p>More Scenes, More Challenges</p>
                            <p>Animations, Stickers, and more in your Collection</p>
                            <p>Progress Tracking & Autosave</p>
                            <p>Short stories with each scene</p>
                            <p>Share your picture to Facebook</p>
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}


export default HowToPlay;
