import React, { useState } from 'react'
import NavbarButton from './NavbarButton'
import { CgScreenMirror } from 'react-icons/cg'
import { ImStack } from 'react-icons/im'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdDescription } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'

const styles = {
    position: 'absolute',
    width: '250px',
    left: '0px',
    top: '56px',
    borderRight: '#ecf1f4 solid',
    height: '-webkit - fill - available'
}



export default function Navbar() {
    const buttons = [
        {
            name: "Dashboard",
            icon: () => <CgScreenMirror />,
            selected: false
        },
        {
            name: "Inventory",
            icon: () => <ImStack />,
            selected: false
        },
        {
            name: "Orders",
            icon: () => <RiShoppingBag3Line />,
            selected: false
        },
        {
            name: "Customers",
            icon: () => <IoPeopleOutline />,
            selected: false
        },
        {
            name: "Reports",
            icon: () => <MdDescription />,
            selected: false
        },
        {
            name: "Settings",
            icon: () => <IoSettingsOutline />,
            selected: false
        }
    ]
    const [buttonDetails, setButtonDetails] = useState(buttons)

    const onNavButtonClick = (e) => {
        setButtonDetails(buttons.map(button => button.name === e ? { ...button, selected: true } : button));
    }

    return (
        <nav style={styles}>
            {buttonDetails.map((button, i) =>
                <NavbarButton
                    key={i}
                    onNavButtonClick={onNavButtonClick}
                    {...button}
                />)}
        </nav>
    )
}
