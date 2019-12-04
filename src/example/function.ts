function sum(v1: number, v2: number): number {
    return v1 + v2;
}

//有点像C++，先声明后定义
let add: (v1: number, v2: number) => number;
add = (value1: number, value2: number) => value1 + value2;
console.log(add(1, 2));

//类型别名
type Add = (v1: number, v2: number) => number;
let addFunc: Add;
addFunc = (value1: number, value2: number) => value1 + value2;

type AddFunction = (v1: number, v2: number, v3?: number) => number;
let addFunction: AddFunction;
addFunction = (v1: number, v2: number) => v1 + v2;

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];

    /*
    *this是个假参数，出现在参数列表的最前边
    **/
    createCardPicker(this: Deck): () => {
        suit: any;
        card: any;
    }
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(`card ${pickedCard.card} of ${pickedCard.suit}`)