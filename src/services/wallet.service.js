import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { ApiService } from "./api.service";

const network = import.meta.env.VITE_CURRENT_NETWORK;


export const WalletService = {
  solanaConnect: async () => {
    const { solana } = window;
    if (!solana) {
      alert("Please Install Solana");
    }

    try {
      const network = "devnet";
      const phantom = new PhantomWalletAdapter();
      await phantom.connect();
      const rpcUrl = clusterApiUrl(network);
      const connection = new Connection(rpcUrl, "confirmed");
      const wallet = {
        address: phantom.publicKey.toString(),
      };

      if (wallet.address) {
        // const accountInfo = await connection.getAccountInfo(new PublicKey(wallet.address), "confirmed");
        // console.log(accountInfo);
        localStorage.setItem("walletAddress", wallet.address);
        return wallet.address;
      }
    } catch (err) {
      console.log(err);
    }
  },
  getBalance: async (walletAddress) => {
    const getBalanceURL = `https://api.shyft.to/sol/v1/wallet/all_tokens?network=${network}&wallet=${walletAddress}`;

    try {
        return ApiService.get(getBalanceURL);
    } catch(e) {
        throw new Error(e.message);
    }
  }
};
