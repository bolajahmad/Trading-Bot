import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faChartLine, faPlay, faUserCheck } from '@fortawesome/free-solid-svg-icons'

import './Header.scss'


const Header = () => {
    return (
        <Container as='header' fluid>
                <HeaderNavigationBar />
                <HeaderContent />
        </Container>
    )
}

const HeaderNavigationBar = () => {
    return (
        <Navbar className='fixed-nav' fixed='top' expand='md' collapseOnSelect>
        <Navbar.Brand href='/' className='navbar-brand brand'>
            <FontAwesomeIcon icon={faBitcoin} size='2x' color='black' className='pr-2' />
            SWIFT BOT
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls='navbar-dropdown' />

        <Navbar.Collapse id='navbar-dropdown'>
            <Nav md={12} className='nav nav-left mr-auto'>
                <Nav.Link href='/' className='nav-link'>Home</Nav.Link>
                <Nav.Link href='#about' className='nav-link'>About</Nav.Link>
                <Nav.Link href='#currencies-available' className='nav-link'>Currencies</Nav.Link>
                <Nav.Link href='#crypto-news' className='nav-link'>Crypto News</Nav.Link>
                <Nav.Link href='#dashboard' className='nav-link'>Dashboard</Nav.Link>
                <Nav.Link href='#contact' className='nav-link'>Contact Us</Nav.Link>
            </Nav>

            <Nav md={{span: '6', offset: '4'}} className='nav nav-right ml-auto'>
                <Nav.Link as='button' sm='6' href='#login' className='nav-link log-in'>
                    <Link to='/dashboard'>
                        <FontAwesomeIcon icon={faUserCheck} className='mr-2' color='white' />
                        <span style={{color: 'white'}}>Sign In</span>
                    </Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

const HeaderContent = () => {
    return (
        <Router>
            <Container as='div' className='section-container d-flex justify-content-center text-center align-items-center'>
                <Row as='section' className='content'>
                    <Col as='h1' sm={12} className='heading'>TRADING BOT</Col>
                    <Col as='p' sm={12} className='lead-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.</Col>
                    <Col sm={12}>
                        <Button variant='primary' className='btn'>
                            <FontAwesomeIcon icon={faChartLine} />
                            Market
                        </Button>
                        <Link to='/dashboard'>
                            <Button variant='danger' className='btn'>
                                <FontAwesomeIcon icon={faPlay} />
                                Learn To Trade
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Router>
    )
}

export default Header