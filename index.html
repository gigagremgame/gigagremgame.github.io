<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <title>GigaGrem Tap Arena</title>

  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js"></script>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, sans-serif;
    }

    body{
      background:#0f1117;
      color:white;
    }

    .app{
      max-width:500px;
      margin:auto;
      padding:20px;
    }

    .topbar{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:20px;
    }

    h1{
      font-size:26px;
    }

    .subtitle{
      color:#888;
      font-size:13px;
    }

    .wallet-btn{
      background:#00ff99;
      border:none;
      padding:10px 14px;
      border-radius:12px;
      font-weight:bold;
      cursor:pointer;
    }

    .card{
      background:#171b26;
      padding:16px;
      border-radius:18px;
      margin-bottom:15px;
    }

    .balance{
      text-align:center;
    }

    #points{
      font-size:50px;
      margin:10px 0;
    }

    #tapBtn{
      width:200px;
      height:200px;
      border-radius:50%;
      border:none;
      font-size:40px;
      font-weight:bold;
      background:linear-gradient(145deg,#00ff99,#00c3ff);
      color:black;
      cursor:pointer;
      margin-top:20px;
      box-shadow:0 0 25px rgba(0,255,153,0.3);
      transition: transform 0.1s ease;
    }

    #tapBtn:active{
      transform:scale(0.95);
    }

    .center{
      text-align:center;
    }

    .missions{
      margin-top:20px;
    }

    .mission{
      display:flex;
      justify-content:space-between;
      padding:12px;
      background:#10131c;
      margin-top:10px;
      border-radius:12px;
    }

    .actions{
      display:flex;
      gap:10px;
      margin-top:15px;
    }

    .btn{
      flex:1;
      padding:12px;
      border:none;
      border-radius:12px;
      background:#00ff99;
      font-weight:bold;
      cursor:pointer;
    }
  </style>
</head>

<body>

<div class="app">

  <div class="topbar">
    <div>
      <h1>GigaGrem</h1>
      <div class="subtitle">99% Hard Grind Mode</div>
    </div>

    <button id="walletBtn" class="wallet-btn">
      Connect
    </button>
  </div>

  <div class="card balance">
    <div>GREM Balance</div>
    <h2 id="balance">0</h2>
  </div>

  <div class="center">
    <div class="card">
      <div>Total Points</div>
      <div id="points">0</div>

      <button id="tapBtn">GREM</button>

      <p style="color:#777;margin-top:10px;">
        99% grind chance system active
      </p>
    </div>
  </div>

  <div class="card missions">
    <h3>Daily Missions</h3>

    <div class="mission">
      <span>Tap 500 Times</span>
      <span>+500</span>
    </div>

    <div class="mission">
      <span>Invite Friends</span>
      <span>+1000</span>
    </div>

    <div class="mission">
      <span>Hold GREM Token</span>
      <span>BOOST</span>
    </div>
  </div>

  <div class="actions">
    <button id="buyBtn" class="btn">Buy GREM</button>
    <button id="shareBtn" class="btn">Invite</button>
  </div>

</div>

<script>
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

    // Format units assuming standard 18 decimals (change 18 if your token uses 9 or 6)
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
</script>

</body>
</html>
