document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {name: 'cheeseburger', img: 'images/cheeseburger.png'},
        {name: 'cheeseburger', img: 'images/cheeseburger.png'},
        {name: 'fries', img: 'images/fries.png'},
        {name: 'fries', img: 'images/fries.png'},
        {name: 'hotdog', img: 'images/hotdog.png'},
        {name: 'hotdog', img: 'images/hotdog.png'},
        {name: 'ice-cream', img: 'images/ice-cream.png'},
        {name: 'ice-cream', img: 'images/ice-cream.png'},
        {name: 'milkshake', img: 'images/milkshake.png'},
        {name: 'milkshake', img: 'images/milkshake.png'},
        {name: 'pizza', img: 'images/pizza.png'},
        {name: 'pizza', img: 'images/pizza.png'}
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const cardsChosen = [];
    const cardsChosenId = [];
    const cardsWon = [];

    // create board
    function createBoard() {
        for (const i of cardArray) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('id', cardArray.indexOf(i));
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // flip card
    function flipCard() {
        const cardId = this.getAttribute('id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }

    // check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
        }

        cardsChosen.splice(0, cardsChosen.length);
        cardsChosenId.splice(0, cardsChosenId.length);

        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all';
        }
    }

    createBoard();
})