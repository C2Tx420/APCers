import React from 'react'
import Button from '../../components/Button/Button'
import './Airdrop.scss'

export default function Airdrop() {
    return (
        <main className="airdrop container">
            <div className="airdrop__img">
                <img src={'/assets/img/airdrop.png'} alt="" />
            </div>
            <Button>Collect</Button>
        </main>
    )
}
