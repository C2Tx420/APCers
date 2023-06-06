import React, { useState } from 'react';
import './HumanCard.scss';
import img1 from '../../assets/img/ava1.jpeg';

export default function HumanCard(){
    return (
        <div>

            <div><hr className='line1' /></div>
               <div className='about'> <p>ABOUT US</p></div> 
                <div className='para1'> Welcome our website, this is my team members from APCers </div>


            <div>
            <body>
                
          
                <div className="humanard">
                    <div className="card-image"></div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <p className= "name"> Tran Nhat My </p>
                    <p>Leader of group HelloWorld</p>
                    <p>Student from APC </p>
                    
                </div>
                  
                </body>
                </div>

               
                
        </div>




    )
}


                        
