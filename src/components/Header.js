import Link from "next/link";

const Header = () => (
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Connect Wallet</button>
      </div>
    </header>
  </nav>
);

export default Header;
