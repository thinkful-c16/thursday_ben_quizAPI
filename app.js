'use strict';

// In-memory database of questions, answers, and correct answer



// *************************
// Create your initial store
// *************************

const STORE = { };

let userQuestionCount = 0;
let userDifficulty = '';

const QUESTIONS = [];


// *************************
// *** Query results object:
// *************************

function getQuizParameters(url) {
  $.getJSON(url, function(data) {
    console.log(data);
  });
}

// *************************
// *** Event Listeners
// *************************
function handleUserInputs() {
  $('.container').on('click', '#start-button', event => {
    event.preventDefault();
    userQuestionCount = $('#user-questionCount').val();
    userDifficulty = $('#user-difficulty').val();
    console.log(userDifficulty, userQuestionCount);
    const apiURL = `https://opentdb.com/api.php?amount=${userQuestionCount}&category=28&difficulty=${userDifficulty}&type=multiple`;
    getQuizParameters(apiURL);
    console.log(apiURL);
  });
  // console.log(userDifficulty);
}

$(function () {
  handleUserInputs();
});