//GLOBAL VARIABLES
let count = 30;
let counter;
let correctAnswers = 0;
let wrongAnswers = 0;
let answers = [
    'A. The Upside Down',
    'C. Barb',
    'B. Hawkins Labs',
    'C. Run',
    'A. Eight',
    'B. Eggos',
    'A. Dart',
    'B. Telepathy',
    'B. Demogorgon',
    'B. Castle Byers',
]

//main array
    //questions
        //choices

//for loop each index for questions

let triviaCurrent = 0; 
let questionChoices = [{
            question:'Where was Will taken to when he was abducted?', 
            choices:[
            'A. The Upside Down',
            'B. A Strangers Van',
            'C. He has been hiding at Mikes house',
            ],
        },
            {question:'What was Nancy’s bestfriend’s name?',
            choices:[ 
            'A. Jenn',
            'B. Cathy',
            'C. Barb',
            ], 
        },
            {question:'Eleven was escaping what facility?',
            choices:[ 
            'A. Star Labs',
            'B. Hawkins Labs',
            'C. Tuskegee Labs',
            ],
        },
            {question:'What did Will write to Joyce in the Christmas lights?',
            choices:[
            'A. Help me',
            'B. Im Scared',
            'C. Run',
            ],
        },
            {question:'What other test subject did Eleven reunite with in Season 2?',
            choices:['A. Eight',
            'B. Two',
            'C. Six',            
            ],
        },
            {question:'What is Elevens favorite food?',
            choices:['A. Nachos',
            'B. Eggos',
            'C. Chips',
            ],
        },
            {question:'What did Dustin name the creature he found in his trash can?',
            choices:[
            'A. Dart',
            'B. Spot',
            'C. Buddy',
            ],
        },
            {question:'What kind of powers does Eleven have?',
            choices:[
            'A. Invisibility',
            'B. Telepathy',
            'C. Flight',
            ],
        },
            {question:'What do the kids call the creatures in the Upside Down?',
            choices:[
            'A. Demonites',
            'B. Demogorgon',
            'C. Sith Lords',
            ],
        },
            {question:'Where did Will go when he needed to get away to read his comics and draw?',
            choices:[
            'A. Wheeler Palace',
            'B. Castle Byers',
            'C. Dustins Hideaway',
            ],
        },
            ];

    //RESET FUNCTION
let reset = () => {
    count = 30;
    $('.timerDiv').html(`<span>Timer: ${count} Seconds</span>`)
    console.log(count);
    startGame();
}

//TIMER COUNTDOWN FUNCTIONS
let timerCountdown = () => {
    count=count-1;
    if (count <= 0) {
        clearInterval(counter);
        reset();
        wrongAnswers++;
        $('.wrongAnswersDiv').html(`<span>Wrong Answers: ${wrongAnswers}</span>`);        
        if (questionChoices[triviaCurrent]){
            $('.jumbotron').html(questionChoices[triviaCurrent].question);
            let choicesArray = questionChoices[triviaCurrent].choices;
            let buttonArray = [];
            for (let choiceIndex = 0; choiceIndex < choicesArray.length; choiceIndex++){
                let button = $(`<button type="button " class="answerButton btn btn-secondary btn-lg btn-block"></button>`);
                $(button).text(choicesArray[choiceIndex]);
                console.log($(button).val());
                $(button).val(choicesArray[choiceIndex]);
                console.log(choicesArray[choiceIndex]);
                console.log(button);
                $('.jumbotron').append(button);
                triviaCurrent++;
                reset();
            }

  }
};
  //PUSHES THE TIMER TO THE DIV
  $('.timerDiv').html(`<span>Timer: ${count} Seconds</span>`)
}
//FUNCTION THAT HOLD THE GAME
$(document).ready(function() {
    let timer = 30;
    let countdownTime = 0;
    $('.correctAnswersDiv').html(`<span>Correct Answers: ${correctAnswers}</span>`);
    $('.wrongAnswersDiv').html(`<span>Wrong Answers: ${wrongAnswers}</span>`);
    $('.timerDiv').html(`<span>Timer: ${timer} Seconds</span>`);
    startGame();
    
});
//START GAME FUNCTION
let startGame = () => {
    $('.startButton').on('click', function startGame (event) {
        $(this).hide();
    console.log('click');
    var count=30;
    var counter=setInterval(timerCountdown, 1000);
    timerCountdown();
        
    if (questionChoices[triviaCurrent]){
        $('.jumbotron').html(questionChoices[triviaCurrent].question);
        let choicesArray = questionChoices[triviaCurrent].choices;
        let buttonArray = [];
        for (let choiceIndex = 0; choiceIndex < choicesArray.length; choiceIndex++){
            let button = $(`<button type="button " class="answerButton btn btn-secondary btn-lg btn-block"></button>`);
            $(button).text(choicesArray[choiceIndex]);
            console.log($(button).val());
            $(button).val(choicesArray[choiceIndex]);
            console.log(choicesArray[choiceIndex]);
            console.log(button);
            $('.jumbotron').append(button);
            triviaCurrent++;
            reset();
        }
    };
renderQuestions();
    });


}
//RENDER QUESTIONS FUNCTION
let renderQuestions = () => {
    $('.answerButton').on('click', function (event) {
        console.log('answer click');
        let answerChosen = $(this).val();
        console.log(answerChosen);
        if($.inArray(answerChosen, answers) !== -1){
            correctAnswers++;
            $('.correctAnswersDiv').html(`<span>Correct Answers: ${correctAnswers}</span>`);
            console.log("correct answer")
            reset();
        }
        else{
            wrongAnswers++;
            console.log("wrong answer");
            $('.wrongAnswersDiv').html(`<span>Wrong Answers: ${wrongAnswers}</span>`);
            reset();
        }
        $('.jumbotron').empty();
        if (questionChoices[triviaCurrent]){
            $('.jumbotron').html(questionChoices[triviaCurrent].question);
            let choicesArray = questionChoices[triviaCurrent].choices;
            let buttonArray = [];
            for (let choiceIndex = 0; choiceIndex < choicesArray.length; choiceIndex++){
                let button = $(`<button type="button " class="answerButton btn btn-secondary btn-lg btn-block"></button>`);
                $(button).text(choicesArray[choiceIndex]);
                console.log($(button).val());
                $(button).val(choicesArray[choiceIndex]);
                console.log(choicesArray[choiceIndex]);
                console.log(button);
                $('.jumbotron').append(button);
                triviaCurrent++
                
    console.log(questionChoices[triviaCurrent], 'heyy'); 
            }
    renderQuestions();   
    };
});
};