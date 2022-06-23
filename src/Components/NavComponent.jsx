import React from 'react'
import NavStyle from '../Style/NavComponent.module.sass'

function NavComponent() {
  return (
    <div>
        <nav className={NavStyle.container}>
            <ul className={NavStyle.navItems}>
                <li className={NavStyle.navItem} ><a className={NavStyle.navLink} href="/">Home</a></li>
                <li className={NavStyle.navItem} ><a className={NavStyle.navLink} href="about">About</a></li>
                <li className={NavStyle.navItem} ><a className={NavStyle.navLink} href="post">Post</a></li>
                <li className={NavStyle.navItem} ><a className={NavStyle.navLink} href="contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavComponent