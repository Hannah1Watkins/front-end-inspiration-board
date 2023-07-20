import React from 'react';

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
        <div className ="login-container">
            
            <form onSubmit={handleSubmit}>
                <h2 className='new-user-heading'>Register</h2>
                {/* <h2><span className='flicker-slow'>R</span>eg<span className='flicker-fast'>i</span>ster</h2> */}
                <label>
                    First Name: <br></br><br></br>
                    <input name="firstName" type="text" value={formFields.firstName} onChange={handleChange} placeholder='First Name'/>
                </label>
                <br></br>
                <label>
                    Last Name:<br></br><br></br>
                    <input name="lastName" type="text" value={formFields.lastName} placeholder='Last Name' onChange={handleChange}/>
                </label>
                <br></br>
                <label>
                    Username:<br></br><br></br>
                    <input name="username" type="text" value={formFields.username} onChange={handleChange} placeholder='Username'/>
                </label>
                <br></br>
                <label>
                    Password:<br></br><br></br>
                    <input name="password" type="password" value={formFields.password} onChange={handleChange} placeholder='Password' />
                </label>
                <br></br>
                    <button type="submit" className='glow-on-hover'>Submit</button>
                {/* <label>
                    Profile Pic:
                    <input name="profilePic" type="img" value={formFields.profilePic} onChange={handleChange}/>
                </label> */}
            </form>
            <div className='login-help'>
            <p>Already have an account? <button onClick={() => togglePage('login')} className='glow-on-hover'>Login</button></p>
            </div>
        </div>
    );
};
    export default NewUser;