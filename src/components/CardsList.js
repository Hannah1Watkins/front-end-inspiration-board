import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsList = ({ cards, increaseLikedCount, deleteCard }) => {
    const cardComponents = cards.map( (card, index) => {
        return (
            <div key={index}>
                <Card
                    card_id={card.card_id}
                    message={card.message}
                    liked_count = {card.liked_count}
                    increaseLikedCount={increaseLikedCount}
                    deleteCard={deleteCard}
                />
            </div>
        )
    })

    return <div>
            {cardComponents}
        </div>;
};

CardsList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            liked_count: PropTypes.number.isRequired,
        })
    ).isRequired,
    increaseLikedCount: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};      

export default CardsList;