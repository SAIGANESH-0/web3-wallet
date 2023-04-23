import "./App.css";
import { useState } from "react";
import { Select } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Recover from "./components/Recover";
import Wallet from "./components/Wallet";

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (
    <div className="App">
      <header>
        <h1 className="headerLogo"> Wallet</h1>
        <Select
          onChange={(val) => setSelectedChain(val)}
          value={selectedChain}
          options={[
            {
              label: "Ethereum Mainnet",
              value: "0x1",
            },
            {
              label: "Polygon Testnet",
              value: "0x13881",
            },
          ]}
          className="dropdown"
        ></Select>
      </header>
      {wallet && seedPhrase ? (
        <Routes>
          <Route
            path="/yourwallet"
            element={
              <Wallet
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recover"
            element={
              <Recover setSeedPhrase={setSeedPhrase} setWallet={setWallet} />
            }
          />
          <Route
            path="/yourwallet"
            element={
              <Create setSeedPhrase={setSeedPhrase} setWallet={setWallet} />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
