import React from 'react'
import PropTypes from 'prop-types';

const CardForm = ({createCard}) => {
    const [formFields, setFormFields] = React.useState({
        message: '',
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createCard(formFields);
        setFormFields({
            message: ''
        });
    };


    React.useEffect(() => {
        PropTypes.checkPropTypes(
            {
            createCard: PropTypes.func.isRequired,
            },
            { createCard },
            'prop',
            'CardForm'
        );
    }, [createCard]);


    return (
        <form className="new_card_form" onSubmit={handleSubmit}>
            <section>
                <h2>Create New Card</h2>
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
                    <button 
                        className="button new_card_submit" 
                        type="submit" 
                        value="add_card">Create Card</button>
                </div>
            </section>
        </form>
    );
};

CardForm.propTypes = {
    createCard: PropTypes.func.isRequired
};  

export default CardForm;