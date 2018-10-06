var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var surveyQs = [
    {
        question: 'How much do you like Beyoncé?'
    },
    {
        question: 'How much do you like Donald Trump?'
    },
    {
        question: 'How much do you like Emma Stone?'
    },
    {
        question: 'How much do you like James Baldwin?'
    },
    {
        question: 'How much do you like RuPaul?'
    },
    {
        question: 'How much do you like Antonio Banderas?'
    },
    {
        question: 'How much do you like Kimberlé Crenshaw?'
    },
    {
        question: 'How much do you like Walt Disney?'
    },
    {
        question: 'How much do you like Michelle Obama?'
    },
    {
        question: 'How much do you like yourself?'
    }
];

var friends = [
    {
        name: 'Reeve',
        photo: '',
        scores: [5, 2, 3, 4, 1, 4, 5, 3, 5, 2],
        compatScore: 0
    },
    {
        name: 'John',
        photo: '',
        scores: [5, 4, 3, 2, 1, 5, 4, 3, 2, 1],
        compatScore: 0
    }
];

function determineCompatiblity(user) {
    var results = user.scores;

    for(i = 0; i < friends.length; i++) {
        var newCompatScore = Math.abs(results[i] - friends[i].scores[i]);
        friends[i].compatScore = newCompatScore;
    }

    for(i = 0; i < friends.length; i++) {
        for(j = 0; j < friends.length; j++) {
            if(friends[i].compatScore < friends[j].compatScore) {
                
            }
        }
    }
}

determineCompatiblity(friends[0])