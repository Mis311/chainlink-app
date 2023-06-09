const WalletButton = ({ onClick, account }) => (
    <button className="bg-blue-500 text-white px-4 py-2 rounded w-40 overflow-ellipsis overflow-hidden" onClick={onClick}>
      { account ? `Connected: ${account}` : 'Connect Wallet' }
    </button>
  );

  export default WalletButton;