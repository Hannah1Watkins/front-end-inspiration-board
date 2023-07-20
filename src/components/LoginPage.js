import React from 'react';
import NewUser from './NewUser';
import './LoginPage.css'

const LoginPage = ({verifyLogin, createUser, responseMessage, isResponseVisible}) => {
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
        <div className='container'>
            {userRegistered === 'login' ? 
            <div className ='login-container'>
                <h1><h1>Inspiration Board</h1></h1>
                {/* <h2>Login<span className='flicker-fast'> He</span><span className='flicker-slow'>re</span></h2> */}
                <form onSubmit={handleSubmit}>
                    <label>
                        Username: <br></br><br></br>
                        <input name="username" type="text" value={formFields.username} onChange={handleChange} placeholder='username'/>
                    </label>
                    <br></br>
                    <label>
                        Password: <br></br><br></br>
                        <input name="password" type="password" value={formFields.password} onChange={handleChange} placeholder='password' />
                    </label>
                    <br></br>
                        <button className='glow-on-hover' type="submit">Submit</button>
                </form>
                {isResponseVisible && responseMessage !== null && responseMessage.trim() !== "" && (
                <h3 className="response"> {responseMessage} </h3> )}
                <div class='login-help'>
                    <p>Don't have an account? <button onClick={() => togglePage('register')} className='glow-on-hover'>Register</button></p>
                </div>
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