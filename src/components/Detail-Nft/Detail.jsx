
import './Detail.scss'
import img1 from '../../assets/img/Img/imageleft.png'
import img2 from '../../assets/img/Img/imagemini.png'
export default function Detail1() {
return (
        <section className='Detail-section'>

            <div className='Detail-image'>
                <img className='Detail-img' src={img1} alt="picture" />
            </div>
            
            <div className='Detail-infor'>
                <p className='Detail-RedO'> Red Ocean </p>
                <p className='Detail-para'> Create and sell your NFTs <br />
                    Red Ocean is amazing items, <br />buy by a hundred people all of world
                </p>

                <p className='Detail-creator'>Creator</p>

                <div className='Detail-mininame'>
                        <img src={img2} alt="" />
                        <p className='name'>Jonh Wick</p>
                </div>


              <button className='Detail-btn'>Buy Now</button>
            </div>


        







        </section>
        

);

};