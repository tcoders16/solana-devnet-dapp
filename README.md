# Web3 Wallet Utility dApp

A professional-grade **Solana Devnet** application enabling essential wallet-based operations like requesting SOL airdrops, displaying wallet balances, and (optionally) signing messages. Built with modern tools like **React**, **Tailwind CSS**, and **Solana Wallet Adapter**, this dApp serves as a learning playground and starter kit for Web3 developers.


---

## 🌐 Visual Demo

### Wallet Connect + Welcome
![Landing](./public/Screenshot%202025-05-01%20at%2012.03.33%E2%80%AFAM.png)

### Airdrop
![Airdrop Request](./public/Screenshot%202025-05-01%20at%2012.03.56%E2%80%AFAM.png)

### Learning Code Section
![Code Demo](./public/Screenshot%202025-05-01%20at%2012.04.24%E2%80%AFAM.png)

---
## ✨ Why It Matters in Web3

In Web3, user identity and access control are tied to **wallet ownership** instead of centralized accounts. Verifying wallet ownership is a foundational task for many dApps.

This utility dApp demonstrates how to:
- ✉️ Connect a wallet
- ⛈️ Request SOL airdrops
- 💸 Fetch and display wallet balances
- 🔒 Optionally sign and verify messages using Ed25519

---

## 🔐 Core Use Cases

| Use Case                | Description                                                   |
|------------------------|---------------------------------------------------------------|
| Wallet Balance Display | Read current SOL balance from the blockchain in real time.   |
| Devnet Airdrop         | Request test SOL tokens from Solana Devnet.                  |
| Educational Playground | Learn how Web3 wallet interaction works under the hood.      |

---

## 📖 What This dApp Does

### ✅ Features
- Connect to **Phantom**, **Solflare**, or **Torus** wallets
- Request SOL from **Solana Devnet** with custom amount
- Display **accurate SOL balance** in real time
- Responsive UI styled with **Tailwind CSS** and **Orbitron** fonts
- Fully **frontend-only** (no backend required)

---

## 🛠️ Tech Stack

| Tech                  | Purpose                                      |
|-----------------------|----------------------------------------------|
| React.js              | Frontend framework                           |
| Tailwind CSS          | Utility-first styling                        |
| Solana Wallet Adapter | Wallet integrations                          |
| bs58                  | Base58 encoding for keys and signatures      |
| @noble/curves         | Ed25519-based signature validation           |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/solana-wallet-utility-dapp.git
cd solana-wallet-utility-dapp

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

---

## 🪠 Component Architecture

### 1. `RequestAirdrop.jsx`
- Accepts SOL amount
- Converts to lamports
- Requests airdrop and confirms transaction
- Displays success/error feedback

**Screenshot:**
![Airdrop Request UI](./public/Screenshot%202025-05-01%20at%2012.03.56%E2%80%AFAM.png)

---

### 2. `ShowSolBalance.jsx`
- Uses `useConnection` + `useWallet`
- Calls `getBalance(publicKey)`
- Converts lamports to SOL
- Displays real-time balance

**Screenshot (Balance UI):**
![Balance View](./public/Screenshot%202025-05-01%20at%2012.04.51%E2%80%AFAM.png)

**Screenshot (Code Explanation):**
![Tutorial Section](./public/Screenshot%202025-05-01%20at%2012.04.24%E2%80%AFAM.png)

**Screenshot (Learning Part):**
![Learning View](./public/Screenshot%202025-05-01%20at%2012.04.16%E2%80%AFAM.png)

---

### 3. `SignMessage.jsx` (Optional)
- Prompts wallet to sign a message
- Verifies signature with public key
- Educational only (not a login flow)

---

### 4. `LearningSection.jsx`
- Displays learning outcomes (tutorial style)
- Annotated code snippets with copy buttons

---

## 🎨 Design Language
- **Orbitron** + **Space Mono** fonts for futuristic style
- Neon glow UI for inputs, buttons, containers
- Fully responsive layout
- Dark mode only
- Keyboard accessible

---

## ⛔ Security Notes
- Private keys **never leave** the wallet
- Signing is done in-browser
- Message signing (optional) is local-only

---

## 🚀 Future Enhancements
- Add backend login via nonce + JWT
- Enable QR-based mobile wallet connections
- Implement wallet whitelisting via signature proofs

---

## 📄 License
MIT License. Use freely for personal or commercial projects.

---

## 🙌 Developed By
**Omkumar Solanki**  
Blockchain & Full Stack Developer  
[GitHub Profile](https://github.com/tcoders16)

---

## 🗓️ Version History

| Version | Description                                 |
|---------|---------------------------------------------|
| v1.0.0  | Initial UI: Wallet Connect + Balance        |
| v1.1.0  | Airdrop Module + UI Feedback                |
| v1.2.0  | Learning Sections + Copyable Code + Styling |

