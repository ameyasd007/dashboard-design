import React from 'react'

const defautStyle = {
    fontWeight: 600,
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
}

export default function Badge({ data, color, backgroundColor }) {

    const styles = { ...defautStyle, color: color, backgroundColor: backgroundColor }

    return (
        <button style={styles}>{data}</button>
    )
}
