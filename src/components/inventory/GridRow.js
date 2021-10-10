import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import RatingBadge from './RatingBadge'

const styles = {
    productName: {
        fontWeight: 600,
        fontSize: "16px",
        textOverflow: "ellipsis",
        width: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    region: {
        fontSize: "14px",
        color: "#8C8CA1",
    },
    vintage: {
        fontWeight: 600,
        fontSize: "14px",
        color: "#8C8CA1"
    },
    price: {
        fontWeight: 600,
        fontSize: "14px",
        color: "#262730"
    }
}

export default function GridRow(props) {
    return (
        <tr key={props.id}>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <div style={{ display: "flex" }}>
                    <img height="60px" alt={props.product} src={props.img} />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                        <div style={styles.productName}>{props.product}</div>
                        <div style={styles.region}>{props.region}</div>
                    </div>
                </div>
            </td>
            <td>
                {props.avgRating.split(',')
                    .map((rating, i) => <> <RatingBadge data={rating} />{' '}</>)}
            </td>
            <td style={styles.vintage}> {props.vintage} </td>
            <td style={styles.vintage}> {props.qty} </td>
            <td style={styles.vintage}> {props.volume} </td>
            <td style={styles.vintage}> {props.cost} </td>
            <td style={styles.price}> {props.price} </td>
            <td>
                <div onClick={event => props.handleExpandRow(event, props.id)}>
                    {props.expandState[props.id] ? <BsChevronUp /> : <BsChevronDown />}
                </div>
            </td>
        </tr>

    )
}
