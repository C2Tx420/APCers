import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <footer className='Footer-big'>
            <div className='Footer-con'>
                <div>
                    <h1 className='APCERS'>APCERS</h1>
                    <p className='twf'>The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items. </p>
                </div>
                <div>
                    <h1 className='MP'>Market Place</h1>
                    <div className='ALL'>
                        <p>All NFTs</p>
                        <p>News</p>
                        <p>Art</p>
                        <p>Sports</p>
                        <p>Utility</p>
                        <p>Music</p>
                        <p>Domain Name</p>
                    </div>
                </div>
                <div>
                    <h1 className='MA'>My Account</h1>
                    <div className='PF'>
                        <p>Profile</p>
                        <p>Favorite</p>
                        <p>My Collections</p>
                        <p>Settings</p>
                    </div>
                </div>
                <div>
                    <h1 className='SITL'>Stay In The Loop</h1>
                    <p className='JOIN'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
                    <div className='REC'><input className='ENTER' /><p> Enter your email address</p></div>
                </div>
            </div>
            <p className='line'></p>
            <div className='no'><p>Copyright © 2022 Avi Yansah</p></div>

        </footer>

    )

}