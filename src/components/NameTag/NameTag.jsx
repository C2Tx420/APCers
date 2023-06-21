import React from 'react'
import "./NameTag.scss"
import img1 from "../../assets/img/NFT.png"
export default function () {
  return (
    <section className='NameTag-container'>
        {/* NameTag image */}
        <div className='NameTag-img'>
        <img src={img1} />
        </div>
        {/* NameTag details */}
        <div className='NameTag-info'>
            <p className='NameTag-title'>Ice Cube</p>
            <p className='NameTag-price'>Price:</p>
            <p className='NameTag-status'>Available</p>
        </div>
        {/* NameTag Sale */}
        <div className='NameTag-saleoff'>
          <p className='NameYag-saleoff-percent'>sale 15%</p>
        </div>
    </section>
  )
}
