import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

import Header from './Header/Header'
import Content from './Content/Content'
import Footer from '../Home/Footer/Footer'

import './Dashboard.scss'


const Dashboard = () => {
    return (
        <Container id='dashboard' fluid>
            <Header />
            <Content />
        </Container>
    )
}

export default Dashboard