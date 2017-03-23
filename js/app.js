
var turn = 0;
var tic = 'O';
var player = 'Player 1';


$('.box').click(function() {
	
	if($(this).html()==="") {
		if (turn%2 !== 0) {
			tic = "X";
			player = 'Player 2';
		} else {
			tic = "O";
			player = 'Player 1';
		}
		$(this).html(tic);
		checkWin();
		turn++;
	}

});

function checkWin() {
	if ($('#b1').html()===tic && $('#b2').html()===tic && $('#b3').html()===tic) {
		$('#b1','#b2','#b3').addClass("won");
		console.log(player + " won!");

	} else {
		console.log("poop");
	}
}