import { ShyftSdk, Network, signAndSendTransaction } from "@shyft-to/js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {clusterApiUrl, Connection, Transaction } from '@solana/web3.js';
import { decode } from 'bs58';
import { Buffer } from 'buffer';

const shyft = new ShyftSdk({
  apiKey: import.meta.env.VITE_PRIVATE_KEY,
  network: Network.Devnet,
});


export const ShyftService = {
  getBalance: async (walletAddress) =>
    await shyft.wallet.getTokenBalance({
      wallet: walletAddress,
      token: import.meta.env.VITE_TOKEN_ADDRESS,
    }),
  getActiveListings: async (size = 6, page = 1) =>
    await shyft.marketplace.listing.active({
      network: Network.Devnet,
      marketplaceAddress: import.meta.env.VITE_MARKET_ADDRESS,
      sortBy: "price",
      sortOrder: "desc",
      page: page,
      size: size,
    }),
  createNFT: async (data, walletAddress) => {
    const { encoded_transaction } = await shyft.marketplace.listing.list({
      marketplaceAddress: import.meta.env.VITE_MARKET_ADDRESS,
      nftAddress: "7Ros6azxoYakj3agxZetDwTWySftQeYXRXAKYWgXTWvw",
      price: price,
      sellerWallet: walletAddress,
      isGasLess: true,
    });
    return encoded_transaction;
  },
  getNftbyMint: async (id) => await shyft.nft.getNftByMint({ mint: id }),
  signContract: async ( encodedTransaction) => {
    const wallet =  new PhantomWalletAdapter();
    await wallet.connect();
    const rpcUrl = clusterApiUrl('devnet');
    const connection = new Connection(rpcUrl, "confirmed");
    const recoveredTransaction = Transaction.from(
      Buffer.from(encodedTransaction, 'base64')
    );
    const signedTx = await wallet.signTransaction(recoveredTransaction);
    const confirmTransaction = await connection.sendRawTransaction(
      signedTx.serialize()
    );
    return confirmTransaction;
  }
};
