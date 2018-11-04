
$(document).ready(function () {
    var crystals = new Array(4);
    var losses = "";
    var wins = "";
    var totalScore = 0;
    var crystal = 0;
    let value = 0;
    let randomNumber = 0;

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function reset() {
        
        totalScore = 0;

        randomNumber = getRandomArbitrary(19, 120);

        for (let i = 0; i < crystals.length; i++) {
            crystals[i] = getRandomArbitrary(1, 12);
        }

        /* crystals[0] = getRandomArbitrary(1, 12);
        crystals[1] = getRandomArbitrary(1, 12);
        crystals[2] = getRandomArbitrary(1, 12);
        crystals[3] = getRandomArbitrary(1, 12);
    
        crystals = [ getRandomArbitrary(1, 12),  getRandomArbitrary(1, 12),  getRandomArbitrary(1, 12),  getRandomArbitrary(1, 12)]; */

        console.log(crystals);
        $("#totalScore").text(totalScore);
        $("#randomNumber").text(randomNumber);
    }
    
    reset();

    $("div.buttons").children().on("click", function () {
        //crystal = $(this).attr('id');
        crystal = this.id;
        value = crystals[crystal];
        totalScore += value;
        $("#totalScore").text(totalScore);

        if (totalScore == randomNumber) {
            wins++;
            reset();
            $("#wins").text(wins);
        }
        else if (totalScore > randomNumber) {
            losses++;
            $("#losses").text(losses);
            reset();
        }

    });

});