import React from 'react'
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
    height: '320px',
    left: '0px',
    top: '56px',
    borderRight: '#ecf1f4 solid',
    height: '-webkit - fill - available'
}

export default function Navbar() {

    const buttons = [
        {
            name: "Dashboard",
            icon: () => <CgScreenMirror />
        },
        {
            name: "Inventory",
            icon: () => <ImStack />
        },
        {
            name: "Orders",
            icon: () => <RiShoppingBag3Line />
        },
        {
            name: "Customers",
            icon: () => <IoPeopleOutline />
        },
        {
            name: "Reports",
            icon: () => <MdDescription />
        },
        {
            name: "Settings",
            icon: () => <IoSettingsOutline />
        }
    ]

    return (
        <nav style={styles}>
            {buttons.map(button => <NavbarButton key={buttons.name} {...button} />)}
        </nav>
    )
}
