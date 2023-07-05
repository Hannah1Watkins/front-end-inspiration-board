import React from 'react'
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ boards, deleteBoard, selectBoard }) => {

    const board_titles = boards.map((board, index) => {
        return (
            <li key={index} className="board_title">
                <button className="boards_list_item" onClick={() => selectBoard(board)}>{board.title}</button>
                <button className="boards_list_item_delete" onClick={() => deleteBoard(board.board_id)}>X</button>
            </li>
        );
    });
    
    return (
        <nav className="nav">
            <h1>Inspiration Board</h1>
            {/* <h3>Get to Know the Team</h3> */}
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