import React from 'react'

const CardForm = () => {
    const [formFields, setFormFields] = React.useState({
        message: '',
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <form className="new_card_form">
            <section>
                <h2>Create A New Card: </h2>
                <div className="new_card_fields">
                    <div>
                        <label htmlFor="message">Message:</label>
                        <input 
                            name="message" 
                            value={formFields.message}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <p>Preview:{formFields.message}</p>
                    </div>
                    <button className="button new_card_submit" type="submit" value="add_card">Create Card</button>
                </div>
            </section>
        </form>
    );
};

export default CardForm;