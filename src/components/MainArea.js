import React from 'react'
import { Container } from 'react-bootstrap'
import Inventory from './Inventory'
import Overview from './Overview'
import SalesDetail from './SalesDetail'

export default function MainArea() {
    return (
        <main >
            <Container>
                <Overview />
                <SalesDetail></SalesDetail>
                <Inventory></Inventory>
            </Container>
        </main>
    )
}
