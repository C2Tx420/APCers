import React from 'react' 
import "./ProductNFT.scss"
import pic1 from '../../assets/img/signup/Duck-25.png'
import pic2 from '../../assets/img/signup/coolpic.png'

export default function ProductNFT() {
  return (
      <div className='ProductNFT-container'>
         {/* day la div tam hinh  */}
            <div className='ProductNFT-imageleft'>
              <img src={pic2} alt="" />
            </div>
          {/* day la div tam hinh  */}

          <div className='ProductNFT-About'>
              <p className='ProductNFT-Name'>
                Red Ocean
              </p>
              <p className='ProductNFT-Desc'>
                A random of an dude live in 2023 that really need money <br></br> so he sell this picture for good ammount of <br></br> cash so he can eat. 
              </p>
              <p className='ProductNFT-Creator'>
                Creator
              </p>
              <div className='ProductNFT-Both'>
              <img className='ProductNFT-iconsm' src={pic1} alt="" /> 
              <p className='ProductNFT-UserName'> 
               Lê Thông
               </p> 
              </div>
          </div>















      </div>
  )
}
