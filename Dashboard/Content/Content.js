import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Media, Card, Collapse, Form, Table, Pagination, ListGroup } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLevelUpAlt, faLevelDownAlt, faSyncAlt, faMoneyBill, faArrowAltCircleUp, faPlus, faGavel, faBullhorn, faArrowUp, faArrowAltCircleDown, faArrowDown, } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'

import Orders from '../Orders/Orders'
/* import Chart from '../Chart/Chart' */

import './Content.scss'

export const cardStyles = {
    color: 'black',
    backgroundColor: 'rgb(145, 165, 200)',
    fontSize: '2rem'
}

const Content = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
    <Container as='section' id='content' fluid>
        <Container as='section' className='main-content'>
            <h3>Dashboard</h3>
            <Button variant='primary' className='pullRight'>
                <span className='mx-2'><FontAwesomeIcon icon={faDollarSign} color='white' /></span>
                Go To Wallet    
            </Button>

            <Row>
                <Col md={9} sm={12}>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <Card bg='primary'>
                                <Card.Body variant='flush'>
                                    <Row>
                                        <Col xs={12}>
                                            <p className='mb-0'>
                                                $759,781,417.92
                                                <FontAwesomeIcon icon={faLevelUpAlt} color='white' />
                                            </p>
                                            <h4 className='m-0'>Market Cap</h4>
                                            <span className='f-left mt-10'>
                                                <FontAwesomeIcon icon={faDollarSign} color='white' />
                                                Total Market Capital
                                            </span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <Card bg='warning'>
                                <Card.Body variant='flush'>
                                    <Row>
                                        <Col xs={12}>
                                            <p className='mb-0'>
                                                $1,947,201.24
                                                <FontAwesomeIcon icon={faLevelDownAlt} color='white' />
                                            </p>
                                            <h4 className='m-0'>Trade Volume</h4>
                                            <span className='f-left mt-10'>
                                                <FontAwesomeIcon icon={faDollarSign} color='white' />
                                                24h Trade Volume
                                            </span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <Card bg='danger'>
                                <Card.Body variant='flush'>
                                    <Row>
                                        <Col xs={12}>
                                            <p className='mb-0'>
                                                32.4 Billions 
                                                <FontAwesomeIcon icon={ faSyncAlt } color='white' />
                                            </p>
                                            <h4 className='m-0'>Circ Supply</h4>
                                            <span className='f-left mt-10'>
                                                <FontAwesomeIcon icon={faSyncAlt} color='white' />
                                                Circulating Supply
                                            </span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <Card bg='success'>
                                <Card.Body variant='flush'>
                                    <Row>
                                        <Col xs={12}>
                                            <p className='mb-0'>
                                                40 Billions
                                                <FontAwesomeIcon icon={faMoneyBill} color='white' />
                                            </p>
                                            <h4 className='m-0'>Total Supply</h4>
                                            <span className='f-left mt-10'>
                                                <FontAwesomeIcon icon={faMoneyBill} color='white' />
                                                Total Supply
                                            </span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card style={cardStyles}>
                                <Card.Header style={{color: 'black', fontSize: '1rem'}}>
                                    All Markets
                                    <p style={{float: 'right'}}>
                                        <Button variant='outline-success' className='mx-2 mt-1'>
                                            <span onClick={() => setIsOpen(!isOpen)} aria-controls='markets' aria-expanded='true'>
                                                <FontAwesomeIcon icon={faPlus} color='black' />
                                            </span>
                                        </Button>
                                    </p>
                                </Card.Header>

                                    <Collapse in={isOpen} style={{color: 'black', fontSize: '1rem'}}>
                                            <Card>
                                                <Card.Header>
                                                    All Markets | All Available Markets
                                                </Card.Header>
                                                
                                                <Card.Body>
                                                    <Form>
                                                        <Form.Row className='mb-3'>
                                                        <Col sm={3}>
                                                            <Form.Control as="select">
                                                                <option>5</option>
                                                                <option>10</option>
                                                                <option>25</option>
                                                                <option selected>50</option>
                                                                <option>100</option>
                                                            </Form.Control>
                                                        </Col>

                                                        <Col sm={{span: '3', offset: '6'}}>
                                                            <Form.Control type="search" />
                                                        </Col>
                                                        </Form.Row>

                                                        <Table striped hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Coin</th>
                                                                    <th>Price</th>
                                                                    <th>Vol</th>
                                                                    <th>CHG</th>
                                                                    <th>Name</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="BCH" type='radio' id='bch' />
                                                                    </td>
                                                                    <td>0.162990001</td>
                                                                    <td>2967.720</td>
                                                                    <td>+17.84</td>
                                                                    <td>Bitcoin Cash</td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="DGB" type='radio' id='dgb' />
                                                                    </td>
                                                                    <td>0.00000402</td>
                                                                    <td>90.224</td>
                                                                    <td>+0.00</td>
                                                                    <td>Digibyte</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="DOGE" type='radio' id='doge' />
                                                                    </td>
                                                                    <td>0.00000055</td>
                                                                    <td>169.631</td>
                                                                    <td>-1.79</td>
                                                                    <td>Dogecoin</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="ETH" type='radio' id='eth' />
                                                                    </td>
                                                                    <td>0.10039995</td>
                                                                    <td>2887.720</td>
                                                                    <td>+1.35</td>
                                                                    <td>Ethereum</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="LTC" type='radio' id='ltc' />
                                                                    </td>
                                                                    <td>0.01790003</td>
                                                                    <td>1115.235</td>
                                                                    <td>+1.58</td>
                                                                    <td>Litecoin</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="NXT" type='radio' id='nxt' />
                                                                    </td>
                                                                    <td>0.00002241</td>
                                                                    <td>100.305</td>
                                                                    <td>+2.56</td>
                                                                    <td>NXT</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="XRP" type='radio' id='xrp' />
                                                                    </td>
                                                                    <td>0.00009485</td>
                                                                    <td>1633.576</td>
                                                                    <td>+5.10</td>
                                                                    <td>Ripple</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="SC" type='radio' id='sc' />
                                                                    </td>
                                                                    <td>0.00000272</td>
                                                                    <td>131.014</td>
                                                                    <td>+1.87</td>
                                                                    <td>Siacoin</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <Form.Check inline label="STR" type='radio' id='str' />
                                                                    </td>
                                                                    <td>0.00004322</td>
                                                                    <td>1196.608</td>
                                                                    <td>+0.05</td>
                                                                    <td>Stellar</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </Form>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Row>
                                                        <Col sm={6}>
                                                            <Card.Text>Showing 1 to 9 of 9 entries</Card.Text>
                                                        </Col>
                                                        <Col sm={{span: '4', offset: '2'}}>
                                                            <Pagination>
                                                                <Pagination.Prev>Previous</Pagination.Prev>
                                                                <Pagination.Item>1</Pagination.Item>
                                                                <Pagination.Next>Next</Pagination.Next>
                                                            </Pagination>
                                                        </Col>
                                                    </Row>
                                                </Card.Footer>
                                            </Card>
                                    </Collapse>
                            </Card>
                        </Col>
                    </Row>

                    {/* <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <h4>BTC-SC</h4>
                                    
                                    <Chart />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}
                
                    <Row>
                        <Col md={6}>
                            <Card className='bg-dark'>
                                <Card.Body>
                                    <Card.Text className='text-right text-danger'>
                                        <FontAwesomeIcon icon={faGavel} size='2x' />
                                    </Card.Text>
                                    <Card.Text as='h3' className='mt-0'>
                                        Bid Price
                                    </Card.Text>
                                    <Card.Text as='p' className='text-danger'>
                                        <FontAwesomeIcon icon={faMoneyBill} /> <FontAwesomeIcon icon={faDollarSign} />0.02
                                    </Card.Text>
                                    <Card.Text as='p'>
                                        <FontAwesomeIcon icon={faBitcoin} /> 0.0000000286
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className='bg-dark'>
                                <Card.Body>
                                    <Card.Text className='text-right text-success'>
                                        <FontAwesomeIcon icon={faBullhorn} size='2x' />
                                    </Card.Text>
                                    <Card.Text as='h3' className='mt-0'>
                                        Ask Price
                                    </Card.Text>
                                    <Card.Text as='p' className='text-success'>
                                        <FontAwesomeIcon icon={faMoneyBill} /> <FontAwesomeIcon icon={faDollarSign} />0.02
                                    </Card.Text>
                                    <Card.Text as='p'>
                                        <FontAwesomeIcon icon={faBitcoin} /> 0.0000000286
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} md={12}>
                    <Card bg='secondary'>
                        <Card.Header>
                            <Card.Title>Coin Status</Card.Title>
                        </Card.Header>

                        <ListGroup flush style={{fontSize: '1.3em'}}>
                            <ListGroup.Item>
                                <Media>
                                    <h4 style={{float: 'left'}} className='pr-2'>
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} color='blue' />
                                    </h4>
                                    <Media.Body style={{clear: 'both', color: 'black'}}>
                                        <strong>Last Price</strong>
                                        <p className='m-0'>
                                            <small style={{color: 'green'}}>
                                                $0.02
                                                <FontAwesomeIcon icon={faMoneyBill} />    
                                            </small>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faBitcoin} />
                                            0.00000286
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Media>
                                    <h4 style={{float: 'left'}} className='pr-2'>
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} color='blue' />
                                    </h4>
                                    <Media.Body style={{clear: 'both', color: 'black'}}>
                                        <strong>24Hr Change</strong>
                                        <p className='m-0'>
                                            <small style={{color: 'green'}}>
                                                +1.35%
                                            </small>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPlus} />
                                            Gainer<FontAwesomeIcon icon={faArrowUp} />
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Media>
                                    <h4 style={{float: 'left'}} className='pr-2'>
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} color='blue' />
                                    </h4>
                                    <Media.Body style={{clear: 'both', color: 'black'}}>
                                        <strong>24Hr Low</strong>
                                        <p className='m-0'>
                                            <small style={{color: 'red'}}>
                                                $0.02
                                            </small>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faBitcoin} />
                                            0.0000026 <FontAwesomeIcon icon={faArrowDown} />
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Media>
                                    <h4 style={{float: 'left'}} className='pr-2'>
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} color='blue' />
                                    </h4>
                                    <Media.Body style={{clear: 'both', color: 'black'}}>
                                        <strong>24Hr High</strong>
                                        <p className='m-0'>
                                            <small style={{color: 'green'}}>
                                                $0.02    
                                            </small>
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faBitcoin} />
                                            0.00000286 <FontAwesomeIcon icon={faArrowUp} />
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className='bg-dark'>
                        <Card.Header>
                            <Card.Title>Upcoming News</Card.Title>
                            <Card.Subtitle className='pullRight' style={{top: '40%'}}>
                                <FontAwesomeIcon icon={faBullhorn} />
                            </Card.Subtitle>
                        </Card.Header>

                        <ListGroup flush>
                            <ListGroup.Item action href='#'>
                                <Media>
                                    <Media.Body>
                                        <h3>
                                            James
                                            <small className='pullRight' style={{top: '17%'}}>24h</small>
                                        </h3>
                                        <p>
                                            <small>
                                                Posted by devthuts@gmail
                                            </small>
                                        </p>
                                        <p className='mb-sm'>
                                            <small>We are adding iota coins read full notice example.com/adding-iota</small>
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ListGroup.Item>

                            <ListGroup.Item action href='#'>
                                <Media>
                                    <Media.Body>
                                        <h3>
                                            Tout-Saint
                                            <small className='pullRight' style={{top: '17%'}}>17h</small>
                                        </h3>
                                        <p>
                                            <small>
                                                Posted by saintall@gmail
                                            </small>
                                        </p>
                                        <p className='mb-sm'>
                                            <small>We have scheduled update for BTC on 30/04/2018 example.com/btc-update</small>
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ListGroup.Item>

                            <ListGroup.Item action href='#'>
                                <Media>
                                    <Media.Body>
                                        <h3>
                                            Luffy
                                            <small className='pullRight' style={{top: '17%'}}>8h</small>
                                        </h3>
                                        <p>
                                            <small>
                                                Posted by one-piece@hotmail
                                            </small>
                                        </p>
                                        <p className='mb-sm'>
                                            <small>Vote for your favorite coin to be added example.com/vote-coin</small>
                                        </p>
                                    </Media.Body>
                                </Media>
                            </ListGroup.Item>
                        </ListGroup>

                        <Card.Footer>
                            <Link to='/'>
                                <small style={{float: 'left'}}>Read All</small>
                            </Link>
                            <Link to='/'>
                                <small style={{float: 'right'}}>Dismiss All</small>
                            </Link>
                        </Card.Footer>

                        <Card.Footer>
                            <p>Upcoming News</p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Orders />
        </Container>
    </Container>
    )
}

export default Content