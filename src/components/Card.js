import React from 'react'
import PropTypes from 'prop-types';

const Card = ({card , increaseLikedCount, deleteCard}) => {
    return (
        <section className='single_card_section'>
            <p>{card.message}</p>
            <div className="card_interactions_div">
                <p>{card.likedCount}❤️s</p>
                <button className='button plus_one_button' onClick = {() => increaseLikedCount(card)}>+1</button>
                <button className='button delete_card_button'>Delete</button>
            </div>
        </section>
    )
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
    increaseLikedCount: PropTypes.func.isRequired,
    // id: PropTypes.number.isRequired,
    // message: PropTypes.string.isRequired,
    // likedCount: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default Card;