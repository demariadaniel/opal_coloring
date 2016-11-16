import React, { Component } from 'react';

const SkyCheckMarks = {
    complete: 0,
    checkmarks: 
    [
        {
            text: "Count the Balloons",
            type: "COUNT",
            answer: ["3", "three"],
            prize: 3,
            complete: false
        },{
            text: "Give the Kingdom a Name",
            type: "CREATIVE",
            prize: 3,
            complete: false
        },{
            text: "Help the Heroes defeat the Dragon",
            type: "CLICK",
            count: 0,
            answer: 4,
            prize: 3,
            complete: false
        },{
            text: "Find the Hidden Treasure",
            type: "CLICK",
            count: 0,
            answer: 2,
            prize: 3,
            complete: false
        }
    ]
};

export default SkyCheckMarks;