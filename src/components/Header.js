import Link from "next/link";
import WalletButton from "./WalletButton";
import { useState, useEffect } from "react";
import Web3 from "web3";

export default function Header() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function () {
          web3.eth.getAccounts().then(function (accounts) {
            setAccount(accounts[0]);
          });
        });
      } catch (e) {
        // User has denied account access
      }
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (e) {
        alert("Failed to connect. Please check your MetaMask setup.");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const disconnect = () => {
    setAccount(null);
  };

  <WalletButton account={account} onClick={connectWallet} />;
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="bg-white p-4 sticky top-0 z-50 h-24">
      <header className="flex items-center justify-between">
        <Link href="/">
          <div className="font-bold text-2xl cursor-pointer">ArtiFusion</div>
        </Link>
        <div className="flex space-x-4 cursor-pointer">
          <a className="text-blue-500" href="#our-story">
            About Us
          </a>

          <a
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleOpen}
            className="text-blue-500 cursor-pointer"
          >
            Demo
          </a>
          {open && (
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
                <Link href="/fundraising">
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Fundraising
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
          <WalletButton account={account} onClick={connectWallet} />
        </div>
      </header>
    </nav>
  );
}
