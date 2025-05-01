import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function requestAirdrop() {
    if (!wallet.publicKey) {
      setMessage("Please connect your wallet first.");
      return;
    }

    try {
      setLoading(true);
      const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

      const signature = await connection.requestAirdrop(wallet.publicKey, lamports);
      await connection.confirmTransaction(signature, "confirmed");

      setMessage(`✅ Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
      setAmount("");
    } catch (err) {
      setMessage("Airdrop failed: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-20 px-4 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-wider drop-shadow-[0_0_10px_#3b82f6]">
        Request Airdrop
      </h2>

      {/* Learning Box */}
      <div className="bg-[#0f0f0f] border border-blue-500 text-blue-300 p-6 mb-10 rounded-lg shadow-[0_0_15px_#3b82f6] font-mono">
        <h3 className="text-lg font-semibold text-white mb-4">What you learn here:</h3>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-2">
          <li>How to request free test SOL from Solana Devnet</li>
          <li>How wallet public keys are used to receive tokens</li>
          <li>How to convert SOL to lamports (1 SOL = 1,000,000,000 lamports)</li>
          <li>How to confirm a transaction on the Solana blockchain</li>
          <li className="text-red-400">
            You can only airdrop a limited amount of SOL per day. Use{" "}
            <a
              href="https://faucet.solana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-300"
            >
              faucet.solana.com
            </a>{" "}
            if the Devnet faucet returns error 429.
          </li>
        </ul>
      </div>

      {/* Input + Button */}
      <div className="flex flex-col gap-4 items-center">
        <input
          type="number"
          placeholder="Enter amount (e.g., 1)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-black border border-blue-500 text-white px-4 py-2 rounded-lg w-64 text-center shadow-[0_0_15px_#3b82f6] focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          onClick={requestAirdrop}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Requesting..." : "Request Airdrop"}
        </button>

        {message && (
          <div
            className={`mt-4 text-sm px-4 py-2 rounded-lg w-full max-w-xl text-center font-mono ${
              message.startsWith("✅")
                ? "text-green-400 border border-green-600 bg-black shadow-[0_0_10px_#22c55e]"
                : "text-red-400 border border-red-600 bg-black shadow-[0_0_10px_#ef4444]"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}