
# ⚡ Solana Devnet Wallet Interaction dApp

A professional-grade dApp designed to demonstrate essential Web3 operations on the **Solana Devnet** — including wallet connection, SOL airdrop requests, and balance fetching — all wrapped in a modern Orbitron-styled UI with Tailwind CSS.

---

## 🚀 Why This dApp Matters

In the world of Web3, users authenticate and interact with applications using **crypto wallets** rather than traditional email/password logins.

This dApp covers three fundamental Web3 wallet operations:

1. **Wallet Connection**
2. **Requesting an Airdrop (for test SOL)**
3. **Checking Wallet Balance**

These are the building blocks for any decentralized app (dApp), whether it's an NFT marketplace, DeFi platform, DAO dashboard, or gaming protocol.

---

## 🔐 What Is Wallet Interaction?

### ✅ Airdrop

On Solana's Devnet, you can simulate receiving tokens using the `requestAirdrop` method. This allows developers to test transfers and contracts without needing real SOL.

### ✅ Balance Check

The `getBalance` method fetches a wallet's balance in **lamports** (1 SOL = 1,000,000,000 lamports), which is then converted and displayed to users.

---

## 🧠 Learning Outcomes

### 📘 Show SOL Balance

![Show Balance Tutorial](./public/Screenshot_2025-05-01_at_12.04.16_AM.png)
![Balance Code View](./public/Screenshot_2025-05-01_at_12.04.24_AM.png)
![Balance Display](./public/Screenshot_2025-05-01_at_12.04.51_AM.png)

- **Step 1:** Connect wallet using `useWallet()` and extract `publicKey`
- **Step 2:** Connect to Solana Devnet using `useConnection()`
- **Step 3:** Use `connection.getBalance()` to fetch lamports
- **Step 4:** Divide by `LAMPORTS_PER_SOL` to get readable SOL
- **Step 5:** Store and render the balance using `useState`

### 📘 Request Airdrop

![Airdrop Request](./public/Screenshot_2025-05-01_at_12.03.56_AM.png)

- Prompt user for SOL amount
- Validate connection
- Use `connection.requestAirdrop()` and confirm the transaction
- Display message using color-coded feedback
- Link to [faucet.solana.com](https://faucet.solana.com) if rate-limited (error 429)

---

## 🎨 UI Preview

![Home Wallet UI](./public/Screenshot_2025-05-01_at_12.03.33_AM.png)

- Orbitron + Inter fonts for clean Web3 aesthetic
- Dark neon interface with Tailwind CSS utility classes
- Fully responsive layout for desktop and mobile

---

## 🧱 Stack & Tooling

| Layer | Tech |
|-------|------|
| Frontend | React + Vite |
| UI Styling | Tailwind CSS |
| Solana Wallet Integration | `@solana/wallet-adapter-react` |
| Blockchain Communication | `@solana/web3.js` |
| Cryptographic Encoding | `bs58` |
| Fonts | Orbitron, Inter |

---

## 🛠️ Run Locally

```bash
git clone https://github.com/yourusername/solana-wallet-ui.git
cd solana-wallet-ui

npm install
npm run dev
```

---

## 📄 License

Licensed under [MIT](LICENSE). Use this code in your personal or commercial Web3 projects.

---

## ✨ Credits

Built by **Omkumar Solanki** — Web3 Developer, Builder & Explorer
