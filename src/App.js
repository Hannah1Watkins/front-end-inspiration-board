import React, {useState, useEffect} from 'react';
import BoardForm from "./components/BoardForm";
import NavBar from './components/NavBar';
import SelectedBoard from './components/SelectedBoard';
import CardForm from './components/CardForm';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect( () => {
    axios.get('http://127.0.0.1:5000/boards').then(resp => {
      setBoards(resp.data)
    })
  }, []);

  const deleteBoard = (boardId) => {
    console.log(boardId);
    axios.delete(`http://localhost:5000/boards/${boardId}`).then(resp => {
      setBoards(prevBoards => {
        const updatedBoards = prevBoards.filter(board => board.board_id !== boardId)
        return updatedBoards
      })
    }).catch(error => console.log(error.response.data))
  };

  const deleteCard = (cardId) => {
    if (selectedBoard) {
      const updatedBoards = boards.map((board) => {
        if (cardId === selectedBoard.id) {
          const updatedCards = board.cards.filter((card) => card.id !== cardId);
          return { ...board, cards: updatedCards };
        }
        return board;
      });
    };
  };
  
  // post request needs to go to /<board_id>/cards
  // board needs to be selectedboard
  const createCard = (newCardData) => {
    console.log("new Card Data",newCardData)
    axios
    .post('http://localhost:5000/boards/1/cards', newCardData)
    .then((response) => {
      console.log('response',response)
      const newCards = [...cards];

      newCards.push({
        id: response.data.card_id,
        message: response.data.message,
        board_id: response.data.board_id,
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
      setBoards(prevBoards => {
        console.log('response',response.data)
        return [...prevBoards, response.data]
      })
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const selectBoard = (board) => {
    setSelectedBoard(board)
  }

  return (
    <div className="App">
      <header className="app-header">
        {/* <h1>Inspiration Board</h1> */}
        <NavBar boards={boards} deleteBoard={deleteBoard} selectBoard={selectBoard}/>
      </header>
      <main>
        {/* conditional rendering: I want to display this thing if both of these are true */}
        {selectedBoard && <SelectedBoard selectedBoard={selectedBoard}/>}

        <BoardForm createBoardCallback={createBoard}></BoardForm>
      </main>

      <footer>
        <p>© 2023 Elaine, Maz, Hannah, Raina, Angela</p>
      </footer>
    </div>
  );
}

export default App;
