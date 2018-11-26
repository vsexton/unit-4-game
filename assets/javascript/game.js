// VARIABLES
var targetScore = 0; // Maximum 120, minimum 19
var currentScore = 0;
var wins = 0;
var losses = 0;

// Maximum number 12, minimum 1
var crystalOneValue;
var crystalTwoValue;
var crystalThreeValue;
var crystalFourValue;

// FUNCTIONS
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function startGame() {
    //Javascript example below
    //document.getElementById("current-score").innerHTML = currentScore;

    //JQuery version
    $("#current-score").html(currentScore);
    
    targetScore = randomNumber(19, 120);
    // Grab the value of var targetScore and place it in the id of "target-score"
    $("#target-score").html(targetScore);

    crystalOneValue = randomNumber(1, 12);
    crystalTwoValue = randomNumber(1, 12);
    crystalThreeValue = randomNumber(1, 12);
    crystalFourValue = randomNumber(1, 12);

    console.log("Target Score: " + targetScore);
    console.log("Crystal One: " + crystalOneValue);
    console.log("Crystal Two: " + crystalTwoValue);
    console.log("Crystal Three: " + crystalThreeValue);
    console.log("Crystal Four: " + crystalFourValue);
};

startGame();

function checkWin() {
    if (currentScore > targetScore) {
        alert("Bummer! You lost");
        losses++;
        $("#losses").html(losses);
        startGame();
    } else if (currentScore === targetScore) {
        alert("Good job!  You matched the number");
        wins++;
        $("#wins").html(wins);
        startGame();
    }
};


// CLICK EVENTS
//click on crystal one
$("#crystalValue").append(crystalOneValue);


$(`#crystalOne-click`).on(`click`, function() {
    console.log(`You clicked the Diamond!`);
})
$(`#crystalTwo-click`).on(`click`, function() {
    console.log(`You clicked the Ruby!`);
})
$(`#crystalThree-click`).on(`click`, function() {
    console.log(`You clicked the Saphire!`);
})
  
$(`#crystalFour-click`).on(`click`, function() {
    console.log(`You clicked the Emerald!`);
})
  


// current score and add crystalOneValue to it

if (currentScore > targetScore) {
    alert("Bummer! You lost");
    losses++;
    $("#losses").html(losses);
    startGame();
} 
else if (currentScore === targetScore) {
    alert("Good job!  You matched the number");
    wins++;
    $("#wins").html(wins);
    startGame();
}

// update HTML of current score

// checkWin();