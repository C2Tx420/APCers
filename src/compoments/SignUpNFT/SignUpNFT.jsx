
import './SignUpNFT.scss';
import img1 from '../../assets/image/signupnft-1.png'
import img1sm from '../../assets/image/avatar 1.png'
import img2 from '../../assets/image/signupnft-2.png'
import img2sm from '../../assets/image/avatar 2.png'
import img3 from '../../assets/image/signupnft-3.png'
import img3sm from '../../assets/image/avatar 3.png'



export default function SignUpNFT() {
    return (
    <section className='signupNFT'>
    <div className='picall'>
        <div className='infor1'>
            <img className='pic1' src={img1} alt="" />
            <img className='pic1sm' src={img1sm} alt="" />
        </div>
        <div className='infor2'>
            <img className='pic2' src={img2}  alt="" />
            <img clasName='pic2sm' src={img2sm} alt="" />
        </div>
        <div className='infor3'>
            <img className='pic3' scr={img3} alt="" />
            <img className='pic3sm' scr={img3sm} alt="" />
        </div>
    </div>
        
        <div className='alltitle'>
            <p className='title1'>
            Create and sell your NFTs
            </p>
            <p className='title2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
            </p>
        </div>



    
    </section>

    )
}
