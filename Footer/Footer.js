import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faBehance, faGooglePlus, faLinkedin, faBitcoin } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'


const Footer = () => {
    return (
        <footer className='bg-dark m-0'>
            <Container as='footer' className='footer bg-dark'>
                <Row>
                    <Col md={4} sm={12}>
                        <h4 className='logo'>
                            <FontAwesomeIcon icon={faBitcoin} size='1.2x' color='black' className='pr-2' />
                            BITBOT
                        </h4>
                        <p>Architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.</p>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faBehance} />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faGooglePlus} />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={6} md={{span: '3', offset:'2'}}>
                        <h5>Solutions</h5>
                        <Nav className='flex-column'>
                        <Nav.Item>
                                <Nav.Link>Fee Info</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>Start Trading</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>We Are Hiring</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>Blog Posts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>API Docs</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={6} md={3}>
                        <h5>Useful Links</h5>
                        <Nav className='flex-column'>
                        <Nav.Item>
                                <Nav.Link>About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>Help &amp; Support</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>Pricing Policy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>Terms &amp; Conditions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link>FAQ</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>

            <p className='footer-text pb-3 text-center'>2018 &copy; Tradeify. All Rights Reserved</p>
        </footer>
         
    )
}

export default Footer