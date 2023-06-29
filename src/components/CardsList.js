import React from 'react';
import Card from './Card';

const CardsList = ({ cards, increaseLikedCount, deleteCard }) => {
    const cardComponents = cards.map( (card, index) => {
        return (<Card
            card={card}
            increaseLikedCount={increaseLikedCount}
        />)
    })

    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default CardsList;