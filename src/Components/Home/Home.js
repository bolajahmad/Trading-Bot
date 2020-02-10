import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

import Header from './Header/Header'
import About from './About/About'
import Currencies from './Currencies/Currencies'
import News from './News/News'
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <Container fluid>
            <Header />
            <About />
            <Currencies />
            <News />
            <Footer />
        </Container>
    )
}

export default Home