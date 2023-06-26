import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__top">
        <div className="footer__top-item">
          <p className="brand">APCERS</p>
          <p className="desc">
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.{" "}
          </p>
        </div>
        <div className="footer__top-item">
          <p className="title">Market Place</p>
          <ul className="list">
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                All NFTs
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                News
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Art
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Sports
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Utility
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Music
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Domain Name
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__top-item">
          <h1 className="title">My Account</h1>
          <ul className="list">
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Favorite
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                My Collections
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  return;
                }}
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__top-item">
          <p className="title">Stay In The Loop</p>
          <p className="desc-s">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright © 2023 C2Tx420</p>
      </div>
    </footer>
  );
}
