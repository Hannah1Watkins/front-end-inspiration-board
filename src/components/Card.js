import React from 'react'
import PropTypes from 'prop-types';

const Card = ({id, message, likedCount, deleteCard}) => {
    return (
        <section className='single_card_section'>
            <p>{message}</p>
            <div className="card_interactions_div">
                <p>{likedCount}</p>
                <button className='button plus_one_button'>+1</button>
                <button className='button delete_card_button'>Delete</button>
            </div>
        </section>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likedCount: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default Card;