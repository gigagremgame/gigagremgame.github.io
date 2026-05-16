// Initialize Telegram Mini App settings if accessed inside Telegram
if (window.Telegram && window.Telegram.WebApp) {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
}

/* TAP GAME POINT MANAGEMENT */
let points = 0;
const tapBtn = document.getElementById("tapBtn");
const pointsEl = document.getElementById("points");

const saved = localStorage.getItem("grem_points");
if(saved){
  points = parseInt(saved);
  pointsEl.innerText = points;
}

tapBtn.addEventListener("click", () => {
  // 99% hard grind, 1% mega reward
  if(Math.random() > 0.99){
    points += 100;
    alert("🔥 MEGA GREM HIT!");
  } else {
    points += 1;
  }

  pointsEl.innerText = points;
  localStorage.setItem("grem_points", points);
});

/* WALLET CONNECT */
const walletBtn = document.getElementById("walletBtn");

walletBtn.onclick = async () => {
  if(window.ethereum){
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      walletBtn.innerText = "Connected";
      loadBalance(address);
    } catch (err) {
      console.error("Wallet connection failed:", err);
      alert("Connection rejected or failed.");
    }
  } else {
    alert("Install MetaMask / Trust Wallet");
  }
};

/* TOKEN BALANCE LOOKUP */
const tokenAddress = "0xafda7bd7ab6774466cd224fdadd4ac4e6b11ffff";
const abi = [
  "function balanceOf(address owner) view returns (uint256)"
];

async function loadBalance(address){
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(tokenAddress, abi, provider);
    const bal = await contract.balanceOf(address);

    // Format units assuming standard 18 decimals
    const formattedBal = ethers.utils.formatUnits(bal, 18);
    
    // Displays balance formatted to 2 clean decimal points
    document.getElementById("balance").innerText = parseFloat(formattedBal).toFixed(2);
  } catch (err) {
    console.error("Error fetching token balance:", err);
    document.getElementById("balance").innerText = "Error";
  }
}

/* EXTERNAL LINKS */
document.getElementById("buyBtn").onclick = () => {
  window.open("https://pancakeswap.finance", "_blank");
};

document.getElementById("shareBtn").onclick = () => {
  window.open("https://t.me/share/url?url=https://t.me/GigaGrem_bot", "_blank");
};
