import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import StatusCard from './StatusCard'
import { BsBasket2 } from 'react-icons/bs'
import { RiTruckLine } from 'react-icons/ri'
import { FcShipped } from 'react-icons/fc'
import { MdOutlineCancel } from 'react-icons/md'
import { IoIosAddCircleOutline } from 'react-icons/io'


const styles = {
    title: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#8C8CA1",
    },
    topRow: {
        padding: "10px 0px",
    },
    addButton: {
        backgroundColor: "#EF4859",
        borderColor: "#EF4859"
    },
    addButtonIcon: {
        color: "#FFFFFF",
        marginBottom: "4px"
    }
}

const createStatusCardStyle = (color) => ({
    cardStyle: {
        borderTop: `solid ${color}`
    },
    titleStyle: {
        fontSize: "16px",
        color: "#8C8CA1",
    },
    iconStyle: {
        color: color,
    },
    countStyle: {
        fontWeight: "bold",
        fontSize: "24px",
    }
})

const statusCards = [
    {
        title: "Open orders",
        count: 239,
        icon: () => <BsBasket2 />,
        color: "#FFAA2C",
        getStyle: function () {
            return createStatusCardStyle(this.color)
        }
    },
    {
        title: "Orders in transit",
        count: 126,
        icon: () => <RiTruckLine />,
        color: "#2C67FF",
        getStyle: function () {
            return createStatusCardStyle(this.color)
        }
    },
    {
        title: "Fulfilled orders",
        count: "1,254",
        icon: () => <FcShipped />,
        color: "#00CF3A",
        getStyle: function () {
            return createStatusCardStyle(this.color)
        }
    },
    {
        title: "Cancelled orders",
        count: 35,
        icon: () => <MdOutlineCancel />,
        color: "#FF1C1C",
        getStyle: function () {
            return createStatusCardStyle(this.color)
        }
    }

]

export default function Overview() {

    return (
        <>
            <Row style={styles.topRow}>
                <Col md={8} style={styles.title}>Overview</Col>
                <Col md={4}>
                    <Button style={styles.addButton} className="float-end">
                        <IoIosAddCircleOutline style={styles.addButtonIcon} />{'  '}
                        Add New Wine
                    </Button>
                </Col>
            </Row>
            <Row>
                {statusCards.map((card, i) => <StatusCard key={i} {...card} />)}
            </Row>
        </>
    )
}
