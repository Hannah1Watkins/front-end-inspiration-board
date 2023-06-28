import React from 'react'
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ boards, deleteBoard }) => {
<<<<<<< HEAD
=======

>>>>>>> 3512be3f78c227edabd314672f51b5e4f331ccfb
    const board_titles = boards.map((board, index) => {
        return (
            <li key={index} className="board_title">
                {board.title}
<<<<<<< HEAD
                <button onClick={() => deleteBoard(board.board_id)}>Delete Board</button>
=======
                <button onClick={() => deleteBoard(board.board_id)}>Delete</button>
>>>>>>> 3512be3f78c227edabd314672f51b5e4f331ccfb
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