$(document).ready(function() {
    var area =$("#trivia-area");
    var timer;
    var correct = 0; /*correct*/
    var incorrect = 0;

    var game = {
        correct: 0, /*game.correct*/ 
        incorrect: 0,
        counter: 60
    }

    var questions = [{
        
        question: "Who was the 76ers greatest  of all time?",
        choices: ["Allen Iverson", "Julius Erving", "Charles Barkley","Hal Greer"],
        answer: "Hal Greer"
    }, {

    question: "What year was Allen Iverson drafted to the 76ers?",
    choices: ["1996", "2000", "1998", "1994"],
    answer: "1996"
    }, {

    question: "Which of these Players wore number 3?",
    choices: ["Eric snow", "Raja bell", "Allen Iverson", "Andre Iguadala"],
    answer: "Allen Iverson"
    }, {

    question: "Who is the assistant coach who has his number retired for the sixers?",
    choices: ["Mo Cheeks", "Brett Brown", "Aaron Mckie", "Doug Collins"],
    answer: "Mo Cheeks"
    }, {

    question: "Which Sixer made the second All Defensive Team?",
    choices: ["Raja Bell", "Allen Iverson", "Eric Snow", "Aaron Mckie"],
    answer: "Eric Snow"
    }, {

    question: "What was Andre Iguadala's jersey Number?",
    choices: [ "2", "6", "23", "9"],
    answer: "9"
    }],


    $("#start").click(function() {
        Start();
        check();
        result();
    });


    function start() {
        $("#start").remove();

        timer = setInterval(timer, 3000);
        
        $("trivia-area").prepend("<h2>Time: 
        <span id="counter-number">30</span> Seconds</h2>");

        for (var i = 0; i < questions.length; i++) {

            area.prepend("<h2>" + questions [i].question + " </h2>");
        
        for (var s = 0; s < questions[s].choices.length; s++)

             area.append("<input type="radio" name="question-" + i + "value=" + questions[i].choices[j] + ">" + questions[i].choices
        }

    };

    if (timer === 0) {
        check();
        result();
    }
}


function check() {
    var inputs = are.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
        if ($(input[i].val() ===questions[i].correctAnswer) {
            game.correct++;
        } 
        else{
            game.incorrect++;
        }
        }
    }

function result() {
    clearInterval(timer);
    $("#quiz-area").remove();
    $("#quiz-area").html("<h2>Done!</h2>");
    $("#quiz-area".append("<h3>Correct choices:" + incorrect + "</h3>"); 
}
});
