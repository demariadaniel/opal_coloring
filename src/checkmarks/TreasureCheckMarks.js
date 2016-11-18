import React, { Component } from 'react';

const TreasureCheckMarks = {
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
            text: "Raise the Crooked Flag",
            type: "SLIDER",
            answer: 45,
            prize: 5,
            complete: false
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

export default TreasureCheckMarks;