import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsList = ({ cards, deleteCard }) => {
    const cardComponents = cards.map( (card) => (
        <Card
            key={card.card_id}
            id = {card.card_id}
            message = {card.message}
            likedCount = {card.liked_count}
            deletedCard={deleteCard}
        />
    ));

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
    deleteCard: PropTypes.func.isRequired,
};      

export default CardsList;