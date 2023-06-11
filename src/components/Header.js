import { useState, useEffect } from "react";
import Web3 from "web3";
import * as fcl from "@onflow/fcl";
import WalletButton from "./WalletButton";
import Link from "next/link";

export default function Header() {
  const [accountMetaMask, setAccountMetaMask] = useState("");
  const [accountFlow, setAccountFlow] = useState("");

  const connectWalletMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccountMetaMask(accounts[0]);
      } catch (e) {
        alert("Failed to connect. Please check your MetaMask setup.");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const connectWalletFlow = async () => {
    try {
      const response = await fcl.logIn();
      if (response.status) {
        const address = response.addr;
        setAccountFlow(address);
      }
    } catch (e) {
      alert("Failed to connect to Flow. Please check your setup.");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 sticky top-0 z-50 h-24">
      <header className="flex items-center justify-between">
        <Link href="/">
          <div className="font-bold text-2xl cursor-pointer">ArtiFusion</div>
        </Link>
        <div className="flex space-x-4 cursor-pointer">
          <Link href="/about-us">
            <p className="text-blue-500">About Us</p>
          </Link>

          <a
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={null}
            className="text-blue-500 cursor-pointer"
          >
            Demo
          </a>
          {isOpen && (
            <div className="origin-top-right absolute right-60 top-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link href="/dashboard">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Writer Assist Tool
                  </p>
                </Link>
                <Link href="/all-stories">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    fundraising
                  </p>
                </Link>
                <Link href="/gallery">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    View ArtiWork
                  </p>
                </Link>
              </div>
            </div>
          )}
          <a className="text-blue-500" href="https://discord.gg/ugKSAW3b">
            Discord
          </a>
   
          <WalletButton
        account={accountMetaMask}
        onClick={connectWalletMetaMask}
        walletType="MetaMask"
        className="ml-3"
        value={"connect Metamask"}
      />
      <WalletButton
        account={accountFlow}
        onClick={connectWalletFlow}
        walletType="Flow"
      />
        
        </div>
      </header>
    </nav>
  );
}
