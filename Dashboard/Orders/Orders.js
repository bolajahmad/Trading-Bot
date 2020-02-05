import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Card, Collapse, Form, Pagination, Table, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCaretDown, faMinus, faStar, faTimes, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Orders.scss'


export const cardStyles = {
    color: 'black',
    backgroundColor: 'rgb(145, 165, 200)',
    fontSize: '2rem'
}

const Orders = (props) => {
    const [ bookOpen, setBookOpen ] = useState(true)
    const [ openOrder, setOpenOrder ] = useState(true)
    const [ openHistory, setOpenHistory ] = useState(true)
    const [ openOrderHistory, setOpenOrderHistory ] = useState(true)

    return (
        <Row>
           <Col sm={12}>
                <Card style={cardStyles}>
                    <Card.Title className='px-4 pt-3 pb-1'>
                        Orders Book
                        <Button variant='outline-success' style={{float: 'right'}}>
                            <span onClick={() => setBookOpen(!bookOpen)}>
                                <FontAwesomeIcon icon={faPlus} color='black' />
                            </span>
                        </Button>
                    </Card.Title>

                    <Collapse in={bookOpen}>
                        <Card>
                            <Card.Header>
                                <Card.Title  style={{float: 'right'}}>
                                    <Form>
                                        <Form.Control as="select">
                                            <option>Display Row...</option>
                                            <option>10</option>
                                            <option>25</option>
                                            <option selected>50</option>
                                            <option>100</option>
                                        </Form.Control>
                                    </Form>
                                </Card.Title>
                            </Card.Header>

                            <Card.Body style={{fontSize: '1rem'}}>
                                <Row>
                                    <Col md={6} sm={12}>
                                        <Table responsive striped hover className='mt-10'>
                                            <thead>
                                                <tr>
                                                    <th><FontAwesomeIcon icon={faCaretDown} /></th>
                                                    <th>Sum</th>
                                                    <th>Total</th>
                                                    <th>Size</th>
                                                    <th>Bid(BTC)</th>
                                                    <th><FontAwesomeIcon icon={faStar} /></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>0.0159</td>
                                                    <td>0.0159</td>
                                                    <td className='size'>5680.470830</td>
                                                    <td>0.000000280</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>0.0685</td>
                                                    <td>0.0514</td>
                                                    <td className='size'>18851.9156656</td>
                                                    <td>0.000000279</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>0.7073</td>
                                                    <td>0.6388</td>
                                                    <td className='size'>229789.14814763</td>
                                                    <td>0.000000278</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>0.7073</td>
                                                    <td>0.6388</td>
                                                    <td className='size'>229789.14814763</td>
                                                    <td>0.000000278</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>2.1508</td>
                                                    <td>1.4435</td>
                                                    <td className='size'>521104.97581152</td>
                                                    <td>0.000000277</td>
                                                    <td></td>
                                                </tr>

                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>5.7000</td>
                                                    <td>3.5492</td>
                                                    <td className='size'>1285951.32360851</td>
                                                    <td>0.000000276</td>
                                                    <td></td>
                                                </tr>
                                                
                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>8.6771</td>
                                                    <td>2.9771</td>
                                                    <td className='size'>1082345.98736551</td>
                                                    <td>0.000000276</td>
                                                    <td></td>
                                                </tr>
                                            
                                                
                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>11.6762</td>
                                                    <td>2.9991</td>
                                                    <td className='size'>1094562.64213653</td>
                                                    <td>0.000000274</td>
                                                    <td></td>
                                                </tr>
                                            
                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>20.2601</td>
                                                    <td>8.5492</td>
                                                    <td className='size'>3144290.86730851</td>
                                                    <td>0.000000273</td>
                                                    <td></td>
                                                </tr>

                                                
                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>21.2101</td>
                                                    <td>0.9551</td>
                                                    <td className='size'>0.000000272</td>
                                                    <td></td>
                                                </tr>

                                                
                                                <tr>
                                                    <td className='p-0'>
                                                        <Button variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                    <td className='sum'>23.1955</td>
                                                    <td>1.9803</td>
                                                    <td className='size'>730741.05599659</td>
                                                    <td>0.000000271</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td>217.564 BTC</td>
                                                    <td className='text-right'>169728986.764 SC</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Pagination style={{float: 'right'}}>
                                            <Pagination.First>First</Pagination.First>
                                            <Pagination.Prev>Previous</Pagination.Prev>
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Item>{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Next>Next</Pagination.Next>
                                            <Pagination.Last>Last</Pagination.Last>
                                        </Pagination>
                                    </Col>

                                    <Col md={6} sm={12}>
                                        <Table responsive striped hover className='mt-10'>
                                            <thead>
                                                <tr>
                                                    <th><FontAwesomeIcon icon={faStar} /></th>
                                                    <th>Ask (BTC)</th>
                                                    <th>Size (SC)</th>
                                                    <th>Total</th>
                                                    <th>Sum</th>
                                                    <th>
                                                        <FontAwesomeIcon icon={faCaretDown} />
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>0.00000281</td>
                                                    <td>360358.10101320</td>
                                                    <td>1.0126</td>
                                                    <td>1.0126</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.00000282</td>
                                                    <td>133643.37381191</td>
                                                    <td>0.3769</td>
                                                    <td>1.3895</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.000002813</td>
                                                    <td>623151.30997127</td>
                                                    <td>1.7635</td>
                                                    <td>3.1530</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.00000284</td>
                                                    <td>464417.50666583</td>
                                                    <td>1.3189</td>
                                                    <td>4.4719</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.00000286</td>
                                                    <td>646492.28404140</td>
                                                    <td>1.8490</td>
                                                    <td>10.6817</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.00000287</td>
                                                    <td>1295584.02927247</td>
                                                    <td>3.7183</td>
                                                    <td>14.4001</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.00000288</td>
                                                    <td>46174.75984452</td>
                                                    <td>1.3298</td>
                                                    <td>15.0564</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.00000289</td>
                                                    <td>801337.75276538</td>
                                                    <td>2.3152</td>
                                                    <td>18.0564</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td></td>
                                                    <td>0.00000290</td>
                                                    <td>2518276.6789261</td>
                                                    <td>7.3016</td>
                                                    <td>25.3484</td>
                                                    <td>
                                                        <Button  variant='primary' size='sm'>
                                                            <FontAwesomeIcon icon={faCaretDown} />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td>217.564 BTC</td>
                                                    <td className='text-right'>169728986.764 SC</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Pagination style={{float: 'right'}}>
                                            <Pagination.First>First</Pagination.First>
                                            <Pagination.Prev>Previous</Pagination.Prev>
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Item>{2}</Pagination.Item>
                                            <Pagination.Item>{3}</Pagination.Item>
                                            <Pagination.Next>Next</Pagination.Next>
                                            <Pagination.Last>Last</Pagination.Last>
                                        </Pagination>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Collapse>
                </Card>
           </Col>
        
            <Col sm={12}>
                <Card style={cardStyles}>
                    <Card.Title className='px-4 pt-3 pb-1'>
                        Open Orders
                        <Button variant='outline-success' style={{float: 'right'}} aria-controls='openOrder' onClick={() => setOpenOrder(!openOrder)}>
                            <span>
                                <FontAwesomeIcon icon={faPlus} color='black' />
                            </span>
                        </Button>
                    </Card.Title>

                    <Collapse in={openOrder}>
                        <Card id='openOrder' style={{fontSize: '1rem'}}>
                            <Table responsive bordered hover>
                                <thead>
                                    <tr>
                                        <th>
                                            <FontAwesomeIcon icon={faPlus} color='black' />
                                        </th>
                                        <th>Order Date</th>
                                        <th>Type</th>
                                        <th>Bid/Ask</th>
                                        <th>Units Filled SC</th>
                                        <th>Units Total SC</th>
                                        <th>ctual Rate</th>
                                        <th>Estimated Total BTC</th>
                                        <th>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </th>
                                    </tr>
                                </thead>
                            
                                <tbody>
                                    <tr>
                                        <td>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </td>
                                        <td>02/18/2020 05:36:12 PM</td>
                                        <td>Limit Sell</td>
                                        <td>0.00000305</td>
                                        <td>0.00000000</td>
                                        <td>26089.00161498</td>
                                        <td>0.00000000</td>
                                        <th>0.7937325</th>
                                        <td>
                                            <FontAwesomeIcon icon={faTimes} color='red' />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </td>
                                        <td>02/18/2020 05:36:12 PM</td>
                                        <td>Limit Buy</td>
                                        <td>0.00000300</td>
                                        <td>0.00000000</td>
                                        <td>27000.00161498</td>
                                        <td>0.00000000</td>
                                        <th>0.7937325</th>
                                        <td>
                                            <FontAwesomeIcon icon={faTimes} color='red' />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Footer>
                                <Row>
                                    <Col sm={3}>
                                        <Form>
                                            <Form.Group>
                                                <Form.Row>
                                                    <Col className='pr-0'>
                                                        <Form.Control type='text' placeholder='search' />   
                                                    </Col>
                                                    <Col className='pl-0'>
                                                        <Button variant='outline-secondary'>Search</Button>
                                                    </Col>
                                                </Form.Row>
                                            </Form.Group>
                                        </Form>
                                    </Col>

                                    <Col sm={{span: '3', offset: '6'}}>
                                        <Form.Row>
                                            <Col className='pr-0'>
                                                <Form.Control as="select">
                                                    <option>Bulk Option</option>
                                                    <option>Cancel All</option>
                                                </Form.Control>
                                            </Col>
                                            <Col className='pl-0'>
                                                <Button variant='outline-secondary'>
                                                    Apply
                                                </Button>
                                            </Col>
                                        </Form.Row>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Collapse>
                </Card>
            </Col>

            <Col sm={12}>
                <Card style={cardStyles}>
                    <Card.Title className='px-4 pt-3 pb-1'>
                        Market History
                        <Button variant='outline-success' style={{float: 'right'}} onClick={() => setOpenHistory(!openHistory)}>
                            <span>
                                <FontAwesomeIcon icon={faPlus} color='black' />
                            </span>
                        </Button>
                    </Card.Title>

                    <Collapse in={openHistory}>
                        <Card style={{fontSize: '1rem'}}>
                            <Table responsive bordered hover>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Buy/Sell</th>
                                        <th>Bid/Ask</th>
                                        <th>Total Units SC</th>
                                        <th>Total Cost SC</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>02/03/2020 00:00:00 AM</td>
                                        <td style={{color: 'green'}}>
                                            Buy <FontAwesomeIcon icon={faArrowUp} />
                                        </td>
                                        <td>0.00000276</td>
                                        <td>1627.72581489</td>
                                        <td>0.00449252</td>
                                    </tr>

                                    <tr>
                                        <td>02/03/2020 00:00:00 AM</td>
                                        <td style={{color: 'red'}}>
                                            Sell <FontAwesomeIcon icon={faArrowDown} />
                                        </td>
                                        <td>0.00000276</td>
                                        <td>2627.72581489</td>
                                        <td>0.00749252</td>
                                    </tr>

                                    <tr>
                                        <td>02/03/2020 00:00:00 AM</td>
                                        <td style={{color: 'red'}}>
                                            Sell <FontAwesomeIcon icon={faArrowDown} />
                                        </td>
                                        <td>0.00000276</td>
                                        <td>2627.72581489</td>
                                        <td>0.00749252</td>
                                    </tr>

                                    <tr>
                                        <td>02/03/2020 00:00:00 AM</td>
                                        <td style={{color: 'red'}}>
                                            Sell <FontAwesomeIcon icon={faArrowDown} />
                                        </td>
                                        <td>0.00000276</td>
                                        <td>2627.72581489</td>
                                        <td>0.00749252</td>
                                    </tr>

                                    <tr>
                                        <td>02/03/2020 00:00:00 AM</td>
                                        <td style={{color: 'red'}}>
                                            Sell <FontAwesomeIcon icon={faArrowDown} />
                                        </td>
                                        <td>0.00000276</td>
                                        <td>2627.72581489</td>
                                        <td>0.00749252</td>
                                    </tr>

                                    <tr>
                                        <td>02/03/2020 00:00:00 AM</td>
                                        <td style={{color: 'green'}}>
                                            Buy <FontAwesomeIcon icon={faArrowUp} />
                                        </td>
                                        <td>0.00000276</td>
                                        <td>1627.72581489</td>
                                        <td>0.00449252</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Pagination style={{float: 'right'}}>
                                <Pagination.First>First</Pagination.First>
                                <Pagination.Prev>Prev</Pagination.Prev>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Next>Next</Pagination.Next>
                                <Pagination.Last>Last</Pagination.Last>
                            </Pagination>
                        </Card>
                    </Collapse>
                </Card>
            </Col>

            <Col sm={12}>
                <Card style={cardStyles}>
                    <Card.Title className='px-4 pt-3 pb-1'>
                        My Order History
                        <Button variant='outline-success' style={{float: 'right'}} onClick={() => setOpenOrderHistory(!openOrderHistory)}>
                            <span>
                                <FontAwesomeIcon icon={faPlus} color='black' />
                            </span>
                        </Button>
                    </Card.Title>

                    <Collapse in={openOrderHistory}>
                        <Card style={{fontSize: '1rem'}}>
                            <Table responsive nordered hover>
                                <thead>
                                    <tr>
                                        <th>Closed Date</th>
                                        <th>Opened Date</th>
                                        <th>Type</th>
                                        <th>Bid/Ask</th>
                                        <th>Units Filled SC</th>
                                        <th>Units Total SC</th>
                                        <th>Actual Rate</th>
                                        <th>Cost/Proceeds</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>01/02/2020 00:30:59 AM</td>
                                        <td>03/29/2020 06:27:08 PM</td>
                                        <td>Limit Sell</td>
                                        <td>0.000000384</td>
                                        <td>35953.89501313</td>
                                        <td>35953.89501313</td>
                                        <td>0.0000000383</td>
                                        <td>0.09941380</td>
                                    </tr>

                                    <tr>
                                        <td>01/02/2020 00:30:59 AM</td>
                                        <td>03/29/2020 06:27:08 PM</td>
                                        <td>Limit Sell</td>
                                        <td>0.000000384</td>
                                        <td>35953.89501313</td>
                                        <td>35953.89501313</td>
                                        <td>0.0000000383</td>
                                        <td>0.09941380</td>
                                    </tr>

                                    <tr>
                                        <td>01/02/2020 00:30:59 AM</td>
                                        <td>03/29/2020 06:27:08 PM</td>
                                        <td>Limit Sell</td>
                                        <td>0.000000384</td>
                                        <td>35953.89501313</td>
                                        <td>35953.89501313</td>
                                        <td>0.0000000383</td>
                                        <td>0.09941380</td>
                                    </tr>

                                    <tr>
                                        <td>01/02/2020 00:30:59 AM</td>
                                        <td>03/29/2020 06:27:08 PM</td>
                                        <td>Limit Sell</td>
                                        <td>0.000000384</td>
                                        <td>35953.89501313</td>
                                        <td>35953.89501313</td>
                                        <td>0.0000000383</td>
                                        <td>0.09941380</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Pagination style={{float: 'right'}}>
                                <Pagination.First>First</Pagination.First>
                                <Pagination.Prev>Prev</Pagination.Prev>
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Next>Next</Pagination.Next>
                                <Pagination.Last>Last</Pagination.Last>
                            </Pagination>
                        </Card>
                    </Collapse>
                </Card>
            </Col>
        </Row>
    )
}

export default Orders