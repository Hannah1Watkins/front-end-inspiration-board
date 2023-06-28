import React from 'react'
import CardsList from './CardsList';

const SelectedBoard = ({ selectedBoard, deleteCard }) => {
  console.log(selectedBoard)
  return (
    <div>
      <h2>Selected Board: {selectedBoard.title}</h2>
      {/*  */}
      <CardsList cards={selectedBoard.cards} deleteCard = {deleteCard}></CardsList>
    </div>
  )
}

export default SelectedBoard;