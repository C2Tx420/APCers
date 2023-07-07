
import './SignUpNFT.scss';
import img1 from '../../assets/img/signup/signup-1.png'
import img2 from '../../assets/img/signup/signup-2.jpg'
import img3 from '../../assets/img/signup/signup-3.jpg'
import face from '../../assets/img/signup/signup-face.jpg'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';



export default function SignUpNFT() {
    const navigate = useNavigate();
    return (
        <div className='signupNFT'>
            <div className='signupNFT__left'>
                <div className='signupNFT__left-item'>
                    <img className='signupNFT__left-item-img' src={img1} alt="" />
                    <img className='signupNFT__left-item-face' src={face} alt="" />
                </div>
                <div className='signupNFT__left-item'>
                    <img className='signupNFT__left-item-img' src={img2} alt="" />
                    <img className='signupNFT__left-item-face' src={face} alt="" />

                </div>
                <div className='signupNFT__left-item'>
                    <img className='signupNFT__left-item-img' src={img3} alt="" />
                    <img className='signupNFT__left-item-face' src={face} alt="" />
                </div>
            </div>

            <div className='signupNFT__right'>
                <p className='signupNFT__right-title'>
                    Create and sell your NFTs
                </p>
                <p className='signupNFT__right-desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
                </p>
                <Button className={'signupNFT__right-btn'} onClick={()=>navigate('/airdrop')}>Take Airdrop</Button>
            </div>
        </div>
    )
}
