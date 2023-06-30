import React from 'react';

const NewUser = ({onFormSwitch}) => {
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
        console.log(formFields)
    
        // function that posts new user here
    };
        
    return (
        <div className ="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input name="firstName" type="text" value={formFields.firstName} onChange={handleChange}/>
                </label>
                <label>
                    Last Name:
                    <input name="lastName" type="text" value={formFields.lastName} onChange={handleChange}/>
                </label>
                <label>
                    Username:
                    <input name="username" type="text" value={formFields.username} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={formFields.password} onChange={handleChange} />
                </label>
                    <button type="submit">Submit</button>
                {/* <label>
                    Profile Pic:
                    <input name="profilePic" type="img" value={formFields.profilePic} onChange={handleChange}/>
                </label> */}
            </form>
            <p>Already have an account? <button onClick={() => onFormSwitch('login')}>Login Here</button></p>
        </div>
    );
};
    export default NewUser;