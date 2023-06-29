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
  const [likedCount, setLikedCount] = useState(0);

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
    axios
    .post(`http://localhost:5000/boards/${selectedBoard.board_id}/cards`, newCardData)
    .then((response) => {
      setCards(prevCards => {
        console.log(response.data)
        return [...prevCards, response.data];
      })
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
        return [...prevBoards, response.data];
      })
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const selectBoard = (board) => {
    axios.get(`http://localhost:5000/boards/${board.board_id}/cards`)
    .then(response => {
      setSelectedBoard(board)
      setCards(response.data)
    })
  }

  const increaseLikedCount = (card) => {
    axios.patch(`http://localhost:5000/cards/${card.card_id}`)
    .then(response => {
      setLikedCount(response.data.likedCount)
    });
  };


  return (
    <div className="App">
      <header className="app-header">
        <h1>Inspiration Board</h1>
        <NavBar boards={boards} deleteBoard={deleteBoard} selectBoard={selectBoard}/>
      </header>
      <main>
        {/* conditional rendering: I want to display this thing if both of these are true */}
        {selectedBoard && <SelectedBoard selectedBoard={selectedBoard} cards={cards} createCard={createCard} increaseLikedCount={increaseLikedCount}/>}

        <BoardForm createBoardCallback={createBoard}></BoardForm>
      </main>

      <footer>
        <p>© 2023 Elaine, Maz, Hannah, Raina, Angela</p>
      </footer>
    </div>
  );
}

export default App;
