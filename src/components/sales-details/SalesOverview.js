import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { HiOutlineRefresh } from 'react-icons/hi'

const styles = {
    title: {
        fontWeight: 600,
        fontSize: "16px",
        color: "#262730",
    },
    date: {
        fontWeight: 600,
        fontSize: "14px",
        color: "#868686",
    }
}

export default function SalesOverview() {
    return (
        <>
            <Row>
                <Col md={3} style={styles.title}>Total Sales overview</Col>
                <Col md={9} >
                    <div className="float-end">
                        <HiOutlineRefresh />
                        Refresh Metrics
                    </div>
                </Col>
            </Row>
            <Row >
                <div style={styles.date}>7-13 Aug,2020</div>
            </Row>
            <hr style={{ color: "#FFF2EE" }} />
        </>
    )
}
