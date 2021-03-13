document.addEventListener('DOMContentLoaded', () => {

const cards = [
    {
        name: 'banana',
        img: 'images/banana.svg',
    },
    {
        name: 'banana',
        img: 'images/banana.svg',
    },
    {
        name: 'banana',
        img: 'images/banana.svg',
    },
    {
        name: 'banana',
        img: 'images/banana.svg',
    },
    {
        name: 'safe',
        img: 'images/safe.svg',
    },
    {
        name: 'safe',
        img: 'images/safe.svg',
    },
    {
        name: 'safe',
        img: 'images/safe.svg',
    },
    {
        name: 'safe',
        img: 'images/safe.svg',
    },
    {
        name: 'milk',
        img: 'images/milk.svg',
    },
    {
        name: 'milk',
        img: 'images/milk.svg',
    },
    {
        name: 'milk',
        img: 'images/milk.svg',
    },
    {
        name: 'milk',
        img: 'images/milk.svg',
    },
    {
        name: 'safe',
        img: 'images/safe.svg',
    },
    {
        name: 'safe',
        img: 'images/safe.svg',
    },
    {
        name: 'milk',
        img: 'images/milk.svg',
    },
    {
        name: 'milk',
        img: 'images/milk.svg',
    },
];

cards.sort(() => 0.5 - Math.random());

const table = document.getElementById('table');

//creation of card placement
function placeCards() {
    for (let i = 0; i < cards.length; i++){
        const card = document.createElement('button');
        card.setAttribute('class', 'card-top');
        card.setAttribute('tabindex', 0); 
        card.setAttribute('data-id', i);
        card.addEventListener('click', onCardSelect);
        table.appendChild(card);
    }
}

function onCardSelect() {
    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].img);
}

placeCards();

});


// $(document).ready(function() {
// 	let cards = [
// 		'banana',
// 		'safe',
// 		'milk',
// 		'banana',
// 		'safe',
// 		'milk',
// 		'banana',
// 		'safe',
// 		'milk',
// 		'banana',
// 		'safe',
// 		'milk',
// 		'safe',
// 		'banana',
// 		'safe',
// 		'safe'
// 	];

// 	function shuffle(arr) {
// 		let buffer = [];
// 		let	start;

// 		for (let i = arr.length; i >= arr.length && i > 0; i--) {
// 			start = Math.floor(Math.random() * arr.length);
// 			buffer.push(arr.splice(start, 1)[0]);
// 		}

// 		let deck = buffer.length;
// 		let text = '<div class="play-area">';

// 		for (let i = 0; i < deck; i++) {
// 			text +=
// 				'<button class="card-top" tabindex="0"><img  class="card-back" src="images/' +
// 				buffer[i] +
// 				'.svg" alt="' + buffer[i] + '"></button>';
// 		}

// 		text += '</div>';
// 		document.getElementById('table').insertAdjacentHTML('beforeend', text);
// 	}

// 	shuffle(cards);

// 	//sets initial score/lives for game start & the scoring function below
// 	let totalScore = 0;
// 	let lives = 3;
// 	// $('#lives').html('Lives: ' + lives);
// 	document.getElementById('lives').innerHTML = 'Lives: ' + lives;

// 	let cardTop = document.getElementsByClassName('card-top');
// 	let cardBack = document.getElementsByClassName('card-back');

// 	for (let i = 0; i < cardTop.length; i++) {
// 		cardTop[i].addEventListener('click', () => {
// 			// this.setAttribute('tabindex', -1);
// 			// cardTop.classList.toggle('hide');
// 		});
// 	}

// 	// for (let i = 0; i < cardBack.length; i++) {
// 	// 	cardTop[i].addEventListener('click', () => {
// 	// 		this.setAttribute('tabindex', -1);
// 	// 		this.classList.add('hide');
// 	// 	});
// 	// }

// 	// $('.card-top').click(function() { //break everything after fn out into its own fn(s), to run on click event
// 	// 	$('.card-top', this).fadeTo(400, 0);
// 	// 	$('.card-back', this).fadeTo(400, 1);
// 	// 	$(this).attr('tabindex', -1); //removes card from tabindex so it's skipped when using keyboard
		
// 	// 	//scoring rules
// 	// 	switch ($('.card-back', this).attr('src')) {
// 	// 	case 'images/safe.svg':
// 	// 		totalScore = Number(totalScore) + 100;
// 	// 		$('#total').html('Score: ' + totalScore);
// 	// 		$(this).off('click');
// 	// 		break;
// 	// 	case 'images/banana.svg':
// 	// 		totalScore = Number(totalScore) - 200;
// 	// 		$('#total').html('Score: ' + totalScore);
// 	// 		lives = Number(lives) - 1;
// 	// 		$('#lives').html('Lives: ' + lives);
// 	// 		$(this).off('click');
// 	// 		break;
// 	// 	case 'images/milk.svg':
// 	// 		totalScore = Number(totalScore) + 300;
// 	// 		$('#total').html('Score: ' + totalScore);
// 	// 		$(this).off('click');
// 	// 		break;
// 	// 	}

// 	// 	livesCheck();
// 	// });
// 	// function onCardClick () {
// 	//   console.log('okay');
// 	//   this.setAttribute('tabindex', -1);
// 	//   this.removeEventListener('click', onCardClick);
// 	// }

// 	function livesCheck (){
// 	//check to see if lives remaining are 0 and if to end and restart game
// 		if (lives <= 0) {
// 			$('.card-top').off('click');
// 			$('#table').fadeOut(1500, function() {
// 				$('#game-over')
// 					.fadeIn(1500)
// 					.html('<p class="game-over-text">Game Over</p>');
// 				document
// 					.getElementById('game-over')
// 					.insertAdjacentHTML(
// 						'beforeend',
// 						'<button id="restart">New Game</button>'
// 					);
// 				$('#restart').click(function() {
// 					window.location.reload();
// 				});
// 			});
// 		};
// 	};
	
// 	// $('#total').html('Score: ' + totalScore);
// 	document.getElementById('total').innerHTML = 'Score: ' + totalScore;

// });

