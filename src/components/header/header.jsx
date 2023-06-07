import React from 'react'
import './header.scss'
export default function Header() {
  return (
    <div class="header">
        <h1 className="heading">APCERS</h1>
        <div class="header__menu">
        <ul class="heading_list-item">
            <li class="heading_list-menu header_list-menu--separate">
                <span href="#">Marketplace</span>
            </li>
            <li class="heading_list-menu">
                <span href="#">Resource</span>
            </li>
            <li class="heading_list-menu">
                <span href="#">About</span>
            </li>
        </ul>
        </div>
    </div>
  )
}
