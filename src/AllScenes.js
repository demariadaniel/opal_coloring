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

// Scene Objects
let SkyCastle = {name:'Sky Castle', icon: "cloud_circle", isUnlocked: true, scene: SkyCastleBox, 
                checkmarks: SkyCheckMarks};
let Fairy = {name:'Fairy', icon: "local_florist", isUnlocked: false, scene: FairyBox};
let Space = {name:'Space', icon: "wb_sunny", isUnlocked: false, scene: FarmBox};
let Ghost = {name:'Ghost', icon: "all_inclusive", isUnlocked: false, scene: GhostBox};
let Mermaid = {name:'Mermaid', icon: "filter_tilt_shift", isUnlocked: false, scene: MermaidBox};
let Rainbow = {name:'Rainbow', icon: "leak_add", isUnlocked: false, scene: RainbowBox};
let Treasure = {name:'Treasure', icon: "star_half", isUnlocked: false, scene: TreasureBox};

const AllScenes = [SkyCastle, Fairy, Space, Ghost, Mermaid, Rainbow, Treasure];

export {FairyBox, FarmBox, GhostBox, MermaidBox, RainbowBox, SkyCastleBox, TreasureBox, AllScenes};