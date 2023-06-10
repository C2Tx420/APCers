import { useEffect, useState } from 'react'
import './Header.scss'
import Button from '../Button/Button'
import { WalletService } from '../../services/wallet.service';
import { Link } from 'react-router-dom';
export default function Header() {
    const [walletAddress, setwalletAddress] = useState(()=>{
        const walletAddress = localStorage.getItem('walletAddress');
        if(walletAddress) {
            return walletAddress;
        } else{
            return '';
        }
    });
    const [walletBalance,setWalletBalance] = useState('');
    const [loadingConnect, setLoadingConnect] = useState(false);

    useEffect(()=>{
        (async ()=>{
            if(walletAddress) {
                // const balance = await WalletService.getBalance(walletAddress);
                // console.log(balance.result[0])
                const mbe = balance.result.find((token)=> token.address === '5Ab6Q8TL2qgzEQNnnbYYk4SLeKTiV5qRYyoaJ7bCc2v6');
                setWalletBalance({
                    "address": "5Ab6Q8TL2qgzEQNnnbYYk4SLeKTiV5qRYyoaJ7bCc2v6",
                    "balance": 100,
                    "associated_account": "9ZeBHgQoVemfJC2jEt8yRmXetWYhaE1U9ktifVGitUho",
                    "info": {
                        "name": "Mungbean",
                        "symbol": "MBE",
                        "image": "https://nftstorage.link/ipfs/bafkreifcspzy7hibi7dzo5rxjjfy7nkbfgj2njs2oky5skt4rn7gq2lgoa",
                        "decimals": 9
                    }
                });
            }
        })();

    },[])

    const handleConnect = async () => {
        setLoadingConnect(true);
        const walletAddress = await WalletService.solanaConnect();
        if (walletAddress) {
            setwalletAddress(walletAddress);
        }
        setLoadingConnect(false);
    }

    return (
        <header className="header container">
            <Link to={''}>
                <h1 className="header__brand">APCERS</h1>
            </Link>
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
                {!walletAddress && !walletBalance ?
                    <Button color='bordered' onClick={handleConnect} disable={loadingConnect}>Connect Wallet</Button>
                    :
                    <div className="profile">
                        <div className="profile__info">
                            <p>{walletBalance.balance}</p>
                            <img src={walletBalance.info?.image} alt="profile info image" />
                        </div>
                        <p className='profile__walletid'>{walletAddress}</p>
                    </div>
                }
            </div>
        </header>
    )
}
