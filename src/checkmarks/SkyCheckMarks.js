import React, { Component } from 'react';

const SkyCheckMarks = {
    complete: 0,
    checkmarks: 
    [
        {
            text: "Count the number of Balloons",
            type: "COUNT",
            answer: ["3", "three"],
            prize: 3,
            complete: false,
            incorrect: "Incorrect. Look closely..."
        },{
            text: "Count the number of Birds",
            type: "COUNT",
            answer: ["2", "two"],
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
            complete: false
        },
        {
            text: "Give the Princess a Name",
            type: "CREATIVE",
            prize: 3,
            complete: false
        },{
            text: "Fix the Crooked Flag",
            type: "SLIDER",
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
            text: "Help the Heroes defeat the Dragon",
            type: "CLICK",
            count: 0,
            answer: 4,
            prize: 10,
            complete: false
        },{
            text: "Find the Hidden Treasure",
            type: "CLICK",
            count: 0,
            answer: 2,
            prize: 10,
            complete: false
        },
    ]
};

export default SkyCheckMarks;