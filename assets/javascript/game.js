window.onload = function() {
	// click start button to start game
    $("#startButton").on("click", game.start);
    // hide reset button until game is finished
    $("#resetButton").hide();
};

// variables ============================================================================
var questions = [

{question:"How many squares are in normal Monopoly board?",
answers: [" 20 ", " 40 ", " 60 ", " 80 "],
correctAnswer: " 40 "
},
{question: "What is the largest planet of our Solar System called?",
answers: [" Earth ", " Jupiter ", " Uranus ", " Saturn "],
correctAnswer: " Jupiter "
},
{question: "What is the fourth novel of George R.R. Martin's A Song of Ice and Fire book series?",
answers: [" A Storm of Swords ", " A Clash of Kings ", " A Feast for Crows ", " A Dance with Dragons "],
correctAnswer: " A Feast for Crows "
},
{question:"What percent of people live North of the equator?",
answers: [" 60% ", " 70% ", " 80% ", " 90% "],
correctAnswer: " 90% "
},
{question:"How many times does a heart beats in a day?",
answers: [" 1,000 ", " 10,000 ", " 100,000 ", " 1,000,000 "],
correctAnswer: " 100,000 "
}];

var intervalId;
var clockRunning = false;

// object =============================================================================
var game = {

	correct: 0,
	incorrect: 0,
	timer: 30,

	start: function() {
		// hides start button after game starts
		$("#startButton").hide();

    	// if clock is not running
	    if (!clockRunning) {
	    	// set counter interval to 1 second
	        intervalId = setInterval(game.count, 1000);
	        // set clocl to running
	        clockRunning = true;
	        // run loop through all questions
	        for (var i = 0; i < questions.length; i++) {
	        	// display questions in html	
	        	$(".questions").append("<h3> " + questions[i].question + " </h3>");
	        	// run loop though all possible answers
	        	for (var j = 0; j < questions[i].answers.length; j++) {
	        		// display answers in html as radio buttons
		        	$(".questions").append("<input type= 'radio' name = 'question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
		        }
	    	}
	    }
    },

    count: function() {

	    // decrement counter by 1
	    game.timer--;

	    // display timer in html
	    $(".timer").html("<h2>Time Remaining: " + game.timer + " seconds<h2>");
	    // when timer reaches 0, finish game
	    if (game.timer <= 0) {
	    	console.log("game finished");
	    	game.finish();
	    } 
	},

	finish: function() {
		// determine which radio button is checked
		$.each($('input[name="question-0"]:checked'), function() {
			// if correct answer, increment correct variable
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			// if incorrect answer, increment incorrect variable
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-1"]:checked'), function() {

			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-2"]:checked'), function() {

			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-3"]:checked'), function() {

			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name="question-4"]:checked'), function() {

			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		// jump to results after score is calculated
		game.results();
	},

	results: function() {
		// stop timer
		clearInterval(intervalId);
		// determine unanswered questions
		var unanswered = questions.length - game.correct - game.incorrect
		// hide timer and quesitons in html
		$(".timer").hide();
		$(".questions").hide();

		// display results in html
		$(".results").html("<h3>Correct: " + game.correct + "</h3>");
		$(".results").append("<h3>Incorrect: " + game.incorrect + "</h3>");
		$(".results").append("<h3>Unanswered: " + unanswered + "</h3>");
		// show reset button
		$("#resetButton").show();

		game.reset();
	},

	// reset function
	reset: function () {
		// resetting variables
		game.correct = 0;
		game.incorrect = 0;
		timer = 3;
		clockRunning = false;

		console.log("got to reset before press");

		$("#resetButton").on("click", function() {

			if (clockRunning == false) {
				// removes the results from previous game
				$(".results h3").remove();
				// hides reset button after its clicked
				$("#resetButton").hide();
				// shows timer and question divs
				$(".timer").show();
				$(".questions").show();
				// removes radio button selections
				$('input[name="question-0"]').prop('checked', false);
				$('input[name="question-1"]').prop('checked', false);
				$('input[name="question-2"]').prop('checked', false);
				$('input[name="question-3"]').prop('checked', false);
				$('input[name="question-4"]').prop('checked', false);
			}
		});
	},
};