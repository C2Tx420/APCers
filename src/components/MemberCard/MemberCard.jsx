import React from 'react'
import './MemberCard.scss'
import imgbackground from '../../assets/img/discovernfts/background1.png'
import vetor from '../../assets/img/discovernfts/Vector.png'
import dimon from '../../assets/img/discovernfts/dimon.png'
import imgprivate1 from '../../assets/img/discovernfts/private1.png'
import imgprivate2 from '../../assets/img/discovernfts/private2.png'
import imgprivate3 from '../../assets/img/discovernfts/private3.png'
import imgprivate4 from '../../assets/img/discovernfts/private4.png'

export default function MemberCard() {
    return(
        <div className="home-product">
            <h5 className="home-product-heading">DISCORVER MORE NFTS</h5>
            <div className="home-product-item-menu">
                <ul class="home-product-list">
                    <li class="home-product-list-category">
                        <button href="" class="home-product-list-link btn-color">All Categories</button>
                    </li>
                    <li class="home-product-list-category">
                        <button href="" class="home-product-list-link">Art</button>
                    </li>
                    <li class="home-product-list-category">
                        <button href="" class="home-product-list-link">Celebrities</button>
                    </li>
                    <li class="home-product-list-category">
                        <button href="" class="home-product-list-link">Gaming</button>
                    </li>
                    <li class="home-product-list-category">
                        <button href="" class="home-product-list-link">Sport</button>
                    </li>
                    <li class="home-product-list-category">
                        <button href="" class="home-product-list-link">Music</button>
                    </li>
                    <li class="home-product-list-category">
                        <button href="" class="home-product-list-link">Crypto</button>
                    </li>
                </ul>

                <ul class="home-product-list">
                    <div href="" class="home-product-left">
                        <img class="home-product-list-icon" src={vetor} alt="" />
                        <a href="#" class="home-product-list-filter">All Filter</a>
                    </div>
                </ul>
            </div>

            <div class="member-cards">
                <div class="member-card">
                    <ul className="member-card-private">
                        <li>
                            <div class="member-card-item">
                                <img class="member-card-item-img-bg" src={imgbackground} alt="" />
                                <img class="member-card-item-img member-card-item-img-p1" src={imgprivate1} alt="" />
                                <img class="member-card-item-img member-card-item-img-p2" src={imgprivate2} alt="" />
                                <img class="member-card-item-img member-card-item-img-p3" src={imgprivate3} alt="" />
                                <img class="member-card-item-img member-card-item-img-p4" src={imgprivate4} alt="" />
                            </div>
                            
                            <h6 class="member-card-item-name">ArtCrypto</h6> 
                            
                            <div class="infor-card">
                                <img class="home-product-list-icon-1" src={dimon} alt="" />
                                <a class="infor-card-money">0.25ETH</a>
                                <a class="infor-card-pages">1 of 321</a>
                            </div> 

                            <div class="card-time-and-place">
                                <span class="card-time">3h 50m 2s left</span>
                                <span class="card-place">Place a bid</span>
                            </div>
                        </li>
                    </ul>  
                </div>

                <div class="member-card">
                    <ul className="member-card-private">
                        <li>
                            <div class="member-card-item">
                                <img class="member-card-item-img-bg" src={imgbackground} alt="" />
                                <img class="member-card-item-img member-card-item-img-p1" src={imgprivate1} alt="" />
                                <img class="member-card-item-img member-card-item-img-p2" src={imgprivate2} alt="" />
                                <img class="member-card-item-img member-card-item-img-p3" src={imgprivate3} alt="" />
                                <img class="member-card-item-img member-card-item-img-p4" src={imgprivate4} alt="" />
                            </div>
                            
                            <h6 class="member-card-item-name">ArtCrypto</h6> 
                            
                            <div class="infor-card">
                                <img class="home-product-list-icon-1" src={dimon} alt="" />
                                <a class="infor-card-money">0.25ETH</a>
                                <a class="infor-card-pages">1 of 321</a>
                            </div> 

                            <div class="card-time-and-place">
                                <span class="card-time">3h 50m 2s left</span>
                                <span class="card-place">Place a bid</span>
                            </div>
                        </li>
                    </ul>  
                </div>

                <div class="member-card">
                    <ul className="member-card-private">
                        <li>
                            <div class="member-card-item">
                                <img class="member-card-item-img-bg" src={imgbackground} alt="" />
                                <img class="member-card-item-img member-card-item-img-p1" src={imgprivate1} alt="" />
                                <img class="member-card-item-img member-card-item-img-p2" src={imgprivate2} alt="" />
                                <img class="member-card-item-img member-card-item-img-p3" src={imgprivate3} alt="" />
                                <img class="member-card-item-img member-card-item-img-p4" src={imgprivate4} alt="" />
                            </div>
                            
                            <h6 class="member-card-item-name">ArtCrypto</h6> 
                            
                            <div class="infor-card">
                                <img class="home-product-list-icon-1" src={dimon} alt="" />
                                <a class="infor-card-money">0.25ETH</a>
                                <a class="infor-card-pages">1 of 321</a>
                            </div> 

                            <div class="card-time-and-place">
                                <span class="card-time">3h 50m 2s left</span>
                                <span class="card-place">Place a bid</span>
                            </div>
                        </li>
                    </ul>  
                </div>

                <div class="member-card">
                    <ul className="member-card-private">
                        <li>
                            <div class="member-card-item">
                                <img class="member-card-item-img-bg" src={imgbackground} alt="" />
                                <img class="member-card-item-img member-card-item-img-p1" src={imgprivate1} alt="" />
                                <img class="member-card-item-img member-card-item-img-p2" src={imgprivate2} alt="" />
                                <img class="member-card-item-img member-card-item-img-p3" src={imgprivate3} alt="" />
                                <img class="member-card-item-img member-card-item-img-p4" src={imgprivate4} alt="" />
                            </div>
                            
          
                            <h6 class="member-card-item-name">ArtCrypto</h6> 
                            
                            <div class="infor-card">
                                <img class="home-product-list-icon-1" src={dimon} alt="" />
                                <a class="infor-card-money">0.25ETH</a>
                                <a class="infor-card-pages">1 of 321</a>
                            </div> 

                            <div class="card-time-and-place">
                                <span class="card-time">3h 50m 2s left</span>
                                <span class="card-place">Place a bid</span>
                            </div>
                        </li>
                    </ul>  
                </div>
            </div>
            <div className="more-infor">
                    <button href="" class="more-infor-btn">More NFTs</button>
            </div>
        </div>
    )
}