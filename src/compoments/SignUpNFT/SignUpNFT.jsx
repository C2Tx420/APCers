
import './SignUpNFT.scss';
import img1 from '../../assets/image/signupnft-1.png'
export default function SignUpNFT() {
    return (
        <div className="signupNFT">
            <div className="signupNFT__left">
                <img src={img1} alt="" />
            </div>
            <div className='signUpNFT__right'>
                <h1 class="singup1">Create and sell your NFTS</h1>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</h1>
            </div>
        </div>
    )
}
