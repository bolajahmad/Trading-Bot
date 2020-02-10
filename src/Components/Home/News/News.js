import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { BrowserRouter as Router, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

import './News.scss'

const News = () => {
    return (
        <Router>
            <Container as='section' id='crypto' fluid>
                <Container className='d-block'>
                    <Row>
                        <Col sm={12}>
                            <div className='news-heading text-center'>
                                <p>
                                    <FontAwesomeIcon icon={faBullhorn} />
                                    FROM OUR BLOG
                                </p>

                                <h2>NEWS &amp; STORIES</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <div className='news-box'>
                                <div className='news-box-content'>
                                    <h4 className='news-box-heading'>
                                        <Link to='/#crypto'>
                                            Architecto beatae vitae dicta sunt explicabo    
                                        </Link>      
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.    
                                    </p>    
                                </div>

                                <div className='news-box-footer'>
                                    <Link to='/#crypto'>
                                        <Button variant='primary'>
                                            Read More
                                            <span className='lavel-warning'>26 Jan 2020</span>
                                        </Button>
                                    </Link>
                                </div>    
                            </div>  
                        </Col>

                        <Col sm={4}>
                            <div className='news-box'>
                                <div className='news-box-content'>
                                    <h4 className='news-box-heading'>
                                        <Link to='/#crypto'>
                                            Architecto beatae vitae dicta sunt explicabo    
                                        </Link>      
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.    
                                    </p>    
                                </div>

                                <div className='news-box-footer'>
                                    <Link to='/#crypto'>
                                        <Button variant='primary'>
                                            Read More
                                            <span className='lavel-warning'>26 Jan 2020</span>
                                        </Button>
                                    </Link>
                                </div>    
                            </div>  
                        </Col>

                        <Col sm={4}>
                            <div className='news-box'>
                                <div className='news-box-content'>
                                    <h4 className='news-box-heading'>
                                        <Link to='/#crypto'>
                                            Architecto beatae vitae dicta sunt explicabo    
                                        </Link>      
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel sapien et lacus tempus varius. In finibus lorem vel.    
                                    </p>    
                                </div>

                                <div className='news-box-footer'>
                                    <Link to='/#crypto'>
                                        <Button variant='primary'>
                                            Read More
                                            <span className='lavel-warning'>26 Jan 2020</span>
                                        </Button>
                                    </Link>
                                </div>    
                            </div>  
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Router>
    )
}

export default News