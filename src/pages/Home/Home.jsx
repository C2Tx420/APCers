import React from 'react'
import './Home.scss'
import AmazeNFT from '../../components/AmazeNFT/AmazeNFT'
import SignUpNFT from '../../components/SignUpNFT/SignUpNFT'

export default function Home() {
  return (
    <main className="home">
      <section className="amaze-section container-fluid">
        <AmazeNFT />
      </section>
      <section className="signup-section container">
        <SignUpNFT />
      </section>
    </main>
  )
}
