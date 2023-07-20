import React, {useState, useEffect} from 'react';
import Barbies from './Barbies.js';
import BoardForm from './BoardForm.js';
import CardForm from './CardForm.js';
import CardsList from './CardsList.js';
import NavBar from './NavBar.js';
import SelectedBoard from './SelectedBoard.js';
import './Dashboard.css';


const Dashboard = (props) => {
    return (
    <div className="Dashboard">

        <header className="dashboard-header">
            <NavBar boards={props.boards} deleteBoard={props.deleteBoard} selectBoard={props.selectBoard}/>
        </header>

        {/* Get To Know The Team Section */}
        <section className="dashboard-barbie-banner">
            <Barbies /> 
        </section>

        <main className="dashboard-body">
            <aside>
                <BoardForm createBoard={props.createBoard}></BoardForm>
                <CardForm createCard={props.createCard}/>
            </aside>

            <section>
                {props.selectedBoard && <SelectedBoard selectedBoard={props.selectedBoard} cards={props.cards} createCard={props.createCard} deleteCard={props.deleteCard}increaseLikedCount={props.increaseLikedCount}/>}
                <CardsList 
                    cards={props.cards} 
                    deleteCard = {props.deleteCard} 
                    increaseLikedCount={props.increaseLikedCount}
                    >
                </CardsList>
            </section>
        </main>
        
        

    </div>)
}

export default Dashboard;