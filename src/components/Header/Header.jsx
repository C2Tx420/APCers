import { useEffect, useState } from 'react'
import './Header.scss'
import Button from '../Button/Button'
import { WalletService } from '../../services/wallet.service';
export default function Header() {
    const [walletAddress, setwalletAddress] = useState('');
    const [loadingConnect, setLoadingConnect] = useState(false);

    const handleConnect = async () => {
        setLoadingConnect(true);
        const walletId = await WalletService.solanaConnect();
        if(walletId) {
            setwalletAddress(walletId);
        }
        setLoadingConnect(false);

    }

    return (
        <header className="header container">
            <h1 className="header__brand">APCERS</h1>
            <ul className="header__menu">
                <li className="header__menu-item">
                    <a href="#">Marketplace</a>
                </li>
                <li className="header__menu-item">
                    <a href="#">Resource</a>
                </li>
                <li className="header__menu-item">
                    <a href="#">About</a>
                </li>
            </ul>
            <div className="header__btn-group">
                <Button>Upload</Button>
                {!walletAddress ?
                <Button color='bordered' onClick={handleConnect} disable={loadingConnect}>Connect Wallet</Button>
                 :
                 <div className="profile">
                     <p className='profile__walletid'>{walletAddress}</p>
                 </div>
                 }
            </div>
        </header>
    )
}
