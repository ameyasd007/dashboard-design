import React, { useState } from 'react';
import InventoryDataGrid from './InventoryDataGrid';


const styles = {
    title: {
        color: "#262730",
        fontWeight: "bold",
        fontSize: "16px",
    }
}

export default function Inventory() {


    return (
        <div style={{ margin: "10px 0px" }}>
            <div style={styles.title}>Inventory</div>
            <InventoryDataGrid></InventoryDataGrid>
        </div>

    )
}
