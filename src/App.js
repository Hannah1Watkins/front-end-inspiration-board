import React, {useState} from 'react';
import BoardForm from "./components/BoardForm";
import CardForm from './components/CardForm';
import axios from 'axios';

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  // React.useEffect(() => {
  //   axios.get('http://localhost:5000/cards').then((resp)=>{
  //     setCards(resp.data);
  //   });
  // }, []);

  const deleteBoard = (boardId) => {
    setBoards(boards.filter((board) => board.id !== boardId));
    if (selectedBoard && selectedBoard.id === boardId) {
      setSelectedBoard(null);
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
  
  const createCard = (newCardData) => {
    axios
    .post('http://localhost:5000/cards', newCardData)
    .then((response) => {
      const newCards = [...cards];

      newCards.push({
        id: response.data.card_id,
        message: response.data.message,
        board: response.data.board,
        likedCount: response.data.liked_count,
      });

      setCards(newCards);
    })
    .catch((error) => {
      console.log(error)
    });
  };
  
  const createBoard = (newBoardData) => {
    axios
    .post('http://localhost:5000/boards', newBoardData)
    .then((response) => {
      const newBoards = [...boards];

      newBoards.push({
        id: response.data.board_id,
        owner: response.data.owner,
        title: response.data.title,
      });
      setCards(newBoards);
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return (
    <div className="App">
      <header className="app-header">
        <CardForm createCardCallback={createCard}></CardForm>
        <BoardForm createBoardCallback={createBoard}></BoardForm>
        </header>
      </div>
  );
}

export default App;
