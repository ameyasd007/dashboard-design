import React from 'react'
import { Container } from 'react-bootstrap'
import Inventory from './inventory/Inventory'
import Overview from './overview/Overview'
import SalesDetails from './SalesDetails'

export default function MainArea() {
    return (
        <main >
            <Container>
                <Overview />
                <SalesDetails></SalesDetails>
                <Inventory ></Inventory>
            </Container>
        </main>
    )
}
