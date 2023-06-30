import React from 'react';
import * as Yup from 'yup';

const LoginPage = ({onFormSwitch}) => {
    const [formFields, setFormFields] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formFields);
    
        // send login info to server
        // create axios call in app.js that verifies username and password
        // run that function
    };
        
    return (
        <div className ="auth-form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input name="username" type="text" value={formFields.username} onChange={handleChange}/>
            </label>
            <label>
                Password:
                <input name="password" type="password" value={formFields.password} onChange={handleChange} />
            </label>
                <button type="submit">Submit</button>
        </form>
        <p>Don't have an account? <button onClick={() => onFormSwitch('register')}>Register Here</button></p>
        </div>
    );
}

// LoginPage.propTypes = {
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
// };      

export default LoginPage;