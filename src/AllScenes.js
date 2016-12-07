// Scene Components
import FairyBox from './scenes/FairyBox';
import FarmBox from './scenes/FarmBox';
import GhostBox from './scenes/GhostBox';
import MermaidBox from './scenes/MermaidBox';
import RainbowBox from './scenes/RainbowBox';
import SkyCastleBox from './scenes/SkyCastleBox';
import TreasureBox from './scenes/TreasureBox';

//Checkmarks
import SkyCheckMarks from './checkmarks/SkyCheckMarks';
import FairyCheckMarks from './checkmarks/FairyCheckMarks';
import SpaceCheckMarks from './checkmarks/SkyCheckMarks';
import GhostCheckMarks from './checkmarks/FairyCheckMarks';
import MermaidCheckMarks from './checkmarks/SkyCheckMarks';
import RainbowCheckMarks from './checkmarks/FairyCheckMarks';
import TreasureCheckMarks from './checkmarks/FairyCheckMarks';

import {white} from './AllColors';

const defaultColors = [white, white, white, white, white, white, white, white, white, white];

// Scene Objects
let SkyCastle = {name:'Sky Castle', icon: "cloud_circle", isUnlocked: true, scene: SkyCastleBox, 
                checkmarks: SkyCheckMarks, colors: defaultColors};
let Fairy = {name:'Fairy', icon: "local_florist", isUnlocked: false, scene: FairyBox, 
                checkmarks: FairyCheckMarks, colors: defaultColors};
let Space = {name:'Space', icon: "wb_sunny", isUnlocked: false, scene: FarmBox,
                checkmarks: SpaceCheckMarks, colors: defaultColors};
let Ghost = {name:'Ghost', icon: "all_inclusive", isUnlocked: false, scene: GhostBox, 
                checkmarks: GhostCheckMarks, colors: defaultColors};
let Mermaid = {name:'Mermaid', icon: "filter_tilt_shift", isUnlocked: false, scene: MermaidBox, 
                checkmarks: MermaidCheckMarks, colors: defaultColors};
let Rainbow = {name:'Rainbow', icon: "leak_add", isUnlocked: false, scene: RainbowBox, 
                checkmarks: RainbowCheckMarks, colors: defaultColors};
let Treasure = {name:'Treasure', icon: "star_half", isUnlocked: false, scene: TreasureBox, 
                checkmarks: TreasureCheckMarks, colors: defaultColors};

const AllScenes = [SkyCastle, Fairy, Space, Ghost, Mermaid, Rainbow, Treasure];

export {FairyBox, FarmBox, GhostBox, MermaidBox, RainbowBox, SkyCastleBox, TreasureBox, AllScenes};