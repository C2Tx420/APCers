import React from 'react'
import './Button.scss'

export default function Button({size='s',color='blank',children}) {
    return (
        <>
            <button className={[size,color]}>{children}</button>
            {/* <button id="ConnectWallet">Connect Wallet</button>
            <button className="EvS">Explore Now</button>
            <button id="placeabid1">Place a bid</button>
            <button className="placeabid23">Place a bid</button>
            <button className="placeabid23">Place a bid</button>
            <button className="total54items">Total 54 items</button>
            <button className="total54items">Total 54 items</button>
            <button className="total54items">Total 54 items</button>
            <button className="EvS">Sign Up Now</button>
            <button id="AllCategories" className="DMN">All Categories</button>
            <button className="DMN">Art</button>
            <button className="DMN">Celebrities</button>
            <button className="DMN">Gaming</button>
            <button className="DMN">Sport</button>
            <button className="DMN">Music</button>
            <button className="DMN">Crypto</button>
            <button id="MoreNFTs">More NFTs</button>
            <button id="Last">Subscibe Now</button> */}
        </>
    )
  }