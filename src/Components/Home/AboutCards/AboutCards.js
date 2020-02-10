import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'
import { faLock, faUsers, faQuestion } from '@fortawesome/free-solid-svg-icons'

import './AboutCards.scss'

const AboutCards = () => {
    return (
            <Container as='section' className='card-container' fluid>
                <Container className='py-4'>
                    <Row>
                        <Col xs={12} sm={6} md={3} className='text-center my-2'>
                            <FontAwesomeIcon icon={faMoneyBillAlt} className='card-icon' size='3x' color='blue' />
                            <h3 className='title'>Low Fee</h3>
                            <p>
                                Our low maker fee and taker fee makes us one of the most competitive exchanges on the market
                            </p>
                        </Col>

                        <Col xs={12} sm={6} md={3} className='text-center my-2'>
                            <FontAwesomeIcon icon={faLock} className='card-icon' size='3x' color='blue' />                            <h3 className='title'>Security</h3>
                            <p>
                                The vast majority of digital assets are stored securely in offline storage
                            </p>
                        </Col>

                        <Col xs={12} sm={6} md={3} className='text-center my-2'>
                            <FontAwesomeIcon icon={faUsers} className='card-icon' size='3x' color='blue' />
                            <p>
                                Our experienced team helps us build the best product and deliver first class service to our clients
                            </p>
                        </Col>

                        <Col xs={12} sm={6} md={3} className='text-center my-2'>
                            <FontAwesomeIcon icon={faQuestion} className='card-icon' size='3x' color='blue' />
                            <p>
                                Our support team allows us to keep in touch with customers in all time zones and regions at all times
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
    )
}

export default AboutCards