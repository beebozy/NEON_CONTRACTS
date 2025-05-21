# 🐸 MemeLaunchpad

**MemeLaunchpad** is a decentralized launch platform for meme tokens, powered by an **exponential bonding curve** and deployed on **Neon EVM**. |It allows users to  interact with Ethereum-style smart contracts on Solana via Neon’s composability layer.

---

## 📦 Features

* 🚀 Launch meme tokens with bonding curve pricing
* 📈 Dynamic token price based on supply using mathematical curves
* 🔁 Seamless integration between Solana (SOL/WSOL) and Neon EVM
* 💼 Deployable Ethereum-compatible Solidity contracts on Solana
* 🌐 Built with Neon EVM and Solana Composability features

---

## 🧱 Architecture Overview

* **Bonding Curve Contract**: Written in Solidity, calculates token prices exponentially as supply increases.
* **MemeLaunchpad Contract**: Deploys and manages meme token launches and handles purchases.
* **Wrapping Script**: Wraps SOL to WSOL so users can interact with the EVM-compatible contracts.

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/memelaunchpad.git
cd memelaunchpad
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Wallet and Fund It

* Generate a Solana keypair:

  ```bash
  solana-keygen new --outfile ./id.json
  ```
* Fund it on Devnet:

  ```bash
  solana airdrop 2 --keypair ./id.json --url https://api.devnet.solana.com
  ```

### 4. Wrap SOL into WSOL

Use the provided `wrap-sol.js` script:

```bash
node wrap-sol.js
```

> Wraps 1 SOL into WSOL using @solana/web3.js and @solana/spl-token.

---

## 🔐 Deployed Contracts on Neon EVM Just testing my deployment skill did not use it 

| Contract      | Address                                      |
| ------------- | -------------------------------------------- |
| MemeLaunchpad | `0xdc0A9FFc0B4958920C8d8bE00c9e75C2d0A16B1F` |
| BondingCurve  | `0x85EA0BfCd253dC6dc98DB9A88Cc1D9A958327477` |

---

## ⚙️ Bonding Curve Mechanism

We use an **exponential bonding curve**:

* Early token buyers pay significantly less
* Price increases as more tokens are bought (e.g., `price = base * e^(supply / factor)`)
* Encourages early adoption and discourages whale dumps

---

## 🚀 Launch Flow

1. User wraps SOL into WSOL
2. User sends WSOL to the MemeLaunchpad
3. MemeLaunchpad interacts with BondingCurve contract
4. Tokens are minted at calculated price and sent to user

---

## 🧠 Technologies Used

* **Solana** (Native SOL, WSOL, SPL Token)
* **Neon EVM** (Solidity contract execution on Solana)
* **@solana/web3.js** and **@solana/spl-token**
* **Node.js** for scripting and contract interaction

---

## 👨‍💻 Author

**Musa Habeeblai Ajani**
[GitHub](https://github.com/beebozy) | [Email](mailto:musahabeeblai@gmail.com)

---

## 📄 License

MIT License

---

> For support or contributions, feel free to open an issue or pull request!
