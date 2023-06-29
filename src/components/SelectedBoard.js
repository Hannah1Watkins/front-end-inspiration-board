import React from 'react'
import CardsList from './CardsList';
import CardForm from './CardForm';

const SelectedBoard = ({ selectedBoard, deleteCard, createCard }) => {
  console.log(selectedBoard)
  // console.log(selectedBoard.cards)
  return (
    <div>
      <h2>Selected Board: {selectedBoard.title}</h2>
      <CardsList cards={selectedBoard.cards} deleteCard = {deleteCard}></CardsList>
      <CardForm createCard={createCard}/>
    </div>
  )
}

export default SelectedBoard;