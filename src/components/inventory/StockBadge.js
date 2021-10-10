import React from 'react'
import Badge from './Badge'

export default function StockBadge({ data }) {
    const style = {
        color: "#811434",
        backgroundColor: "#FFF2EE",
    }
    return (
        <Badge data={data} {...style}></Badge>
    )
}
