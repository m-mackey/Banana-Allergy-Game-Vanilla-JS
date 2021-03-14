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
        table.append(card);

        const cardImg = document.createElement('img');
        cardImg.setAttribute('src', 'images/card.svg');
        cardImg.setAttribute('class', 'card-top-img');
        card.append(cardImg);
    }
}

function onCardSelect() {
    let cardId = this.getAttribute('data-id');
    this.setAttribute('tabindex', -1);
    this.removeEventListener('click', onCardSelect);
    let selectCardImg = this.firstChild;
    selectCardImg.setAttribute('src', cards[cardId].img);

    scoring(selectCardImg);
}

let totalScore = 0;
//displays score
document.getElementById('total').innerHTML = 'Score: ' + totalScore;

let lives = 3;
document.getElementById('lives').innerHTML = 'Lives: ' + lives;

function scoring(cardValue) {
    console.log(cardValue.getAttribute('src'));
    switch (cardValue.getAttribute('src')) {
        case 'images/safe.svg':
        	totalScore = Number(totalScore) + 100;
        	document.getElementById('total').innerHTML = 'Score: ' + totalScore;
        	break;
        case 'images/banana.svg':
        	totalScore = Number(totalScore) - 200;
        	document.getElementById('total').innerHTML = 'Score: ' + totalScore;
        	lives = Number(lives) - 1;
        	document.getElementById('lives').innerHTML = 'Lives: ' + lives;
        	break;
        case 'images/milk.svg':
        	totalScore = Number(totalScore) + 300;
        	document.getElementById('total').innerHTML = 'Score: ' + totalScore;
        	break;
    }
}



placeCards();

});




// 	// 	}

// 	// 	livesCheck();
// 	// });
// 	//

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
	
// 	document.getElementById('total').innerHTML = 'Score: ' + totalScore;

// });

