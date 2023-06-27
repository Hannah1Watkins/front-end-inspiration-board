import React, {useState} from 'react';
import BoardForm from "./components/BoardForm";
import CardForm from './components/CardForm';

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const createBoard = (newBoard) => {
    setBoards([...boards, newBoard]);
  };

  const deleteBoard = (boardId) => {
    setBoards(boards.filter((board) => board.id !== boardId));
    if (selectedBoard && selectedBoard.id === boardId) {
      setSelectedBoard(null);
    }
  };

  const createCard = (newCard) => {
    if (selectedBoard) {
      const updatedBoards = boards.map((board) => {
        if (board.id === selectedBoard.id) {
          const updatedCards = [...board.cards, newCard];
          return { ...board, cards: updatedCards };
        }
        return board;
      });
      setBoards(updatedBoards);
    }
  };

  const deleteCard = (cardId) => {
    if (selectedBoard) {
      const updatedBoards = boards.map((board) => {
        if (board.id === selectedBoard.id) {
          const updatedCards = board.cards.filter((card) => card.id !== cardId);
          return { ...board, cards: updatedCards };
        }
        return board;
      });
      setBoards(updatedBoards);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Inspiration Board</h1>
        {/* Nav Component */}
      </header>
      <main>
        <BoardForm />
      </main>
      <footer>&amp</footer>
    </div>
  );
}

export default App;
