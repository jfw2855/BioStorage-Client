import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Form,Row,Col} from 'react-bootstrap'




const SignUp = ({setUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
  

    return (
        <>
        <div className='signup-container'>
            <div className='credentials-container'>
                <div className='credentials'>
                    <div className='form-title'>
                        <h2>Welcome, Sign up below.</h2>
                        <h6>Already a user? <Link to="/sign-in" >Login</Link></h6>

                    </div>
                    <Form className='form'>
                        <Row className='form-row'>
                            <Col>
                                <div>First Name</div>
                                <Form.Group controlId='firstName'>
                                    <Form.Control
                                        required
                                        type='string'
                                        name='firstName'
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <div>Last Name</div>
                                <Form.Group controlId='lastName'>
                                    <Form.Control
                                        required
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



