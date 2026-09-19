const cardArray = [
    {
        name: "wand",
        img: "images/wand.png",
    },
    {
        name: "deathly hallows",
        img: "images/deathly-hallows.png",
    },
    {
        name: "shield", 
        img: "images/shield.png",
    },
    {
        name: "books",
        img: "images/books.png",
    },
    {
        name: "snitch",
        img: "images/snitch.png",
    },
    {
        name: "wand two",
        img: "images/wand2.png",
    },
    {
        name: "hat",
        img: "images/hat.png",
    },
    {
        name: "hagrid",
        img: "images/hagrid.png",
    },
    {
        name: "wand",
        img: "images/wand.png",
    },
    {
        name: "deathly hallows",
        img: "images/deathly-hallows.png",
    },
    {
        name: "shield", 
        img: "images/shield.png",
    },
    {
        name: "books",
        img: "images/books.png",
    },
    {
        name: "snitch",
        img: "images/snitch.png",
    },
    {
        name: "wand two",
        img: "images/wand2.png",
    },
    {
        name: "hat",
        img: "images/hat.png",
    },
    {
        name: "hagrid",
        img: "images/hagrid.png",
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.getElementById("grid")
const no = document.getElementById("result")


let cardsChosen = []

let cardsChosenIds = []

const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/back2.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img")

    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {

    }


    if (cardsChosen[0] === cardsChosen[1]) {
        
        cards[optionOneId].setAttribute("src", "images/white.png")
        
        cards[optionTwoId].setAttribute("src", "images/white.png")
        
        cards[optionOneId].removeEventListener("click", flipCard)
        
        cards[optionTwoId].removeEventListener("click", flipCard)

        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "images/back2.png")
        cards[optionTwoId].setAttribute("src", "images/back2.png")
    }

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        
    }
}


function flipCard() {
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 2000) 
    }
}

















