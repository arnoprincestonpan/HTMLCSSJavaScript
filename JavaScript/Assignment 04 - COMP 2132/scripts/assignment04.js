/*
name:  Arno Princeston Pan
id  :  a00823325
class: comp 2132 - js
date:  10/28/2021
ver :  2 (update: 10/31/2021)
*/

/*
grab some HTML elements
*/ 
const output        = document.getElementById("output");

const output2       = document.getElementById("output2");

const output3       = document.getElementById("output3");

/*
PART 1a
DEFINE A Card OBJECT
*/

class Card{
    // create the face, value and suit
    constructor(face, value, suit){
        this.setFace(face);
        this.setValue(value);
        this.setSuit(suit);

    }

    setFace(face){
        if(face != null){
            if(typeof face == 'string' || typeof face == 'number'){
                this.face = face;
            }
            else{
                return(`${face} is not a valid face.`);
            }
        }
    }

    setValue(value){
        if(value != null){
            if(typeof value == 'number'){
                this.value = value;
            }
            else{
                return(`${value} must be a valid value.`);
            }
        }
    }

    setSuit(suit){
        if(suit != null){
            if(typeof suit == `string`){
                this.suit = suit;
            }
            else{
                return(`${suit} must be a String.`);
            }
        }
    }

    describeSelf(){
        let returnString    = ``;
        returnString        = ` ${this.face} of ${this.suit}. Value: ${this.value}. `;
        return(returnString);
    }
}


/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/

const someCard = new Card("King", 10, "Hearts"); // instructions says to initialize King of Hearts

output.innerHTML += `${someCard.describeSelf()}`;


/*
PART 2a
DEFINE A Deck OBJECT
*/

class Deck{
    constructor(){
        
        //build a deck of Card objects
        //prepare arrays for all the aspects of a Card
        this.faces   = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];    // y 13 elements, index 0 to 12      
        this.values  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];                     // y Same as Above
        this.suits   = ["Spade","Club","Heart","Diamond"];                              // z 4 elements, index 0 to 3
        
        //prepare an array to store the Cards in
        this.cards = [];

        //use nested 'for' loops
        //build the Deck of Cards
        //one iteration for each suit
        //one iteration for each face/value pair
        //each time, instantiate a new Card
        //add new cards to the using Array.push()
        //eg:    this.cards.push( newCardObject );

        // reminder: you need Card(face, value, suit);

        for(let z = 0; z < this.suits.length; z++){
        
            for(let y = 0; y < this.values.length; y++){
                this.cards.push(new Card(this.faces[y], this.values[y], this.suits[z]));
            }
        }

        // some other way

        
    }
}

/*
DEFINE Deck OBJECT FUNCTIONS
no changes need to be made here
*/
Deck.prototype.dealCard = function(){
 
    //remove and return the first item in array
    //and shift the index of remaining items 
    const card = this.cards.shift();
    //if we have run out of cards...
    if(card === undefined){
        return 'No more cards';
    }else{
        //return the next card in the array
        return card;
    }         
}
Deck.prototype.shuffle = function(){
 
    let j, x, i;
    //loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        //randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        //resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    //return the randomly sorted array
    return this.cards;       
}
Deck.prototype.describeSelf = function(){
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it.`;
    //return the above statement 'description'
    return description;
}


/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/

//invoke and display the Deck function describeSelf() here...

const someDeck = new Deck();

// output2.innerHTML += someDeck.describeSelf(); // describes the whole deck

output2.innerHTML += `<p>${someDeck.describeSelf()}</p>`;

//randomize the cards in the deck using shuffle()

someDeck.shuffle();

//take the next card from the deck using dealCard()

var dealedCard = someDeck.dealCard();

const delt = `You have been delt...`;

output2.innerHTML += `<p>${delt}</p>`;

output2.innerHTML += `<p>${dealedCard.describeSelf()}</p>`; // describes the card

//invoke and display the Deck function describeSelf() AGAIN here...

output2.innerHTML += `<p>${someDeck.describeSelf()}</p>`;

//take the next card from the deck using dealCard()

dealedCard = someDeck.dealCard();

output2.innerHTML += `<p>${delt}</p>`;

output2.innerHTML += `<p>${dealedCard.describeSelf()}</p>`; // describes the card

//invoke and display the Deck function describeSelf() AGAIN here...

output2.innerHTML += `<p>${someDeck.describeSelf()}</p>`;


/*
PART 3a
DEFINE A Player OBJECT
*/

class Player
{
    constructor(playerName)
    {
        this.hand = [];
        this.setName(playerName);
    }

    setName(playerName)
    {
        if(typeof playerName == 'string')
        {
            this.playerName = playerName;
        }
        else
        {
            this.playerName = `No Name`;
        }
    }

    addCardToHand(deltCard)
    {
        if(typeof deltCard == 'object')
        {
            this.hand.push(deltCard);
        }
        else
        {
            this.hand.push("Jack", 10, "Spade");
        }
    }
    
    addMultipleCardsToHand(handLimit, deck)
    {
        for(let i = 0; i < handLimit; i++)
        {
            this.addCardToHand(deck.dealCard());
        }
    }

    describeSelf()
    {
        let returnString = ``;
        returnString += `<p>The player: ${this.playerName} hand has ${this.hand.length} card(s)...</p>`;

        returnString += `<ol>`;

        if(this.hand.length != 0)
        {
            for(let i = 0; i < this.hand.length; i++)
            {
                returnString += `<li>${this.hand[i].describeSelf()}</li>`;
            }
        }
        else
        {
            returnString += `<li>No Cards</li>`;
        }

        returnString += `</ol>`;

        return(returnString);
    }
}



/*
PART 3b
Instantiate Two Player OBJECTs
and deal five cards to each

display to the browser the contents 
of each player's hand
*/

var handLimit = 5;

var player1 = new Player(`Cecilia`);
var player2 = new Player(`Celia`);

player1.addMultipleCardsToHand(handLimit, someDeck); // this deck was started in Part 2
player2.addMultipleCardsToHand(handLimit, someDeck); 

// add 5 cards to hand
//for(let i = 0; i < handLimit; i++)
//{
//    player1.addCardToHand(someDeck.dealCard());
//}

output3.innerHTML += `${player1.describeSelf()}`;
output3.innerHTML += `${player2.describeSelf()}`;