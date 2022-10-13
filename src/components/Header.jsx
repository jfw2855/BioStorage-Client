import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'




const Header = ({user}) => {




    const authUser = (
        <Navbar className='navbar'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Navbar.Brand >
                        <Link to='/' className='logo'>
                            BioInv
                        </Link>
                    </Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
	    </Navbar>
    )

    return (
        <>
        {user?authUser:<></>}
        </>
    )

}

export default Header