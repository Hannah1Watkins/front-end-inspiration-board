import React from 'react';
import { object } from 'yup';

const NewUser = ({togglePage, createUser}) => {
    const [formFields, setFormFields] = React.useState({
        firstName:'',
        lastName:'',
        username: '',
        password: '',
        // profilePic: '',
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(formFields)

        
        // function that posts new user here
    };
        
    return (
        <div className ="auth-form-container login-container">
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input name="firstName" type="text" value={formFields.firstName} onChange={handleChange}/>
                </label>
                <br></br>
                <label>
                    Last Name:
                    <input name="lastName" type="text" value={formFields.lastName} onChange={handleChange}/>
                </label>
                <br></br>
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
                {/* <label>
                    Profile Pic:
                    <input name="profilePic" type="img" value={formFields.profilePic} onChange={handleChange}/>
                </label> */}
            </form>
            <p>Already have an account? <button onClick={() => togglePage('login')}>Login Here</button></p>
        </div>
    );
};
    export default NewUser;