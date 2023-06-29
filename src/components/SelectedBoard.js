import React from 'react'
import PropTypes from 'prop-types';
import CardsList from './CardsList';

const SelectedBoard = ({ selectedBoard, deleteCard }) => {
  console.log(selectedBoard)
  // console.log(selectedBoard.cards)
  return (
    <div>
      <h2>Selected Board: {selectedBoard.title}</h2>
      {/*  */}
      <CardsList cards={selectedBoard.cards} deleteCard = {deleteCard}></CardsList>
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