import React from 'react'
import PropTypes from 'prop-types';
import './CardForm.css';

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
                        <label htmlFor="message">Message : </label>
                        <textarea 
                            name="message" 
                            value={formFields.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="preview">Preview : </label>
                        <span>{formFields.message}</span>
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