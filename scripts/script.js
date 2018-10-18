
let totalScore = 0;

// Reveal follow-up questions based on your event type choice
$('#event_type').change(function(followup_questions){
	let	searchQuestions = this.value + '_questions'
	$('.active').removeClass('active');
	$('#' + searchQuestions).addClass('active');
	totalScore = 0
});

// Add points to a total score

//need to reevaluate sum functions - currently adding and not adjusting

let displayTotal = function(){
	console.log(totalScore)
}
$('#user_information input').change(function(){
	totalScore = 0;
	 $('.active input:checked').each(function() {
	 		//console.log('totalScore WAS', totalScore)
	        totalScore += Number($(this).val());
	       // console.log('totalScore IS', totalScore)
	    });
	 displayTotal();
})

//If yes/no, than questions
// $('[name="party1"]').change(function(){
// let answer = $('[name="party1"]:checked').val();
// 	$('.party1Subquestions').removeClass('active');
// 	$('.party1Subquestions[value="' + answer + '"]').addClass("active");
// })

$('.branch [name="branch1"]').change(function(){
let answer = $('[name="branch1"]:checked').val();
	$('.branchpart').removeClass('active');
	$('.branchpart[value="' + answer + '"]').addClass("active");
})

//reveal results
$('#reset').click(function(severity){
	totalScore = 0;
	$('.active').removeClass('active');
	$('input:checked').prop('checked', false);
	$('#event_type').val('select');
});

$('#submit').click(function(severity){
	//let	severityLevel = this.value + '_advice';
	let levels = ['low', 'moderate', 'severe'];
	$('#submitted').addClass('active');
		if (totalScore <= 3) {
			severityLevel = 'low';
		} else if (totalScore >= 8) {
			severityLevel = 'severe';
		} else {
			severityLevel = 'moderate';
		}
	$('.severity-level').text(severityLevel);
	$('#submitted p').removeClass('active');
	$('.' + severityLevel).addClass('active');

});
