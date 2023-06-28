import React from 'react'
import './NavBar.css';
import Board from './Board.js'

const NavBar = ({ boards, deleteBoard }) => {
    const board_titles = boards.map((board, index) => {
        return (
            <li key={index} className="board_title">
                <Board
                boardId={board.id}
                title={board.title}
                deleteBoard={deleteBoard}>
                </Board>
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