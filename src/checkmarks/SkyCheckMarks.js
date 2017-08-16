import React, { Component } from 'react';

const SkyCheckMarks = {
    complete: 0,
    checkmarks: 
    [
        {
            text: "Count the number of Balloons",
            type: "COUNT",
            answer: 3,
            prize: 3,
            complete: false,
            incorrect: "Incorrect. Look closely..."
        },{
            text: "How many arrows can you see on the castle?",
            type: "COUNT",
            answer: 7,
            prize: 3,
            complete: false
        },{
            text: "Give the Kingdom a Name",
            type: "CREATIVE",
            prize: 3,
            complete: false,
            correct: function(answer){
                return(`Welcome to the majestic kingdom of ${answer}. Shrouded in mystery, many people believe that the castle is only a legend, having never seen it with their own two eyes. `)} 
        },{
            text: "Give the Knight a Name",
            type: "CREATIVE",
            prize: 3,
            complete: false,
            correct: function(answer){
                return(`All bow before the legendary hero, ${answer}. His enchanted sword has protected the kingdom against countless monsters. But one man may not be enough to defeat this newest threat!`)}
        },
        {
            text: "Give the Princess a Name",
            type: "CREATIVE",
            prize: 3,
            complete: false,
            correct: function(answer){
                return(`Introducing the smartest and kindest soul in the entire kingdom, ${answer}. She has studied the many monsters that roam the skies, but will need all her courage to tame this dragon!`)}
        },{
            text: "Fix the Crooked Flag",
            type: "SLIDER",
            kind: 'rotate',
            value: 'flag',
            max: 30,
            min: -30,
            minAnswer: -3,
            maxAnswer: 3,
            default: 14,            
            prize: 5,
            complete: false,
            incorrect: "Not quite, just a little bit more..."
        },{
            text: "Find the Hidden Treasure",
            type: "SLIDER",
            kind: 'move',
            value: 'treasure',
            step: 0.5,
            max: 3,
            min: 0,
            minAnswer: 1.5,
            maxAnswer: 3,
            default: 0,
            clickAnswer: false,
            hint: 'You found it! Now click the treasure to complete the challenge.',
            incorrect: 'Keep looking...',
            prize: 10,
            complete: false
        },{
            text: "Fly the Dragon",
            type: "SLIDER",
            kind: 'move',
            value: 'dragon',
            max: 16,
            min: -8,
            minAnswer: 12,
            maxAnswer: 16,
            default: 0,
            prize: 10,
            complete: false,
            incorrect: 'Make the dragon breathe fire!'
        }
    ]
};

export default SkyCheckMarks;