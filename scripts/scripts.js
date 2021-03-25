document.addEventListener('DOMContentLoaded', () => {

    const cards = [{
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
    
    // function shuffle(array) {
    //     let currentIndex = array.length,
    //         temporaryValue, randomIndex;

    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {

    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex -= 1;

    //         // And swap it with the current element.
    //         temporaryValue = array[currentIndex];
    //         array[currentIndex] = array[randomIndex];
    //         array[randomIndex] = temporaryValue;
    //     }

    //     return array;
    // }

    function shuffle(array) {
        let m = array.length;
        let t;
        let i;
        
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    shuffle(cards);

    const table = document.getElementById('table');

    //creation of card placement
    function placeCards() {
        for (let i = 0; i < cards.length; i++) {
            //creates button that will be container for front and back of card imgs
            //also appends as child of table
            const card = document.createElement('button');
            card.setAttribute('class', 'card');
            card.setAttribute('tabindex', 0);
            card.setAttribute('data-id', i);
            card.addEventListener('click', onCardSelect);
            table.append(card);

            //creates top of card with image and sets classes
            const cardImg = document.createElement('img');
            cardImg.setAttribute('src', 'images/card.svg');
            cardImg.setAttribute('class', 'card-top');
            cardImg.setAttribute('alt', 'playing card top');

            //creates back of card and sets it's class
            const cardBack = document.createElement('img');
            cardBack.setAttribute('class', 'card-back');

            //appends card front and back as children of button
            card.append(cardImg, cardBack);


        }
    }

    // adds img src to card back, adds classes to animate fades
    function onCardSelect() {
        let cardId = this.getAttribute('data-id');
        this.setAttribute('tabindex', -1);
        this.removeEventListener('click', onCardSelect);
        this.children[0].classList.add('ani');

        //sets image for the back of the card
        const selectCardImg = this.children[1];
        selectCardImg.setAttribute('src', cards[cardId].img);
        selectCardImg.setAttribute('alt', cards[cardId].name);
        selectCardImg.classList.add('ani2');

        scoring(selectCardImg);
    }

    // displays score and lives and sets initial totals
    let totalScore = 0;
    document.getElementById('total').innerHTML = 'Score: ' + totalScore;

    let lives = 3;
    document.getElementById('lives').innerHTML = 'Lives: ' + lives;


    //takes card chosen in onCardSelect function and adjusts score/lives
    function scoring(cardValue) {

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

        livesCheck();
    }

    //check to see if lives remaining are 0 and if to end and restart game
    function livesCheck() {

        if (lives <= 0) {
            //remove click event from cards
            let remainingCards = document.getElementsByClassName('card');
            for (let i = 0; i < remainingCards.length; i++) {
                remainingCards[i].removeEventListener('click', onCardSelect);
            }

            // fade out/remove card table
            table.classList.add('hide-table');
            table.classList.remove('show-table');
            setTimeout(() => table.style.display = 'none', 2000);


            //adds game over screen and restart
            const gameOver = document.getElementById('game-over');
            gameOver.classList.add('show-game-over');
            setTimeout(() => gameOver.hidden = false, 2000);
            gameOver.innerHTML = '<p class="game-over-text">Game Over</p>';
            gameOver.insertAdjacentHTML('beforeend', '<button id="restart">New Game</button>');

            //restart
            document.getElementById('restart').addEventListener('click', () => {
                window.location.reload();
            });
        };
    };

    placeCards();

});