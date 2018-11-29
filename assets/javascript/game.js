$(document).ready(function () {

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
    var valueHistory = [];

    // FUNCTIONS
    function randomNumber(min, max) {

        var unique = false;
        while (!unique) {
            let num = Math.floor(Math.random() * (max - min) + min);
            if (!valueHistory.includes(num)) {
                valueHistory.push(num);
                unique = true;
                return num;
            }
        }

        // return Math.floor(Math.random() * (max - min) + min);
    }

    function startGame() {

        //currentScore = 0;

        currentScore = 0;

        //Javascript example below
        // document.getElementById("current-score").innerHTML = currentScore;

        //JQuery version
        $("#current-score").html(currentScore);

        targetScore = randomNumber(19, 120);
        // Grab the value of var targetScore and place it in the id of "target-score"
        $("#target-score").html(targetScore);

        crystalOneValue = randomNumber(1, 12);
        crystalTwoValue = randomNumber(1, 12);
        crystalThreeValue = randomNumber(1, 12);
        crystalFourValue = randomNumber(1, 12);


        //$("crystalOneValue").html(currentScore);
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

    document.addEventListener('click', function (event) {
        console.log('click');
    })
    $("#crystalOne").click(function (e) {
        currentScore += crystalOneValue;
        $("#current-score").html(currentScore);
        checkWin();
        console.log(`You clicked the Diamond!`);

    });
    $("#crystalTwo").on("click", function (e) {
        currentScore += crystalTwoValue;
        $("#current-score").html(currentScore);
        checkWin();
        console.log(`You clicked the Ruby!`);
    })
    $("#crystalThree").on(`click`, function (e) {
        currentScore += crystalThreeValue;
        $("#current-score").html(currentScore);
        checkWin();
        console.log(`You clicked the Saphire!`);
    })
    $("#crystalFour").on(`click`, function (e) {
        currentScore += crystalFourValue;
        $("#current-score").html(currentScore);
        checkWin();
        console.log(`You clicked the Emerald!`);
    })

    //$("#crystalOneValue").html(currentScore);
    // current score and add crystalOneValue to it

    //if (currentScore > targetScore) {
    //alert("Bummer! You lost");
    //losses++;
    //$("#losses").html(losses);
    //  startGame();
    //} 
    //else if (currentScore === targetScore) {
    //alert("Good job!  You matched the number");
    //wins++;
    //$("#wins").html(wins);
    //  startGame();
    //}

    // update HTML of current score
    //var crystalValue = ($(this).attr("data-crystalvalue"));
    // crystalValue = parseInt(crystalValue);

    //  currentScore += crystalValue;

    // checkWin();

});