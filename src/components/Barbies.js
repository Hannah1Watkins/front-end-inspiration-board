import React from 'react'
import './Barbies.css'

const Barbies = ({selectedTheme}) => {
    const barbieMode = selectedTheme === 'barbie' ? 'barbie' : 'oppenheimer';
    return (
        <div className="team-section">
            <img className={barbieMode} src='/barbie-profiles/BarbieAngela.png' alt='barbified profile of web page creator'></img>
            <img className={barbieMode} src='/barbie-profiles/BarbieElaine.png' alt='barbified profile of web page creator'></img>
            <img className={barbieMode} src='/barbie-profiles/BarbieMaz.png' alt='barbified profile of web page creator'></img>
            <img className={barbieMode} src='/barbie-profiles/BarbieHannah.png' alt='barbified profile of web page creator'></img>
            <img className={barbieMode} src='/barbie-profiles/BarbieReina.png' alt='barbified profile of web page creator'></img> 
        </div>
    )
}

export default Barbies