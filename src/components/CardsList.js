import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsList = ({ cards, increaseLikedCount, deleteCard }) => {
    const cardComponents = cards.map( (card, index) => {
        return (<Card
            card={card}
            increaseLikedCount={increaseLikedCount}
        />)
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
    deleteCard: PropTypes.func.isRequired,
};      

export default CardsList;