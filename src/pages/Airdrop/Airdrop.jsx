import React, { useContext, useEffect } from 'react'
import Button from '../../components/Button/Button'
import './Airdrop.scss'
import { useNavigate } from 'react-router-dom'
import { WalletContext } from '../../context/WalletContext'

export default function Airdrop() {
    const navigate = useNavigate()
    const {walletAddress} = useContext(WalletContext)
    useEffect(()=>{
        if(!walletAddress) {
            console.log(walletAddress)
            navigate('/')
        }
    },[])
    const handleTakeAirdrop = () => {
        console.log('aaa')
    }
    return (
        <main className="airdrop container">
            <div className="airdrop__img">
                <img src={'/assets/img/airdrop.png'} alt="" />
            </div>
            <Button onClick={handleTakeAirdrop}>Collect</Button>
        </main>
    )
}
