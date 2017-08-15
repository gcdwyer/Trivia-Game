window.onload = function() {

    $("#startButton").on("click", game.start);

};


// variables //
var questions = [

{question:"How many miles is the sun from the Earth?",
answers: [" 93 Billion "," 93 Million "," Neither "],
correctAnswer: "93 Million"
},

{question: "How long has Jupiter's Red Spot been known to exist?",
answers: ["300 years", "50 years", "500 years"],
correctAnswer: "300 years"
},

{question: "Which planet is earth's closest twin in the Solar System?",
answers: ["Venus", "Mars", "Mercury"],
correctAnswer: "Venus"
},

{question:"Which planet is the Sun's closets twin in our Solar System?",
answers: ["Neptune", "Jupiter", "Venus"],
correctAnswer: "Jupiter"
},

{question:"What protects us from the Sun's charged particles?",
answers: ["The moon", "Magnetic field", "Superman"],
correctAnswer: "Magnetic field"

}];



var intervalId;

var clockRunning = false;

// game object ============================================================
var game = {

	correct: 0,
	incorrect: 0,
	timer: 8,

	start: function() {

		console.log("function start");

    	// DONE: Use setInterval to start the count here and set the clock to running.
	    if (!clockRunning) {

	        intervalId = setInterval(game.count, 1000);

	        clockRunning = true;

	        for (var i = 0; i < questions.length; i++) {
	        	
	        	$(".questions").append("<h2> " + questions[i].question + " </h2>");

	        	for (var j = 0; j < questions[i].answers.length; j++) {

		        	$(".questions").append("<input type = 'radio' name = 'question'" + i + " value=" + questions[i].answers[j] + "'>" + questions[i].answers[j])
		        }
	    	}
	    }
    },

    count: function() {

    	console.log("function count");

	    // DONE: increment time by 1, remember we cant use "this" here.
	    game.timer--;

	    // DONE: Use the variable we just created to show the converted time in the "display" div.
	    $(".timer").html("<h2>Time Remaining: " + game.timer + " seconds<h2>");

	    if (game.timer <= 0) {

	    	console.log("game finish4ed");

	    	game.finish();

	    }
	},



	finish: function() {

		// // 	if ($("#radio3").is(":checked")) {

		console.log("finish function");

		$.each($('input[name="question0"]:checked'), function() {

			if($(this).val()==questions[0].correctAnswer) {

				game.correct++;

			} else {

				game.incorrect++;
			}

		});

		game.results();

	},


	results: function() {

		clearInterval(intervalId);

		$(".timer").remove();
		$(".questions").remove();

		$(".results").append("<h2>Correct: " + game.correct + "</h2>");
		$(".results").append("<h2>Incorrect: " + game.incorrect + "</h2>");





	},


};


	





// Start timer to count down to 0 when start button is pressed

// Ask question

// Radio butotn with 4 possible answers

// Done button

// Count correct answers

// Count incorrect answers

// count unanswered questions