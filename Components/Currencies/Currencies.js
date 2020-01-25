import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image } from 'react-bootstrap'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'

import Ark from '../../Pictures/Ark.png'
import Augur from '../../Pictures/Augur.png'
import Bitcoin from '../../Pictures/Bitcoin.jpg'
import Cardano from '../../Pictures/Cardano.png'
import Eos from '../../Pictures/Eos.png'
import Ethereum from '../../Pictures/Ethereum.png'
import Litecoin from '../../Pictures/Litecoin.png'
import Nem from '../../Pictures/Nem.png'
import Qtum from '../../Pictures/Qtum.jpg'
import Siacoin from '../../Pictures/Siacoin.png'
import Tron from '../../Pictures/Tron.png'


import './Currencies.scss'

const Currencies = () => {
    const coins = [ 
        { currency: 'Cardano', logo: Cardano }, 
        { currency: 'Ark', logo: Ark }, 
        { currency: 'Tron', logo: Tron },
        { currency: 'Eos', logo: Eos },
        { currency: 'Qtum', logo: Qtum },
        { currency: 'Bitcoin', logo: Bitcoin },
        { currency: 'Ethereum', logo: Ethereum },
        { currency: 'Litecoin', logo: Litecoin },
        { currency: 'Siacoin', logo: Siacoin },
        { currency: 'Nem', logo: Nem },
        { currency: 'Augur', logo: Augur }    
    ]

    return (
        <Router>
            <Container as='section' id='currencies' fluid>
                <Container>
                    <Row className='text-center'>
                        <Col sm={12}>
                            <div className='currency-heading'>
                                <p>
                                    <FontAwesomeIcon icon={faMoneyBillAlt} color='blue' />
                                    AVAIBLE CURRENCIES TO TRADE
                                </p>
                                <h2>AVAILABLE CURRENCIES</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row> 
                            {
                            coins.map((coin, index) => {
                                return (
                                    <Col xs={3} sm={2} lg={1} key={index} className='currency text-center'>
                                        <Link to='/market'>
                                            <Image 
                                            src={coin.logo}
                                            alt={coin.currency}
                                            style={{height: '50px', width: '50px'}}
                                            />
                                        </Link>
                                        <p className='text-center'>
                                            <span className='label-primary'>{coin.currency}</span>
                                            <span className='label-warning'>New</span>
                                        </p>
                                    </Col>
                                )
                            })
                            }
                    </Row>
                </Container>
            </Container>
        </Router>
    )
}

export default Currencies