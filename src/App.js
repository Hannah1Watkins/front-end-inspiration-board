import React, {useState, useEffect} from 'react';
import BoardForm from "./components/BoardForm";
import CardForm from './components/CardForm';
import NavBar from './components/NavBar';
import SelectedBoard from './components/SelectedBoard';
import CardsList from './components/CardsList';
import Barbies from './components/Barbies';
import axios from 'axios';
import './App.css';

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
    axios.delete(`http://localhost:5000/boards/${boardId}`).then(resp => {
      setBoards(prevBoards => {
        const updatedBoards = prevBoards.filter(board => board.board_id !== boardId)
        return updatedBoards
      })
    }).catch(error => console.log(error.response.data))
  };

  const deleteCard = (cardId) => {
    if (selectedBoard) {
      axios.delete(`http://localhost:5000/cards/${cardId}`).then(resp => {
        setCards(prevCards => {
          const updatedCards = prevCards.filter(card => card.card_id !== cardId)
          return updatedCards
        })
      })
    };
  };
  
  // post request needs to go to /<board_id>/cards
  // board needs to be selectedboard
  const createCard = (newCardData) => {
    axios
    .post(`http://localhost:5000/boards/${selectedBoard.board_id}/cards`, newCardData)
    .then((response) => {
      setCards(prevCards => {
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

  const increaseLikedCount = (id) => {
    axios.patch(`http://localhost:5000/cards/${id}`)
    .then(response => {
      setCards(prevCards => {
        const updatedCards = prevCards.map(card => {
          return card.card_id === id ? response.data : card
        })
        return updatedCards
      })
    })
  };


  return (
    <div className="App">
      <header className="app-header">
        <NavBar boards={boards} deleteBoard={deleteBoard} selectBoard={selectBoard}/>
      </header>

      {/* Get To Know The Team Section */}
      <section className="app-barbie-banner">
        <Barbies /> 
      </section>

      <main className="app-body">
        <aside>
          <BoardForm createBoardCallback={createBoard}></BoardForm>
          <CardForm createCard={createCard}/>
        </aside>
        
        <section>
          {/* conditional rendering: I want to display this thing if both of these are true */}
          {selectedBoard && 
            <SelectedBoard 
              selectedBoard={selectedBoard} 
              cards={cards} 
              createCard={createCard} 
              deleteCard={deleteCard}
              increaseLikedCount={increaseLikedCount}
            />
          }

          <CardsList 
          cards={cards} 
          deleteCard = {deleteCard} 
          increaseLikedCount={increaseLikedCount}
          >
          </CardsList>
        </section>

      </main>

      <footer className="app-footer">
        <p>© 2023 Elaine, Maz, Hannah, Raina, Angela</p>
      </footer>
    </div>
  );
}

export default App;
