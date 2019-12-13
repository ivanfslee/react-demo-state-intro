import React from 'react';

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
            return <h3 key={i}>{card.course}</h3>
        })

        const cardList = this.props.cards.map((card, i) => {
            return (
                <div key={i} className="col s2">
                    <div className="card hoverable small">
                        <div className="card-image">
                            <img alt={'course hero'}src={card.image} />
                        </div>
                        <div className="card-content">
                            <p>{card.course}</p>
                            <p>{card.instructor}</p>
                        </div>
                        <div className="card-action">
                            <a href="/">$9.99</a>
                        </div>
                    </div>
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