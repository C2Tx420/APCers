import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

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
            return wallet.address
          }
        }
        catch (err) {
          console.log(err);
        }
    
      }
}