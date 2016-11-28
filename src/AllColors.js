import {red500, red900, redA200, 
    pink500, pink900, pinkA200, 
    purple500, purple900, purpleA200, 
    deepPurple500, deepPurple900, deepPurpleA200, 
    indigo500, indigo900, indigoA400, 
    blue500, blue900, blueA400, 
    lightBlue500, lightBlue900, lightBlueA200, 
    cyan500, cyan900, cyanA200, 
    teal500, teal900, tealA400, 
    green500, green900, greenA400, 
    lightGreen500, lightGreen900, lightGreenA400, 
    lime500, lime900, limeA400, 
    yellow500, yellowA700, yellowA200, 
    amber500, amber900, amberA200, 
    orange500, orange900, orangeA100, 
    deepOrange500, brown800, deepOrangeA200, 
    grey800, grey400
                    } from 'material-ui/styles/colors';

  const red = {color: red500, name: 'Red', change: false};
  const pink = {color: pink500, name: 'Pink', change: false};
  const purple = {color: purple500, name: 'Purple', change: false};
  const deepPurple = {color: deepPurple500, name: 'Deep Purple', change: false};
  const indigo = {color: indigo500, name: 'Indigo', change: false};
  const blue = {color: blue500, name: 'Blue', change: false};
  const lightBlue = {color: lightBlue500, name: 'Light Blue', change: false};
  const cyan = {color: cyan500, name: 'Cyan', change: false};
  const teal = {color: teal500, name: 'Teal', change: false};
  const green = {color: green500, name: 'Green', change: false};
  const lightGreen = {color: lightGreen500, name: 'Light Green', change: false};
  const lime = {color: lime500, name: 'Lime', change: false};
  const yellow = {color: yellow500, name: 'Yellow', change: false};
  const amber = {color: amber500, name: 'Amber', change: false};
  const orange = {color: orange500, name: 'Orange', change: false};
  const deepOrange = {color: deepOrange500, name: 'Deep Orange', change: false};
  const grey = {color: grey400, name: 'Grey', change: false};

  const redBr = {color: redA200, name: 'Red', change: false};
  const pinkBr = {color: pinkA200, name: 'Pink', change: false};
  const purpleBr = {color: purpleA200, name: 'Purple', change: false};
  const deepPurpleBr = {color: deepPurpleA200, name: 'Deep Purple', change: false};
  const indigoBr = {color: indigoA400, name: 'Indigo', change: false};
  const blueBr = {color: blueA400, name: 'Blue', change: false};
  const lightBlueBr = {color: lightBlueA200, name: 'Light Blue', change: false};
  const cyanBr = {color: cyanA200, name: 'Cyan', change: false};
  const tealBr = {color: tealA400, name: 'Teal', change: false};
  const greenBr = {color: greenA400, name: 'Green', change: false};
  const lightGreenBr = {color: lightGreenA400, name: 'Light Green', change: false};
  const limeBr = {color: limeA400, name: 'Lime', change: false};
  const yellowBr = {color: yellowA200, name: 'Yellow', change: false};
  const amberBr = {color: amberA200, name: 'Amber', change: false};
  const orangeBr = {color: orangeA100, name: 'Orange', change: false};
  const deepOrangeBr = {color: deepOrangeA200, name: 'Deep Orange', change: false};
  const white = {color: 'white', name: 'White', change: false};
  
  const redDk = {color: red900, name: 'Red', change: false};
  const pinkDk = {color: pink900, name: 'Pink', change: false};
  const purpleDk = {color: purple900, name: 'Purple', change: false};
  const deepPurpleDk = {color: deepPurple900, name: 'Deep Purple', change: false};
  const indigoDk = {color: indigo900, name: 'Indigo', change: false};
  const blueDk = {color: blue900, name: 'Blue', change: false};
  const lightBlueDk = {color: lightBlue900, name: 'Light Blue', change: false};
  const cyanDk = {color: cyan900, name: 'Cyan', change: false};
  const tealDk = {color: teal900, name: 'Teal', change: false};
  const greenDk = {color: green900, name: 'Green', change: false};
  const lightGreenDk = {color: lightGreen900, name: 'Light Green', change: false};
  const limeDk = {color: lime900, name: 'Lime', change: false};
  const yellowDk = {color: yellowA700, name: 'Yellow', change: false};
  const amberDk = {color: amber900, name: 'Amber', change: false};
  const orangeDk = {color: orange900, name: 'Orange', change: false};
  const brownDk = {color: brown800, name: 'Dark Brown', change: false};
  const darkGrey = {color: grey800, name: 'Dark Grey', change: false};

const stdColors = [purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, red, pink, grey];

const brightColors = [purpleBr, deepPurpleBr, indigoBr, blueBr, lightBlueBr, cyanBr, tealBr, greenBr, lightGreenBr, limeBr, yellowBr, amberBr, orangeBr, deepOrangeBr, redBr, pinkBr, white];

const darkColors = [purpleDk, deepPurpleDk, indigoDk, blueDk, lightBlueDk, cyanDk, tealDk, greenDk, lightGreenDk, limeDk, yellowDk, amberDk, orangeDk, brownDk, redDk, pinkDk, darkGrey];

const everyColor = stdColors.concat(brightColors).concat(darkColors);

export {stdColors, brightColors, darkColors, white, grey, darkGrey, everyColor}