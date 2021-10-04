import React from 'react'

const defaultStyles = {
    navbarButton: {
        padding: "5% 0 5% 10%",
        display: "flex"
    },
    buttonName: {
        fontWeight: "600"
    },
    buttonIcon: {
        margin: "5px 10px 0 0"
    }
}

const selectedStyles = {
    navbarButton: {
        padding: "5% 0 5% 10%",
        display: "flex",
        background: "#F7F1F3",
        borderRight: "#811434 solid"
    },
    buttonName: {
        fontWeight: "600",
        color: '#811434'
    },
    buttonIcon: {
        margin: "5px 10px 0 0",
        color: '#811434'
    }
}


export default function NavbarButton(props) {

    const styles = props.selected ? selectedStyles : defaultStyles

    return (
        <div style={styles.navbarButton} onClick={() => props.onNavButtonClick(props.name)}>
            <div style={styles.buttonIcon}>{props.icon()}</div>
            <div style={styles.buttonName}>{props.name}</div>
        </div>
    )
}
