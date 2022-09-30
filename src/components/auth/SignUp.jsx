import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {Form,Row,Col} from 'react-bootstrap'
import { signUp,signIn } from '../../api/auth'



//SignUp Component - Renders a form for user to enter credentials/redirects to home page

const SignUp = ({setUser}) => {
    //state variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    //onSignUp Function - creates an account and signs in user
    //throws an error if issue with creating account
	const onSignUp = (event) => {
		event.preventDefault()

        const credentials = {email, password, passwordConfirmation, firstName, lastName}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) =>{ 
                console.log(res.data)
                setUser(res.data.user)})
			.then(() => navigate('/'))
			.catch(() => {
                setError("Please ensure credentials are correct")
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
			})
	}

    return (
        <>
        <div className='signup-container'>
            <div className='credentials-container'>
                <div className='credentials'>
                    <div className='form-title'>
                        <h2>Welcome, Sign up below.</h2>
                        <h6>Already a user? <Link to="/sign-in" >Login</Link></h6>
                        {error?<h6 className='auth-error'>{error}</h6>:<></>}

                    </div>
                    <Form className='form' onSubmit={onSignUp}>
                        <Row className='form-row'>
                            <Col>
                                <div>First Name</div>
                                <Form.Group controlId='firstName'>
                                    <Form.Control
                                        required
                                        type='string'
                                        name='firstName'
                                        value={firstName}
                                        maxLength={39}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <div>Last Name</div>
                                <Form.Group controlId='lastName'>
                                    <Form.Control
                                        required
                                        maxLength={39}
                                        type='string'
                                        name='lastName'
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='form-row'>
                            <Col>
                                <div>Email</div>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        maxLength={150}
                                        type="string"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='form-row'>
                            <Col>
                                <div>Password</div>
                                <Form.Group controlId='password'>
                                    <Form.Control
                                        minLength={8}
                                        required
                                        type='password'
                                        name='password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <div>Confirm Password</div>
                                <Form.Group controlId='passwordConfirmation'>
                                    <Form.Control
                                        minLength={8}
                                        required
                                        type='password'
                                        name='passwordConfirmation'
                                        value={passwordConfirmation}
                                        onChange={e => setPasswordConfirmation(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <button type='submit' className='form-btn'>
                            Sign Up
                        </button>
                    </Form>
                </div>
                <div className='credentials-logo'>
                    <h1 className='bioinv'>BioInv</h1>
                    <div className='slogan'>We make science easy.</div>
                </div>
            </div>
        </div>
        </>
    )

}

export default SignUp



