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
  const [selectedBoard, setSelectedBoard] = useState([]);

  useEffect( () => {
    axios.get('http://127.0.0.1:5000/boards').then(resp => {
      setBoards(resp.data)
    })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:5000/boards/${selectedBoard.board_id}/cards`).then((resp)=>{
      setCards(resp.data);
    });
  }, []);

  const deleteBoard = (boardId) => {
    console.log(boardId);
    axios.delete(`http://localhost:5000/boards/${boardId}`).then(resp => {
      setBoards(prevBoards => {
        const updatedBoards = prevBoards.filter(board => board.board_id !== boardId)
        return updatedBoards
      })
    }).catch(error => console.log(error.response.data))
    // axios
    //   .delete(`http://localhost:5000/boards/${boardId}`)
    //   .then((response) => {
    //     // setBoards(boards.filter((board) => board.board_id !== boardId));
    //     setBoards(oldBoards => oldBoards.filter(board => board.board_id !== boardId));
    //     if (selectedBoard && selectedBoard.id === boardId) {
    //       setSelectedBoard(null);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  // const deleteCard = (cardId) => {
  //   if (selectedBoard) {
  //     const updatedBoards = boards.map((board) => {
  //       if (card.id === selectedBoard.id) {
  //         const updatedCards = board.cards.filter((card) => card.id !== cardId);
  //         return { ...board, cards: updatedCards };
  //       }
  //       return board;
  //     });
  //     setBoards(updatedBoards);
  //   }
  // };
  // post request needs to go to /<board_id>/cards
  // board needs to be selectedboard
  // const createCard = (newCardData) => {
  //   console.log("new Card Data",newCardData)
  //   axios
  //   .post('http://localhost:5000/boards/1/cards', newCardData)
  //   .then((response) => {
  //     console.log('response',response)
  //     const newCards = [...cards];

  //     newCards.push({
  //       id: response.data.card_id,
  //       message: response.data.message,
  //       board_id: response.data.board_id,
  //       likedCount: response.data.liked_count,
  //     });

  //     setCards(newCards);
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   });
  // };
  
  const createBoard = (newBoardData) => {
    axios
    .post('http://localhost:5000/boards', newBoardData)
    .then((response) => {
      setBoards(prevBoards => {
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
        <h1>Inspiration Board</h1>
        <NavBar boards={boards} deleteBoard={deleteBoard} selectBoard={selectBoard}/>
      </header>
      <main>
        <SelectedBoard selectedBoard = {selectedBoard}/>
        <BoardForm createBoardCallback={createBoard} />
        {/* {selectedBoard ? (
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
            <CardForm createCardCallback={createCard} />
          </>
        ) : (
          <>
            <h2>Boards</h2>
            <button onClick={() => setSelectedBoard({})}>Create New Board</button>
            <ul>
              {boards.map((board) => (
                <li key={board.board_id}>
                  <button onClick={() => setSelectedBoard(board)}>{board.title}</button>
              
              </li>
              // console.log(board)
            ))}

            </ul>
            <BoardForm createBoardCallback={createBoard} />
            <CardForm createCardCallback={createCard} />
          </>
        )} */}
      </main>

      <footer>
        <p>© 2023 Elaine, Maz, Hannah, Raina, Angela</p>
      </footer>
    </div>
  );
}

export default App;
