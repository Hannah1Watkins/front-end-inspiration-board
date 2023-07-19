import React from 'react';
import NewUser from './NewUser';
import './LoginPage.css'

const LoginPage = ({verifyLogin, createUser}) => {
    const [userRegistered, setUserRegistered] = React.useState('login')
    const [formFields, setFormFields] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        verifyLogin(formFields);

        // send login info to server
        // create axios call in app.js that verifies username and password
        // run that function
    };

    const togglePage = (whichPage) => {
        setUserRegistered(whichPage);
        };
        
    return (
        <div className='login-container'>
            {userRegistered === 'login' ? <div className ="auth-form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={formFields.username} onChange={handleChange}/>
                    </label>
                    <br></br>
                    <label>
                        Password:
                        <input name="password" type="password" value={formFields.password} onChange={handleChange} />
                    </label>
                    <br></br>
                        <button type="submit">Submit</button>
                </form>
                <p>Don't have an account? <button onClick={() => setUserRegistered('register')}>Register Here</button></p>
            </div> : <NewUser createUser={createUser} togglePage={togglePage}></NewUser>
            }
            
            
        </div>
    );
}

// LoginPage.propTypes = {
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
// };      

export default LoginPage;