import React from 'react';
import { Button } from './Button';
import './OpeningPage.css';

function OpeningPage() {
  return (
    <div className='home-container'>
        <video src="/videos/barbenheimer2.mp4" autoPlay loop muted/>
        <h1> WELCOME TO BARBENHEIMER WORLD</h1>
        <p>Choose your Character</p>
        <div className="home-btns">
            <Button
            className='barbie-btn' 
            buttonStyle='btn--barbie'
            buttonSize='btn--large'
            linkTo='/BarbiePage'
            >
                Barbie
            </Button>
            <Button
            className='heimer-btn' 
            buttonStyle='btn--heimer'
            buttonSize='btn--large'
            linkTo='/OppenheimerPage'
            >
                OPPENHEIMER
            </Button>
        </div>

    </div>
  )
}

export default OpeningPage