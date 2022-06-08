import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleSubmitForm = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container register-container border rounded-5 p-4 mt-5 shadow'>
            <h2 className='text-primary text-center'>Please Register</h2>
            <form onSubmit={handleSubmitForm}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="password" id="" placeholder='Your Password' required />

                <Button className='w-100 mt-3 fs-5' variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3'>Already have an account? <span className='text-danger' style={{ cursor: "pointer" }} onClick={navigateLogin}>Please Login</span></p>
            </form>
        </div>
    );
};

export default Register;