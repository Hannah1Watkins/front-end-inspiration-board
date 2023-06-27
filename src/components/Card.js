import React from 'react'

const Card = () => {
    return (
        <section className='single_card_section'>
            <p>"Card Content Goes Here"</p>
            <div className="card_interactions_div">
                <p>heart counts go here</p>
                <button className='button plus_one_button'>+1</button>
                <button className='button delete_card_button'>Delete</button>
            </div>
        </section>
    )
}

export default Card;