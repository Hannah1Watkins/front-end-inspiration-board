import React from 'react'
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ boards, deleteBoard, selectBoard, handleLogout }) => {

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
            <h1>Insp<span className='flicker-slow'>ira</span>tion <br/> <span className='flicker-fast'>Bo</span>ard</h1>
            {/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
            <aside className="dropdown">
                <h4>All Boards</h4>
                <ul className="dropdown_content">{board_titles}</ul>
            </aside>
        </nav>
    );
};

NavBar.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleLogout: PropTypes.func.isRequired,
};

export default NavBar;