import React, {useState} from 'react';
import BoardForm from "./components/BoardForm";
import CardForm from './components/CardForm';
import Card from './components/Card';

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
        {selectedBoard ? (
          <>
            <h2>{selectedBoard.title}</h2>
            <button onClick={() => setSelectedBoard(null)}>Back to Boards</button>
            <ul>
              {selectedBoard.cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  deleteCard={() => deleteCard(card.id)}
                />
              ))}
            </ul>
            <CardForm createCard={createCard} />
          </>
        ) : (
          <>
            <h2>Boards</h2>
            <button onClick={() => setSelectedBoard({})}>Create New Board</button>
            <ul>
              {boards.map((board) => (
                <li key={board.id}>
                  <button onClick={() => setSelectedBoard(board)}>{board.title}</button>
                  <button onClick={() => deleteBoard(board.id)}>Delete</button>
                </li>
              ))}
            </ul>
            <BoardForm createBoard={createBoard} />
          </>
        )}
      </main>
      <footer>
        <p>© 2023 Elaine, Maz, Hannah, Raina, Angela</p>
      </footer>
    </div>
  );
}

export default App;