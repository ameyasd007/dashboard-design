import React from 'react'
import Badge from './Badge'

export default function RatingBadge({ data }) {
    const style = {
        color: "#485572",
        backgroundColor: "#F4F7FF",
    }
    return (
        <Badge data={data} {...style}></Badge>
    )
}
