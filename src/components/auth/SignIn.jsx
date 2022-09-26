import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import {Form,Row,Col} from 'react-bootstrap'




const SignIn = () => {
  
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)

    return (
        <>
                <div className='signup-container'>
            <div className='credentials-container'>
                <div className='credentials-logo'>
                    <h1 className='bioinv'>BioInv</h1>
                    <div className='slogan'>We make science easy.</div>
                </div>
                <div className='credentials'>
                    <div className='form-title'>
                        <h2>Welcome back!</h2>
                        <h6>New user? <Link to="/sign-up">Sign up</Link></h6>
                    </div>
                    <Form className='form'>
                        <Row className='form-row'>
                            <div>Email</div>
                                <Form.Group controlId='email'>
                                    <Form.Control
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        />
                                </Form.Group>
                        </Row>
                        <Row className='form-row'>
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
                        </Row>
                        <button type="submit" className='form-btn'>Login</button>
                    </Form>
                </div>
            </div>
        </div>
        </>
    )

}

export default SignIn