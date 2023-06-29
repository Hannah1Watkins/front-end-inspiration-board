import React from 'react'
import PropTypes from 'prop-types';

const Card = ({card_id, message, liked_count, increaseLikedCount, deleteCard}) => {
    return (
        <section className='single_card_section'>
            <p>{message}</p>
            <div className="card_interactions_div">
                <p>{liked_count}❤️s</p>
                <button className='button plus_one_button' onClick = {() => increaseLikedCount(card_id)}>+1</button>
                <button className='button delete_card_button' onClick = {() => deleteCard(card_id)}>Delete</button>
            </div>
        </section>
    )
}

Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likedCount: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
    increaseLikedCount: PropTypes.func.isRequired,
};

export default Card;