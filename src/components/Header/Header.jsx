import React from 'react'
import './Header.scss'
import Button from '../Button/Button'
export default function Header() {
    return (
        <header class="header container">
            <h1 className="header__brand">APCERS</h1>
            <ul class="header__menu">
                <li class="header__menu-item">
                    <a href="#">Marketplace</a>
                </li>
                <li class="header__menu-item">
                    <a href="#">Resource</a>
                </li>
                <li class="header__menu-item">
                    <a href="#">About</a>
                </li>
            </ul>
            <Button>Upload</Button>
        </header>
    )
}
