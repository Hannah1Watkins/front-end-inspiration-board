import React from 'react';
import './BoardForm.css'
import PropTypes from 'prop-types';

const BoardForm = ({createBoardCallback}) => {

    const [formFields, setFormFields] = React.useState({
        title: '',
        owner: ''
    });
    const [displayForm, setDisplayForm] = React.useState(false);

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayForm(false);
        createBoardCallback(formFields);
        setFormFields({
            title: '',
            owner: ''
        });

    }
    
    const toggleShow = () => {
        setDisplayForm(!displayForm);
    }

    return (
        <form className="new_board_form" onSubmit={handleSubmit}>
            <section className="new_board_header">
                <h2>Create New Board</h2>
                <button type="button" value="hide" onClick={toggleShow}>Show / Hide</button>
            </section>
            <section className={`inputs ${displayForm ? 'show' : 'hide'}`}>
                <div className="new_board_fields">
                    <div>
                        <label htmlFor="title">Title </label> 
                        <input 
                        name="title" 
                        value={formFields.title} 
                        onChange={handleChange} 
                        required />
                    </div>
                    <div>
                        <label htmlFor="owner">Owner </label>
                        <input 
                        name="owner" 
                        value={formFields.owner} 
                        onChange={handleChange} 
                        required />
                    </div>
                    <div>
                        <label htmlFor="preview">Preview : </label>
                        <span>{formFields.title} - {formFields.owner}</span>
                    </div>
                    <button className="button new_board_submit" type="submit" value="add_board">Create Board</button>
                </div>
            </section>
        </form>
    )
}

BoardForm.propTypes = {
    createBoardCallback: PropTypes.func.isRequired
};

export default BoardForm;