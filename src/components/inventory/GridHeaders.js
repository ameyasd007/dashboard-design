import React from 'react'

const styles = {
    columnHeader: {
        fontWeight: "bold",
        fontSize: "12px",
        color: "#485572",
    },
}

export default function GridHeaders() {
    const tableHeaders = [
        { title: "", type: "checkbox" }, { title: "Product" },
        { title: "Rating" }, { title: "Vintage" }, { title: "Qty" }, { title: "Volume" },
        { title: "Cost" }, { title: "Price" }, { title: "" }
    ]

    const renderTableHeaders = () => tableHeaders.map((tableHeader, i) =>
        tableHeader.type
            ? (<th><input type={tableHeader.type} key={i} /></th>)
            : (<th style={styles.columnHeader} key={i}>{tableHeader.title}</th>)
    )

    return (
        <thead>
            <tr>
                {renderTableHeaders()}
            </tr>
        </thead>
    )
}
