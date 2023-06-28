import React from 'react';
import './BoardForm.css'
import PropTypes from 'prop-types';

const BoardForm = ({createBoardCallback}) => {
    const [formFields, setFormFields] = React.useState({
        title: '',
        owner: ''
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBoardCallback(formFields);

        setFormFields({
            title: '',
            owner: ''
        });
    };

    const toggleShow = () => {
        console.log('Show/Hide')
    }


    return (
        <form className="new_board_form" onSubmit={handleSubmit}>
            <h2>Add a New Board: </h2>
            <section>
                <div className="new_board_fields">
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input 
                        name="title" 
                        value={formFields.title} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="owner">Owner: </label>
                        <input 
                        name="owner" 
                        value={formFields.owner} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <h3>Preview: <span>{formFields.title} - {formFields.owner}</span></h3>
                    </div>
                    <button className="button new_board_submit" type="submit" value="add_board">Submit</button>
                </div>
            </section>
            <button type="button" value="hide" onClick={toggleShow}>Show/Hide</button>
        </form>
    )
}

BoardForm.propTypes = {
    createBoardCallback: PropTypes.func.isRequired
};

export default BoardForm;