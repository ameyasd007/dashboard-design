import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RevenueChart from './RevenueChart'
import SalesOverview from './SalesOverview'
import { BiTrendingUp } from 'react-icons/bi'
import { FaChartLine } from 'react-icons/fa'

const styles = {
    salesDetails: {
        border: "solid #FFF2EE",
        borderRadius: "3px",
        padding: "10px"
    },
    title: {
        color: "#262730",
        fontWeight: "bold",
        fontSize: "16px",
    },
    totalAmount: {
        color: "#262730",
        fontWeight: 600,
        fontSize: "48px",
    },
    lastWeek: {
        fontWeight: "600",
        fontSize: "16px",
        color: "#2FCA72",
    },
    green: {
        color: "#2FCA72"
    },
    totalProfit: {
        fontWeight: "bold",
        fontSize: "16px",
        color: "#8C8CA1"
    },
    totalSold: {
        fontWeight: "bold",
        fontSize: "32px",
    },
    totalProfitAmount: {
        fontWeight: "bold",
        fontSize: "32px",
        color: "#811434"
    }
}


export default function SalesDetails() {
    return (
        <div style={{ margin: "20px 0px", }}>
            <div style={styles.title}>Sales Details</div>
            <div style={styles.salesDetails}>
                <SalesOverview />
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col style={styles.totalAmount}>$74,729.00</Col>
                            <Col>
                                <p style={{ marginTop: "30px" }}>
                                    <FaChartLine style={styles.green} />
                                    Highest revenue since 2 weeks ago
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <p style={styles.lastWeek}>
                                <BiTrendingUp style={styles.green} />
                                +21% from last week
                            </p>
                        </Row>
                        <Row>
                            <RevenueChart></RevenueChart>
                        </Row>
                    </Col>
                    <Col md={4} style={{ borderLeft: "solid #FFF2EE" }}>
                        <div style={{ padding: "10px" }}>
                            <Row style={styles.totalProfit}>
                                Total Profit
                            </Row>
                            <Row style={styles.totalProfitAmount}>
                                $12,545.00
                            </Row>
                            <Row>
                                <p style={{ ...styles.lastWeek, paddingLeft: "0px" }}>
                                    <BiTrendingUp style={styles.green} />
                                    +23% from last week
                                </p>
                            </Row>
                            <Row style={styles.totalProfit}>
                                Total Products Sold
                            </Row>
                            <Row style={styles.totalSold}>
                                329
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

        </div >
    )
}
