import React from 'react'

const Board = ({ id, title}) => {
    return (
        <li>
            {title}
            {/* <button onClick={() => deleteBoard(id)}>Delete Board</button> */}
        </li>
    )
};

export default Board;