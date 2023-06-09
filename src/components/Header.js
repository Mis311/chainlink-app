import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Link from 'next/link';

export default function Header () { 
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function() {
          // User has allowed account access to DApp...
          web3.eth.getAccounts().then(function(accounts) {
            // Get the initial account array
            setAccount(accounts[0]);
          });
        });
      } catch (e) {
        // User has denied account access to DApp...
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
        alert('Failed to connect. Please check your MetaMask setup.');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return(
  <nav className="bg-white p-4 sticky top-0 z-50">
    <header className="flex items-center justify-between">
      <Link href="/">
        <div className="font-bold text-2xl cursor-pointer">ArtiFusion</div>
      </Link>
      <div className="flex space-x-4">
        <a className="text-blue-500">About Us</a>
        <a className="text-blue-500">Features</a>
        <a className="text-blue-500">Pricing</a>
        <a className="text-blue-500">Contact</a>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={connectWallet}>
          { account ? `Connected: ${account}` : 'Connect Wallet' }
        </button>
      </div>
    </header>
  </nav>
  );
}
