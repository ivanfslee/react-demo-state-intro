import React from 'react';
import Card from './Card';

class CardSet extends React.Component {
    constructor() {
        super();
        this.state = {
            chosenCards: []
        }
        
    }

    saveCourse = (index) => {
        console.log(index);
        const copyOfCards = [...this.state.chosenCards]; //alternative using slice - this.state.chosenCards.slice();
        copyOfCards.push(this.props.cards[index]);

        this.setState({
            chosenCards: copyOfCards
        });
    }

    render() {
        console.log(this.state.chosenCards);

        const savedCards = this.state.chosenCards.map((card, i) => {
            return <Card key={i} card={card} />
        })

        const cardList = this.props.cards.map((card, i) => {
            return (
                <div key={i} className="col s2">
                    <Card card={card} />
                    <button onClick={() => this.saveCourse(i)} className="btn waves-light waves-effect">Save</button>
                </div>	
            );
        })


        return (
            <div>
                {cardList}
                <p>Saved Cards</p>
                {savedCards}
            </div>
        );
    }
}

export default CardSet;