import { useContext, useEffect, useState } from 'react'
import './Header.scss'
import Button from '../Button/Button'
import { WalletService } from '../../services/wallet.service';
import { Link, useNavigate } from 'react-router-dom';
import { ShyftService } from '../../services/shyft.service';
import { WalletContext } from '../../context/WalletContext';
export default function Header() {
    const navigate = useNavigate();
    const {walletAddress,setWalletAddress} = useContext(WalletContext);
    const [walletBalance, setWalletBalance] = useState('');
    const [loadingConnect, setLoadingConnect] = useState(false);

    useEffect(() => {
        (async () => {
            if (walletAddress && !walletBalance) {
                // getBalance(walletAddress);
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

    }, [])

    const handleGoto = (dest) => {
        navigate('/');
        const item = document.querySelector(`.${dest}`);
        const position = item.offsetTop;
        window.scrollTo({
            top: position,
            left: 0,
            behavior: "smooth",
          });
    }

    const test = () => {
        ShyftService.signContract(
            'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAkPEj5fR8DaCStheKVt54Qse0cq36lDmiACLKWim8td0JZsiRbWvd7kjKQcoSOKjqgg1bot463uB63nB6aUgMGFEpq/9fBINGHRLqY5nXXEdk3gbtwBw2K5R3Mt/Cu9cVe7wCdHHv2zH9Y1VygPH+srmGpgUvYupbMUt48l+g3bpPvDqeYEb/Rg3oMafI7pBdOwFUCmAEF9gEL0lHK0oiysaMoAenHeXxOwEORRKfXCnGQBnpENBBpuQDD20knlnNK8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiyA4YcFMCiFYfr3Z5KF+LqYGnYKLYB4pWc693ivih8MnvOL+kEGyZMjK9SmqE5anVWmtYZn5efKXhdPOWcJz41dz8QfeVhkVNt5z0L963+gcdM7DppcBM+UxlazknbHEKZZOGPLpGFWTq5BNzchVG6wFRyTCCdrvUrSocOkIQe/QkXpd1kxJfsVlBtsCpJgr0Q4vNEDVSkqQLBd+H9dUgBqfVFxh70WY12tQEVf3CwMEkxo8hVnWl27rLXwgAAAAGp9UXGSxcUSGMyUw9SvF/WNruCJuh/UTj29mKAAAAAAbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpC/kPuH4ZkF0RcqSjWaItZG5nPP1rzt6IE3hqM6apdFQCCgwAAQkIBwIDBQ4GCw0bM+aFpAF/g63+//8A0O2QLgAAAAEAAAAAAAAACgUEAAYNDAnPayygS97DG/8=')
    }

    const getBalance = async (walletAddress) => {
        // const balance = await ShyftService.getBalance(walletAddress)
        // setWalletBalance(balance);
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
        })
    }

    const handleConnect = async () => {
        setLoadingConnect(true);
        const wallet = await WalletService.solanaConnect();
        if (wallet) {
            setWalletAddress(wallet);
            getBalance(wallet.address)
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
                    <a onClick={()=>handleGoto('team-section')}>Team</a>
                </li>
                <li className="header__menu-item">
                    <a onClick={()=>handleGoto('signup-section')}>About</a>
                </li>
            </ul>
            <div className="header__btn-group">
                <Link to='/create'>
                    <Button>Create & Upload</Button>
                </Link>
                {!walletAddress || !walletBalance ?
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
