import React from 'react'
import './NavBar.css';

const NavBar = ({ boards, deleteBoard }) => {
    const board_titles = boards.map((board, index) => {
        return (
            <li key={index} className="board_title">
                {board.title}
                <button onClick={deleteBoard(board.board_id)}>Delete Board</button>
            </li>
        );
    });
    
    return (
        <nav>
            <ul className="dropdown">
                <h3>All Boards</h3>
                    <ul className="dropdown_content">{board_titles}</ul>
            </ul>
        </nav>
    );
};

export default NavBar;