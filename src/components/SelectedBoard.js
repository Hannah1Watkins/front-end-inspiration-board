import React from 'react'
import PropTypes from 'prop-types';
import CardsList from './CardsList';
import CardForm from './CardForm';
import './SelectedBoard.css';

const SelectedBoard = ({ selectedBoard, cards, deleteCard, createCard, increaseLikedCount}) => {
  return (
    <div className="display-selected-board">
      <section>
        <h2>Selected Board: {selectedBoard.title}</h2>
        <CardForm createCard={createCard}/>
      </section>
      <CardsList cards={cards} deleteCard = {deleteCard} increaseLikedCount={increaseLikedCount}></CardsList>
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
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      liked_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
  increaseLikedCount: PropTypes.func.isRequired,
};

export default SelectedBoard;