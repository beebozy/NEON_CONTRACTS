import bs58 from "bs58";
import fs from "fs";

// Replace this with your base58 private key string
const base58PrivateKey = "3tRcc41j2dkYtwa9wdks9U7AN3CabtzZFSuJAC7g1WSuHTk4abdMotrGvzLifUkkduqjQpV42QsaWMadD2vPg37E";

// Decode base58 to bytes (Buffer)
const secretKeyBytes = bs58.decode(base58PrivateKey);

// Save the key as a JSON array of numbers
fs.writeFileSync("id.json", JSON.stringify(Array.from(secretKeyBytes)));

console.log("id.json file created!");
