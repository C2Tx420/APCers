import React from 'react'
import './ProductCard.scss'

export default function ProductCard({data}) {
    const nftData = data.nft;
  return (
    <div className="product-card">
        <img src={nftData.image_uri} alt="" />
      <div className="product-card__bottom">
        <p className="name">{nftData.name}</p>
        <p className="desc">
          {nftData.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        </p>
        <p className="price">{data.price}<span>{data.currency_symbol}</span></p>
      </div>
    </div>
  )
}
