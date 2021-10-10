import React from 'react'
import { Col, Row } from 'react-bootstrap'
import RatingBadge from './RatingBadge'
import StockBadge from './StockBadge'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'

const styles = {
    expandedRow: {
        border: "solid #ECF1F4"
    },
    productName: {
        fontWeight: 600,
        fontSize: "14px",
        color: "#262730",
    },
    viewWine: {
        textDecoration: "underline",
        color: "#EF4859"
    },
    region: {
        fontSize: "14px",
        color: "#8C8CA1",
        marginRight: "30px"
    },
    rating: {
        fontWeight: "bold",
        fontSize: "14px",
        color: "#8C8CA1"
    },
    names: {
        fontWeight: 600,
        fontSize: "14px",
    }
}

export default function ExpandedGridRow(props) {
    return (
        <tr>
            <td colSpan="9" style={styles.expandedRow}>
                <Row>
                    <Col md={8} style={styles.productName}>{props.product}</Col>
                    <Col md={2} style={styles.viewWine}>View wine</Col>
                    <Col md={1}><FaRegEdit /></Col>
                    <Col md={1}><RiDeleteBinLine /></Col>
                </Row>
                <div >
                    <span style={styles.productName}>Region: {' '}</span>
                    <span style={styles.region}>{props.region}</span>
                    <span style={styles.productName}>Vintage: {' '}</span>
                    <span style={styles.region}>{props.vintage}</span>
                </div>
                <hr />
                <Row>
                    <Col >
                        <p style={styles.rating}>Rating</p>
                        <Row>
                            {
                                Object.keys(props.rating).map(key => {
                                    return (
                                        <Col md={5}>
                                            <div style={styles.names}>{key}</div>
                                            <div>
                                                <RatingBadge data={props.rating[key]} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                    <Col >
                        <p style={styles.rating}>Stocks</p>
                        <Row>
                            {
                                Object.keys(props.stocks).map(key => {
                                    return (
                                        <Col md={6}>
                                            <div style={styles.names}>{key}</div>
                                            <StockBadge data={props.stocks[key] + " units"} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </td>
        </tr >
    )
}
