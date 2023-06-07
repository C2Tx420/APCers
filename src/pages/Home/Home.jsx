import React from 'react'
import './Home.scss'
import AmazeNFT from '../../components/AmazeNFT/AmazeNFT'

export default function Home() {
  return (
    <main className="home">
      <section className="amaze-section container-fluid">
        <AmazeNFT/>
      </section>
    </main>
  )
}
