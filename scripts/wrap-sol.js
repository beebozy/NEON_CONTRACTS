const {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} = require('@solana/web3.js');

const {
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  TOKEN_PROGRAM_ID,
  NATIVE_MINT,
} = require('@solana/spl-token');

const fs = require('fs');

// Load the keypair from id.json
const secret = JSON.parse(fs.readFileSync("./id.json"));
const payer = Keypair.fromSecretKey(new Uint8Array(secret));

(async () => {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  const amount = 1 * LAMPORTS_PER_SOL; // Wrap 1 SOL

  const wsolATA = await getAssociatedTokenAddress(
    NATIVE_MINT,
    payer.publicKey,
    false
  );

  const tx = new Transaction();

  // Create the WSOL associated token account if it doesn't exist
  const accountInfo = await connection.getAccountInfo(wsolATA);
  if (!accountInfo) {
    tx.add(
      createAssociatedTokenAccountInstruction(
        payer.publicKey,
        wsolATA,
        payer.publicKey,
        NATIVE_MINT
      )
    );
  }

  // Add SOL to WSOL account (wrap it)
  tx.add(
    SystemProgram.transfer({
      fromPubkey: payer.publicKey,
      toPubkey: wsolATA,
      lamports: amount,
    }),
    {
      keys: [{ pubkey: wsolATA, isSigner: false, isWritable: true }],
      programId: TOKEN_PROGRAM_ID,
      data: Buffer.from([17]), // SyncNative
    }
  );

  const sig = await sendAndConfirmTransaction(connection, tx, [payer]);
  console.log(`✅ Wrapped ${amount / LAMPORTS_PER_SOL} SOL into WSOL`);
  console.log(`🔗 Explorer: https://explorer.solana.com/tx/${sig}?cluster=devnet`);
})();
