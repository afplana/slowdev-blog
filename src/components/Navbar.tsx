import React from 'react'
import logo from '../images/logo.svg'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const { openSubmenu, closeSubmenu } = useGlobalContext()

    const displaySubmenu: (e: any) => void = (e: any) => {
        const text: string = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3
        if (openSubmenu)
            openSubmenu(text, { center, bottom })
    }

    const handleClose = (e: any) => {
        if (!e.target.classList.contains("link-btn") && closeSubmenu) {
            closeSubmenu()
        }
    }

    return <nav className="nav" onMouseOver={handleClose}>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="stripe" className="nav-logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>architecture</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>infrastructure</button>
                </li>
                <li>
                    <button className="link-btn" onMouseOver={displaySubmenu}>about</button>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar