import React from 'react'
import PropTypes from 'prop-types';
import CardsList from './CardsList';
import CardForm from './CardForm';

const SelectedBoard = ({ selectedBoard, cards, deleteCard, createCard, increaseLikedCount}) => {
  console.log(selectedBoard)
  // console.log(selectedBoard.cards)
  return (
    <div>
      <h2>Selected Board: {selectedBoard.title}</h2>
      <CardsList cards={cards} deleteCard = {deleteCard} increaseLikedCount={increaseLikedCount}></CardsList>
      <CardForm createCard={createCard}/>
    </div>
  );
};

SelectedBoard.propTypes = {
  selectedBoard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        card_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        liked_count: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default SelectedBoard;