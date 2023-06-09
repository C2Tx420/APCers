import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className='footer container'>
            <div className="footer__top">
                <div className='footer__top-item'>
                    <p className='brand'>APCERS</p>
                    <p className='desc'>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items. </p>
                </div>
                <div className='footer__top-item'>
                    <p className='title'>Market Place</p>
                    <ul className='list'>
                        <li><a>All NFTs</a></li>
                        <li><a>News</a></li>
                        <li><a>Art</a></li>
                        <li><a>Sports</a></li>
                        <li><a>Utility</a></li>
                        <li><a>Music</a></li>
                        <li><a>Domain Name</a></li>
                    </ul>
                </div>
                <div className='footer__top-item'>
                    <h1 className='title'>My Account</h1>
                    <ul className='list'>
                        <li><a>Profile</a></li>
                        <li><a>Favorite</a></li>
                        <li><a>My Collections</a></li>
                        <li><a>Settings</a></li>
                    </ul>
                </div>
                <div className='footer__top-item'>
                    <p className='title'>Stay In The Loop</p>
                    <p className='desc-s'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                </div>
            </div>
            <div className='footer__bottom'><p>Copyright © 2022 Avi Yansah</p></div>

        </footer>

    )

}