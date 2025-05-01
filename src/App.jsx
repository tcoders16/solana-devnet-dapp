import React, { useMemo } from "react";
import "./App.css"; // Custom styles
import { RequestAirdrop } from "./components/RequestAirdrop";
import { ShowSolBalance } from "./components/ShowSolBalance";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  return (
    <div className="bg-black text-white font-orbitron min-h-screen flex flex-col">
      {/* Header */}
      <header className=" py-4 shadow-md border-b border-blue-600">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl tracking-wide text-blue-400 drop-shadow-[0_0_10px_#3b82f6]">
            🚀 Solana Playground
          </h1>
          <span className="text-sm font-orbitron text-gray-500"> - Developed By Omkumar Solanki</span>
        </div>
      </header>


    {/* Page Title */}
    <div className="text-center mt-12 mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide  font-orbitron">
        Solana <span className="text-blue-500">Blockchain</span> Utility Hub
      </h1>
      <p className="mt-2 text-blue-400 text-sm md:text-base font-orbitron">
        A developer playground for wallet-based operations on the Solana Devnet
      </p>
    </div>


      {/* Wallet Connection Provider */}
      <ConnectionProvider endpoint={endpoint} className="">
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <main className="flex-grow px-4 py-10 space-y-20 max-w-5xl mx-auto mt-20">
              {/* Connect Wallet Section */}
              <section className="text-center">
                <div className="neon-border p-10 rounded-xl shadow-xl">
                  <h1 className="text-5xl font-bold text-white mb-6 tracking-wide">
                    Welcome to <span className="glow-text">dApp</span>
                  </h1>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    Connect your wallet to start your journey on the Solana blockchain and explore the decentralized world.
                  </p>
                  <div className="flex justify-center mb-4">
                    <WalletMultiButton className="glow-button wallet-adapter-button" />
                  </div>
                  <div className="flex justify-center">
                    <WalletDisconnectButton className="glow-button wallet-adapter-button" />
                  </div>
                  <div className="mt-10 text-sm text-gray-500">
                    <p>
                      Don’t have a wallet?{" "}
                      <a
                        href="https://phantom.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 hover:underline transition duration-200"
                      >
                        Get one here
                      </a>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Request Airdrop Section */}
              <section className="">
                <RequestAirdrop  />
              </section>

              {/* Show Balance Section */}
              <section>
                <ShowSolBalance />
              </section>
            </main>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-blue-600 shadow-inner mt-20">
        <p className="text-sm text-gray-400">
          Developed By <span className="text-blue-400">Omkumar Solanki</span>
        </p>
      </footer>
    </div>
  );
}

export default App;