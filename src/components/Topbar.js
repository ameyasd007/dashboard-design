import React from 'react'
import { FormControl } from 'react-bootstrap';
import { FiBell, FiSearch, FiChevronDown } from 'react-icons/fi';


export default function Topbar() {
    return (
        <header >
            <div className="header-title">CORKOWL</div>
            <FiSearch className="search-icon" />
            <FormControl className="search-box" type="text" placeholder="&nbsp; &nbsp; &nbsp; Search wines, customers here..." />
            <FiBell className="notification-bell" />
            <div className="user-menu">
                <p style={{ color: 'white' }}>Nicholas D</p>
                <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" style={{ borderRadius: "50%", width: "40px", height: "40px", right: "20px", position: "absolute" }} />
                <FiChevronDown className='expand-user-menu' />
            </div>

        </header>
    )
}
