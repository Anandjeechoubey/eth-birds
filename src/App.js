import React from "react";
import Web3 from "web3/dist/web3.min.js";

import "./App.css";
import BirdsList from "./components/BirdsList";
import Create from "./components/Create";
import Navbar from "./components/Navbar";

function App() {
  const [account, setAccount] = React.useState(null);
  const [birds, setBirds] = React.useState([]);

  // loadWeb3
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  // loadBlockchainData
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  // connectWallet
  const connectWallet = async () => {
    await loadWeb3();
    await loadBlockchainData();
  };

  React.useEffect(() => {
    connectWallet();
  }, []);
  return (
    <div className="App">
      <Navbar address={account} />
      <Create />
      <BirdsList birds={[]} />
    </div>
  );
}

export default App;
