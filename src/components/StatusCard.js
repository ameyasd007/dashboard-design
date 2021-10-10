import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


export default function StatusCard(props) {
    const styles = props.getStyle();
    return (
        <Col>
            <Card style={styles.cardStyle}>
                <Card.Body>
                    <Row>
                        <Col md={10} style={styles.titleStyle}>{props.title}</Col>
                        <Col md={2} style={styles.iconStyle}>{props.icon()}</Col>
                    </Row>
                    <Row>
                        <div style={styles.countStyle}>{props.count}</div>
                    </Row>
                </Card.Body>
            </Card>
        </Col>

    )
}
