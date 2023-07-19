import React, {useState, useEffect} from 'react';
import BoardForm from "./BoardForm";
import NavBar from './NavBar';
import SelectedBoard from './SelectedBoard';
import LoginPage from './LoginPage.js'
import NewUser from './NewUser.js'

const Dashboard = (props) => {
    return (
    <div className="Dashboard">
        <header className="app-header">
            <NavBar boards={props.boards} deleteBoard={props.deleteBoard} selectBoard={props.selectBoard}/>
        </header>
        {/* Get To Know The Team Section */}
        <section className="app-barbie-banner">
            <Barbies /> 
        </section>
        <main>
            {props.selectedBoard && <SelectedBoard selectedBoard={props.selectedBoard} cards={props.cards} createCard={props.createCard} deleteCard={props.deleteCard}increaseLikedCount={props.increaseLikedCount}/>}
            <BoardForm createBoardCallback={props.createBoardCallback}></BoardForm>
        </main>

    </div>)
}

export default Dashboard;