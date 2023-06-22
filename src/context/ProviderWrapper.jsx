import React from 'react'
import WalletProvider from './WalletContext'

export default function ProviderWrapper({children}) {
  return (
    <WalletProvider>
        {children}
    </WalletProvider>
  )
}
