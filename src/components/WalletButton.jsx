import { useState } from "react";
import Link from "next/link";
import { config } from "@onflow/fcl";

config()
  .put("accessNode.api", "https://access-testnet.onflow.org") // Access Node address
  .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app") // Flow wallet address
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn"); // FCL Discovery Service

const WalletButton = ({ onClick, account, walletType }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="bg-blue-500 text-white px-2 py-2 rounded w-auto overflow-ellipsis overflow-hidden"
          onClick={account ? () => setOpen(!open) : onClick}
        >
           {account ? `Connected: ${account}` : `Connect ${walletType}`}
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
