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
                <button type="button" onClick={toggleShow}>{displayForm ? 'hide' : 'show'}</button>
            </section>
            <section className={`inputs ${displayForm ? 'show' : 'hide'}`}>
                <div className="new_board_fields">
                    <div>
                        <input 
                        name="title" 
                        value={formFields.title} 
                        onChange={handleChange} 
                        required />
                        <label htmlFor="title">Title</label> 
                        
                    </div>

                    <div>
                        <input 
                        name="owner" 
                        value={formFields.owner} 
                        onChange={handleChange} 
                        required />
                        <label htmlFor="owner">Owner</label>
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