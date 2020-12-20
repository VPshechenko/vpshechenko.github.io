
let Symbol = {player1: 'X', player2: 'O'};
let total = {player1: 1, player2: -1};
let timerId;
let Game = {
	turns: 0,
	player: '',
	nextPlayer: 'player1',
	start: false,
	timer: 100,
	board: [['', '', ''], ['', '', ''], ['', '', '']],
	lines: {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0},
	lineXY: {
		1: ['c00', 'c10', 'c20'],
		2: ['c01', 'c11', 'c21'],
		3: ['c02', 'c12', 'c22'],
		4: ['c00', 'c01', 'c02'],
		5: ['c10', 'c11', 'c12'],
		6: ['c20', 'c21', 'c22'],
		7: ['c00', 'c11', 'c22'],
		8: ['c20', 'c11', 'c02'],
	}
	
}


function startGame() {
	Game.start = true;
	Game.timer = 100;
	Game.turns = 0;
	timerId = setInterval(() => showTimer(), 10);
	startBoard();
	nextPlayer();
	showTurns(0);
	document.getElementById('global-message').className = 'global-message hidden';
}

function stopGame(message = '', type = '') {
	Game.start = false;
	clearInterval(timerId);
	Game.nextPlayer = 'player1';
	stopBoard();
	if(message) {
		setTimeout(() => {showGlobalMessage(message, type)}, 1000);
	}

}

document.getElementById('c00').onclick = function() {clickCell(this.id)};
document.getElementById('c10').onclick = function() {clickCell(this.id)};
document.getElementById('c20').onclick = function() {clickCell(this.id)};
document.getElementById('c01').onclick = function() {clickCell(this.id)};
document.getElementById('c11').onclick = function() {clickCell(this.id)};
document.getElementById('c21').onclick = function() {clickCell(this.id)};
document.getElementById('c02').onclick = function() {clickCell(this.id)};
document.getElementById('c12').onclick = function() {clickCell(this.id)};
document.getElementById('c22').onclick = function() {clickCell(this.id)};

function clickCell(id) {
	if(Game.start) {
		if(document.getElementById(id).classList.contains('empty')) {
			nextTurn(id);
		}
	}
	
	
}

function nextTurn(id) {
	Game.turns++;
	showTurns(Game.turns);
	document.getElementById(id).innerHTML = Symbol[Game.player];
	document.getElementById(id).className = 'cell';
	changeLines(id);
	
	nextPlayer();
	let result = gameOver();
	if(result) {
		stopGame(result[0], result[1]);
		//continue;
	}
}

function startBoard() {
	let board = document.getElementById('board');
	board.className = 'board board__able';
	let cells = document.getElementById('board').getElementsByClassName('cell');
	for (let cell of cells) {
		cell.className = 'cell empty';
		cell.innerHTML = '';
	}
	document.getElementById('stop-game').className = 'button button__warning';
	document.getElementById('start-game').className = 'button button__warning start-game hidden';
	for(let i = 1; i < 9; i++) {
		Game.lines[i] = 0;
	}

}

function stopBoard() {
	let board = document.getElementById('board');
	board.className = 'board';
	document.getElementById('player1').className = 'player';
	document.getElementById('player2').className = 'player player_right';
	document.getElementById('stop-game').className = 'button button__warning hidden';
	document.getElementById('start-game').className = 'button button__warning start-game';
}
 
function nextPlayer() {
	if(Game.nextPlayer === 'player1') {
		Game.player = 'player1';
		document.getElementById('player1').className = 'player active';
		document.getElementById('player2').className = 'player player_right';
		Game.nextPlayer = 'player2';
	} else {
		Game.player = 'player2';
		document.getElementById('player1').className = 'player';
		document.getElementById('player2').className = 'player active player_right';
		Game.nextPlayer = 'player1';
	}

}

function showTurns(count) {
	document.getElementById('turns').innerHTML = count;
}

function showTimer() {
	Game.timer -= 0.01;
	document.getElementById('timer').innerHTML =  new Intl.NumberFormat('en-IN', {minimumIntegerDigits: 2}).format(Game.timer);
	if(Game.timer < 0.00) {
		stopGame('Game over! TimeOut!', 'timeout');
	}
}

function changeLines(id) {
	for(let i = 1; i < 9; i++) {
		if(Game.lineXY[i].includes(id)) {
			//alert(id);
			Game.lines[i] += total[Game.player];
		}
	}
}

function gameOver() {
	for(let i = 1; i < 9; i++){
		if(Game.lines[i] === 3) {
			document.getElementById(Game.lineXY[i][0]).className = 'cell win';
			document.getElementById(Game.lineXY[i][1]).className = 'cell win';
			document.getElementById(Game.lineXY[i][2]).className = 'cell win';
			return ['Won Player1', 'win'];
		}
		if(Game.lines[i] === -3) {
			document.getElementById(Game.lineXY[i][0]).className = 'cell win';
			document.getElementById(Game.lineXY[i][1]).className = 'cell win';
			document.getElementById(Game.lineXY[i][2]).className = 'cell win';
			return ['Won Player2', 'win'];
		}
		
	}
	if(Game.turns === 9) {
		return ["It's a Draw!", "draw"];
	}
	return false;
}

function closeMessage() {
	document.getElementById('global-message').className = 'global-message scaled';
}

function showGlobalMessage(message, type) {
	document.getElementById('global-message-title').innerHTML = message;
	document.getElementById('global-message').className = 'global-message ' + type;
}