import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(null);
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Import wallet and connection hooks from Solana adapter
  import { useConnection, useWallet } from "@solana/wallet-adapter-react";
  import { useEffect, useState } from "react";
  import { LAMPORTS_PER_SOL } from "@solana/web3.js";
  
  // Step 1: Create state to store balance
  const [balance, setBalance] = useState(null);
  
  // Step 2: Access the Solana connection and user's public key
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  
  // Step 3: Define and run an effect that fetches the balance
  useEffect(() => {
    const fetchWalletBalance = async () => {
      if (!publicKey) return;
  
      try {
        // Fetch balance in lamports from blockchain
        const lamports = await connection.getBalance(publicKey);
  
        // Convert lamports to SOL and update state
        setBalance(lamports / LAMPORTS_PER_SOL);
      } catch (err) {
        console.error("Failed to fetch balance:", err);
      }
    };
  
    fetchWalletBalance();
  }, [publicKey, connection]);
  
  // Now, \`balance\` contains the user's SOL balance as a float
  `;

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey) {
        const lamports = await connection.getBalance(publicKey);
        setBalance(lamports / LAMPORTS_PER_SOL);
      }
    };
    fetchBalance();
  }, [publicKey, connection]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-42 px-4 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 tracking-wider drop-shadow-[0_0_10px_#3b82f6] text-center">
        Show SOL Balance
      </h2>

      {/* Learning Section */}
      <div className="bg-[#0f0f0f] border border-blue-500 text-blue-300 p-6 mb-10 rounded-lg shadow-[0_0_15px_#3b82f6] font-inter">
            {/* Learning Section */}
            <div className="bg-[#0f0f0f] border border-blue-500 text-blue-300 p-6 mb-10 rounded-lg shadow-[0_0_15px_#3b82f6] font-mono">
            <h3 className="text-lg font-bold text-white mb-4">What you learn here:</h3>
            <ul className="list-disc list-inside text-sm text-blue-200 leading-relaxed mb-4 space-y-2">
                <li>
                <strong>Step 1: Connect to the Wallet</strong><br />
                First, use <code>useWallet()</code> from <code>@solana/wallet-adapter-react</code> to get the user's <code>publicKey</code>. This is their unique Solana address.
                </li>
                <li>
                <strong>Step 2: Connect to the Blockchain</strong><br />
                Use <code>useConnection()</code> to get access to the current Solana RPC connection. This is how we talk to the blockchain.
                </li>
                <li>
                <strong>Step 3: Fetch the Balance</strong><br />
                Use <code>connection.getBalance(publicKey)</code> to fetch the current balance in <strong>lamports</strong> (smallest unit of SOL).
                </li>
                <li>
                <strong>Step 4: Convert Lamports to SOL</strong><br />
                1 SOL = <code>1,000,000,000</code> lamports. Divide by <code>LAMPORTS_PER_SOL</code> to display the actual SOL balance.
                </li>
                <li>
                <strong>Step 5: Store and Display</strong><br />
                Use <code>useState()</code> to store the balance and <code>useEffect()</code> to call the function whenever the public key or connection changes.
                </li>
                <li>
                <strong>Bonus:</strong> Wrap the balance fetch in <code>try/catch</code> to gracefully handle connection or RPC errors.
                </li>
            </ul>
            </div>

        {/* Code Block + Copy Button */}
        <div className="relative group font-mono">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-500 transition duration-200"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <div className="bg-black border border-blue-600 text-blue-300 text-xs px-6 py-5 rounded-lg overflow-auto shadow-inner whitespace-pre leading-relaxed">
            <code>{codeSnippet}</code>
          </div>
        </div>
      </div>

      {/* Balance Display Box */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-white text-xl font-semibold px-6 py-4 rounded-lg border border-blue-600 shadow-[0_0_20px_#3b82f6] bg-black w-full max-w-xs text-center transition-all duration-300">
          {publicKey ? (
            balance !== null ? (
              <>Your Balance: <span className="text-blue-400">{balance.toFixed(4)} SOL</span></>
            ) : (
              "Fetching..."
            )
          ) : (
            "Wallet not connected"
          )}
        </div>
      </div>
    </div>
  );
}