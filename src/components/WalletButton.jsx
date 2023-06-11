import { useState } from 'react';
import Link from 'next/link';

const WalletButton = ({ onClick, disconnect, account }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-40 overflow-ellipsis overflow-hidden"
          onClick={account ? () => setOpen(!open) : onClick} 
        >
          {account ? `Connected: ${account}` : "Connect Wallet"}
        </button>
      </div>

      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">

            <Link href="/all-stories">
              <p
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Start Fundraising
              </p>
            </Link>
          </div>

      )}
    </div>
  );
};

export default WalletButton;
