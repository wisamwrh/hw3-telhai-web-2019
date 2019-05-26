
		var currentQuestion;
        var num_Of_Questions=0;
        var questions;
        /*back function*/
        function BackToHome()
        {
            localStorage.setItem("ChangeUserName",true);
            window.location.href = "HomePage.html";
        }
        /*Get the questions from the api , and creating the quiz*/
		$(document).ready(function(){
			$.ajax({
				url: "https://opentdb.com/api.php?amount=3&type=multiple",
				type: "get",
				success: function(data){
					questions = data.results;
                    if(data.results.length === 0){
						$("#question").text("no questions!!");
					} else{
						currentQuestion = data.results[0];
						console.log(currentQuestion);
						$("#question").append("<h1 id='curr'>" + 
							currentQuestion.question + 
							"</h1>");
						$("#question").append("<div id='correct' class='answer correct'>" + 
							currentQuestion.correct_answer + 
							"</div>");
						$.each(currentQuestion.incorrect_answers,
						function(index, value){
							$("#question").append("<div class='answer' id='answer"+index+"'>" + 
							value + 
							"</div>");
						});
					}
				},
				error:function(err){
					console.log(err);
				}
			});
			/*Dealing with the correct and the incorrect answers */
			$(document).on('click', '.answer', function(){
				if($(this).hasClass('correct'))
                {
                    if(num_Of_Questions < 2)
                    {
                        num_Of_Questions++;
                        NextQuestion(num_Of_Questions);
                    }
                    else{
                        window.location.href = "Jokes.hml";
                    }
				}
                else{
                    alert('incorrect answer');
                }
			});
            /*Loading the next questions and the answers */
			function NextQuestion(index)
            {
                $("#curr").html(questions[index].question);
                $("#correct").html(questions[index].correct_answer);
                $("#answer0").html(questions[index].incorrect_answers[0]);
                $("#answer1").html(questions[index].incorrect_answers[1]);
                $("#answer2").html(questions[index].incorrect_answers[2]);

            }
		});