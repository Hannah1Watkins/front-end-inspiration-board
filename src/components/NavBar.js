import React from 'react'
import './NavBar.css';

const NavBar = ({ boards }) => {
    const board_titles = boards.map((board, index) => {
        return (
            <li key={index} className="board_title">
                {board.title}
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