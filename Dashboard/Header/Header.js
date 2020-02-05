import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Col, Nav, Dropdown, Image, Button, Table, ProgressBar, Modal, Form, Row, Tabs, Tab, Card } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faBell, faUser, faCalendar, faCheck, faLock, faGavel, faBullhorn, faAngleDoubleUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import Placeholder from '../../../Pictures/Placeholder.jpg'

import './Header.scss'


const Header = () => {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <Container as='section' className='wrapper'>
            <Navbar fixed='top' bg='primary' className='mb-3'>
                    <Col md={1} sm={12}>
                        <Navbar.Brand className='logo bg-primary'>
                            <FontAwesomeIcon icon={faBitcoin} color='white' />
                            BITBOT
                        </Navbar.Brand>
                    </Col>
                    <Col md={2} className='mx-2'>
                            <Nav>
                                <Nav.Item onClick={() => setShowModal(true)}>
                                    <Nav.Link>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                        Buy/Sell
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        
                    </Col>
                    <Col md={{span: '4', offset: '7'}} className='justify-content-end'>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className='dropdown dropdown-toggle'>
                                        <p><strong>
                                        <FontAwesomeIcon icon={faBitcoin} />
                                        Wallet
                                        </strong></p>
                                </Nav.Link>
                            </Nav.Item>
                            <Dropdown as={Nav.Item} alignRight>
                                <Dropdown.Toggle as={Nav.Link} className='dropdown dropdown-toggle'>
                                    <div>
                                        <p>
                                            <FontAwesomeIcon icon={faBell} />
                                            <span className='label label-danger'>1</span>
                                        </p>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Buy/Sell</th>
                                                <th>Progress</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Buy order SC</td>
                                                <td><ProgressBar striped size='xs' now={60} /></td>
                                                <td><FontAwesomeIcon icon={faCalendar} /> 29/01/2020</td>
                                                <td>60% filled</td>
                                            </tr>
                                            <tr>
                                                <td>Sell order SC</td>
                                                <td><ProgressBar striped size='xs' now={10} /></td>
                                                <td><FontAwesomeIcon icon={faCalendar} /> 29/01/2020</td>
                                                <td>10% in</td>
                                            </tr>
                                            <tr>
                                                <td>Buy order IOTA</td>
                                                <td><ProgressBar striped size='xs' now={30} /></td>
                                                <td><FontAwesomeIcon icon={faCalendar} /> 28/01/2020</td>
                                                <td>30% filled</td>
                                            </tr>
                                        </tbody>
                                        </Table>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>{' '}

                            <Dropdown as={Nav.Item} alignRight>
                                <Dropdown.Toggle as={Nav.Link} className='dropdown'>
                                    <div>
                                        <p>
                                            <FontAwesomeIcon icon={faUser} />
                                        </p>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as='button'>Profile</Dropdown.Item>
                                    <Dropdown.Item as='button'>Settings</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as='button'>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Col>
            </Navbar>

            <Modal size='lg' className='bg-dark' dialogClassName="modal-90w" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="sidebar">
                <Modal.Header className='text-center'>
                    <h2 className='text-center'><FontAwesomeIcon icon={faBitcoin} />BITBOT</h2>
                </Modal.Header>

                <Modal.Body>
                    <Nav className='flex-column'>
                        <Nav.Item>
                            <Nav.Link>
                                <div>
                                    <div style={{float: 'left', marginRight: '3px'}}>
                                        <Image src={Placeholder} 
                                        width='60'
                                        height='60'
                                        rounded />
                                    </div>
                                    <div>
                                        <p>James Franky</p> 
                                        <p><FontAwesomeIcon icon={faCheck} color='green' /> Verified</p>
                                        <div>
                                        <Button variant='primary' size='sm'>
                                            <FontAwesomeIcon icon={faLock} /> Logout
                                        </Button>
                                    </div>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link>
                                <Row>
                                    <Col md={12}>
                                        <Nav>
                                            <Tab.Container id="transaction-tab" defaultActiveKey="buy">
                                                <Row>
                                                    <Col sm={12}>
                                                        <Nav variant="tabs">
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="buy">
                                                                    <FontAwesomeIcon icon={faGavel} /> Buy
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="sell">
                                                                    <FontAwesomeIcon icon={faBullhorn} /> Sell
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="buy">
                                                                    <Card>
                                                                        <Card.Header>

                                                                        </Card.Header>
                                                                        <Card.Body>
                                                                            <Form.Row>
                                                                                <Col sm={4}>
                                                                                    <Button variant='secondary'>
                                                                                        <FontAwesomeIcon icon={faAngleDoubleUp} /> Max
                                                                                    </Button>
                                                                                </Col>
                                                                                <Col sm={8}>
                                                                                    <Form.Control type='text' placeholder='0.0000000' className='text-right' />
                                                                                </Col>
                                                                            </Form.Row>

                                                                            <Form.Row className='mt-5'>
                                                                                <Col sm={3}>
                                                                                    <Button variant='secondary'>
                                                                                        <Dropdown style={{backgroundColor: 'gray'}}>
                                                                                            <Dropdown.Toggle>
                                                                                                Price     
                                                                                            </Dropdown.Toggle>

                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item>Bid</Dropdown.Item>
                                                                                                <Dropdown.Item>Ask</Dropdown.Item>
                                                                                            </Dropdown.Menu>    
                                                                                        </Dropdown> 
                                                                                    </Button>
                                                                                </Col>
                                                                                <Col sm={7}>
                                                                                    <Form.Control type='text' placeholder='0.0000000' className='text-right' />
                                                                                </Col>
                                                                            </Form.Row>

                                                                            <Row className='mt-5'>
                                                                                <Col size={{span: '12'}}>
                                                                                    <Button>
                                                                                        <Dropdown style={{backgroundColor: 'blue'}}>
                                                                                            <Dropdown.Toggle>
                                                                                                Limit
                                                                                            </Dropdown.Toggle>

                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item>Limit</Dropdown.Item>
                                                                                                <Dropdown.Item>Conditional</Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </Button>
                                                                                </Col>

                                                                                <Col size={{span: '12'}}>
                                                                                    <Button variant='danger'>
                                                                                        <Dropdown style={{backgroundColor: 'red'}}>
                                                                                            <Dropdown.Toggle>
                                                                                                Good Till Cancelled
                                                                                            </Dropdown.Toggle>

                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item>Good Till Cancelled</Dropdown.Item>
                                                                                                <Dropdown.Item>Immediate or Cancel</Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </Button>
                                                                                </Col>
                                                                            </Row>

                                                                            <Form.Row className='mt-5'>
                                                                                <Col sm={2}>
                                                                                    <Button variant='info'>
                                                                                        <FontAwesomeIcon icon={faBitcoin} />
                                                                                    </Button>
                                                                                </Col>
                                                                                <Col sm={10}>
                                                                                    <Form.Control type='text' placeholder='0.0000000' className='text-right' />
                                                                                </Col>
                                                                            </Form.Row>

                                                                            <Form.Row className='mt-5'>
                                                                                <Col size={{span: '12'}}>
                                                                                    <Button>
                                                                                        <FontAwesomeIcon icon={faPlus} /> Buy Siacoin
                                                                                    </Button>
                                                                                </Col>
                                                                            </Form.Row>
                                                                        </Card.Body>
                                                                    </Card>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="sell">
                                                                    <Card>
                                                                        <Card.Header>

                                                                        </Card.Header>
                                                                        <Card.Body>
                                                                            <Form.Row>
                                                                                <Col sm={4}>
                                                                                    <Button variant='info'>
                                                                                        <FontAwesomeIcon icon={faAngleDoubleUp} /> Max
                                                                                    </Button>
                                                                                </Col>
                                                                                <Col sm={8}>
                                                                                    <Form.Control type='text' placeholder='0.0000000' className='text-right' />
                                                                                </Col>
                                                                            </Form.Row>

                                                                            <Form.Row className='mt-5'>
                                                                                <Col sm={3}>
                                                                                    <Button variant='secondary'>
                                                                                        <Dropdown style={{backgroundColor: 'gray'}}>
                                                                                            <Dropdown.Toggle>
                                                                                                Price     
                                                                                            </Dropdown.Toggle>

                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item>Bid</Dropdown.Item>
                                                                                                <Dropdown.Item>Ask</Dropdown.Item>
                                                                                            </Dropdown.Menu>    
                                                                                        </Dropdown> 
                                                                                    </Button>
                                                                                </Col>
                                                                                <Col sm={7}>
                                                                                    <Form.Control type='text' placeholder='0.0000000' className='text-right' />
                                                                                </Col>
                                                                            </Form.Row>

                                                                            <Row className='mt-5'>
                                                                                <Col size={{span: '12'}}>
                                                                                    <Button>
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle>
                                                                                                Limit
                                                                                            </Dropdown.Toggle>

                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item>Limit</Dropdown.Item>
                                                                                                <Dropdown.Item>Conditional</Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </Button>
                                                                                </Col>

                                                                                <Col size={{span: '12'}}>
                                                                                    <Button variant='danger'>
                                                                                        <Dropdown style={{backgroundColor: 'red'}}>
                                                                                            <Dropdown.Toggle>
                                                                                                Good Till Cancelled
                                                                                            </Dropdown.Toggle>

                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item>Good Till Cancelled</Dropdown.Item>
                                                                                                <Dropdown.Item>Immediate or Cancel</Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </Button>
                                                                                </Col>
                                                                            </Row>

                                                                            <Form.Row className='mt-5'>
                                                                                <Col sm={2}>
                                                                                    <Button variant='info'>
                                                                                        <FontAwesomeIcon icon={faBitcoin} />
                                                                                    </Button>
                                                                                </Col>
                                                                                <Col sm={10}>
                                                                                    <Form.Control type='text' placeholder='0.0000000' className='text-right' />
                                                                                </Col>
                                                                            </Form.Row>

                                                                            <Form.Row className='mt-5'>
                                                                                <Col size={{span: '12'}}>
                                                                                    <Button>
                                                                                        <FontAwesomeIcon icon={faMinus} /> Sell Siacoin
                                                                                    </Button>
                                                                                </Col>
                                                                            </Form.Row>
                                                                        </Card.Body>
                                                                    </Card>
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </Col>
                                                </Row>
                                            </Tab.Container>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Header