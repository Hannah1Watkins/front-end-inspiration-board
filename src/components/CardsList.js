import React from 'react';
import Card from './Card';

const CardsList = ({ cards, deleteCard }) => {
    const cardComponents = cards.map( (card, index) => {
        return (<Card
            id = {card.card_id}
            message = {card.message}
            likedCount = {card.liked_count}
        />)
    })

    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default CardsList;