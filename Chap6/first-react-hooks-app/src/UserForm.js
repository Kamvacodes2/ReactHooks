import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

function UserForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setemailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    //handle submission
    const handleSubmit = event => {
        event.preventDefault();
        var emailValid = false;
        if (email.length === 0) {
            setemailError('Email is required')
        }
        else if (email.length < 6) {
            setemailError('Email typed should have a minimum of 6 characters ')
        }
        else if (email.indexOf(' ') >= 0) {
            setemailError('Email may not contain spaces')
        }
        else {
            setemailError('');
            emailValid = true;
        }


        var passwordValid = false;
        if (password.length === 0) {
            setPasswordError('Password is required');
        }
        else if (password.length < 5) {
            setPasswordError('Password should have more than 4 characters')
        }
        else if (password.indexOf(' ') > 0) {
            setPasswordError('You cannot have spaces in your password')
        }
        else {
            setPasswordError('')
            passwordValid = true;
        }

        if (emailValid && passwordValid) {
            alert('Email: ' + email + '\nPassword: ' + password);
            setEmail('');
            setPassword('');
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} style={{ width: '20%', margin: '0 auto' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} value={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {emailError.length > 0 &&
                    <Alert variant='danger'>{emailError}</Alert>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} value={password} />
                </Form.Group>
                {passwordError.length > 0 &&
                    <Alert variant='danger'>{passwordError}</Alert>}
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Check this if you are human"
                />
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            Emailentered: {email}
            <br />
            Password entered: {password}
        </div>
    );
}

export default UserForm;