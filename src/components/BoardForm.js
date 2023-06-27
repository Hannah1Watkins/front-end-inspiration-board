import React from 'react'

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
    };

    return (
        <form className="new_board_form" onSubmit={handleSubmit}>
            <section>
                <h2>New Board: </h2>
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
                        <h3>Preview: </h3>
                        <section>
                            Title: {formFields.title}
                            Owner: {formFields.owner}
                        </section>

                    </div>
                    <button className="button new_board_submit" type="submit" value="add_board">Submit</button>
                </div>
            </section>
        </form>
    )
}

export default BoardForm;