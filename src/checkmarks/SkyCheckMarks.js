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
            correct: 'Welcome to the majestic kingdom of ' 
        },{
            text: "Give the Knight a Name",
            type: "CREATIVE",
            prize: 3,
            complete: false,
            correct: 'All bow before the legendary hero, '
        },
        {
            text: "Give the Princess a Name",
            type: "CREATIVE",
            prize: 3,
            complete: false,
            correct: 'Introducing the smartest and kindest soul in the entire kingdom, '
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
            max: 62,
            min: 59,
            minAnswer: 60.5,
            maxAnswer: 62,
            default: 59,
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
            minAnswer: -3,
            maxAnswer: 1,
            default: 0,
            prize: 10,
            complete: false,
            incorrect: 'Make the dragon retreat from the heroes!'
        },{
            text: "Help the Heroes defeat the Dragon",
            type: "CLICK",
            count: 0,
            answer: 4,
            prize: 10,
            complete: false
        }
    ]
};

export default SkyCheckMarks;