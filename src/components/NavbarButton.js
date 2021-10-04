import React from 'react'

const styles = {
    navbarButton: {
        margin: "10%",
        display: "flex"
    },
    buttonName: {
        fontWeight: "600"
    },
    buttonIcon: {
        margin: "5px 10px 0 0"
    }
}

export default function NavbarButton(props) {
    return (
        <div style={styles.navbarButton}>
            <div style={styles.buttonIcon}>{props.icon()}</div>
            <div style={styles.buttonName}>{props.name}</div>
        </div>
    )
}
