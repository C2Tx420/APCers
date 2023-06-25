import React from 'react'
import './ProductCard.scss'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({data,className}) {
    const nftData = data.nft;
    const navigate = useNavigate();

    const handleGoTo = (e) => {
      e.stopPropagation();
      navigate(`/product/${data.list_state}`)

    }
  return (
    <div onClick={(e)=>handleGoTo(e)} className={`${className} product-card`}>
        <img src={nftData.image_uri} alt="" />
      <div className="product-card__bottom">
        <p className="name">{nftData.name}</p>
        <p className="price">{data.price}<span>{data.currency_symbol}</span></p>
        <div className="btn-wrapper">
          <Button onClick={(e)=>handleGoTo(e)} size='s'>Details</Button>
        </div>
      </div>
    </div>
  )
}
