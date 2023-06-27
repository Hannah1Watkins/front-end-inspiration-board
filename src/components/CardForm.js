import React from 'react'

const CardForm = () => {
    return (
        <form className="new_card_form">
            <section>
                <h2>Create A New Card: </h2>
                <div className="new_card_fields">
                    <div>
                        <label htmlFor="message">Message:</label>
                        <input name="message" value=""></input>
                    </div>
                    <div>
                        <p>Preview:</p>
                        {/* preview section */}
                    </div>
                    <button className="button new_card_submit" type="submit" value="add_board">Create Card</button>
                </div>
            </section>
        </form>
    )
}

export default CardForm;