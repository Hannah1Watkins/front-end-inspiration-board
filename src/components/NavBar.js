import React from 'react'
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ boards, deleteBoard, selectBoard }) => {

    const board_titles = boards.map((board, index) => {
        return (
            <li key={index} className="board_title">
                <button onClick={() => selectBoard(board)}>{board.title}</button>
                <button onClick={() => deleteBoard(board.board_id)}>Delete</button>
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

NavBar.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default NavBar;