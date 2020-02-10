import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import AboutCards from '../AboutCards/AboutCards'

import './About.scss'

const About = () => {
    return (
        <Router>
            <Container as='section' id='about' className='about-container text-center' fluid>
                <Container className='p-3 pt-5'>
                    <Row>
                        <Col sm={12}>
                            <div className='about-heading text-center'>
                                <p>
                                    <FontAwesomeIcon icon={faChartBar} color='blue' />
                                    WHAT WE DO
                                </p>
                                <h2>TRADE CONFIDENTLY</h2>
                            </div>
                        </Col>
                
                        <Col lg={{span: '8', offset: '2'}}>
                            <hr className='light' />
                            <p className='text-faded'> We provide individuals and businesses a world class experience to buy and sell cutting-edge cryptocurrencies and digital tokens. Crypto is the go-to spot for traders who demand lightning fast trade execution, stable wallets, and industry-best security practices. Whether you are new to trading and cryptocurrencies, or a veteran to both, It was created for you!</p>
                            <Row className='text-center justify-content-center'>
                                <Link to='/dashboard'>
                                    <Button variant='primary' className="m-0">
                                        Get Started
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                    </Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <AboutCards />
        </Router>
    )
}

export default About