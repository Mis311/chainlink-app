import Link from "next/link";

const Header = () => (
  <nav className="bg-white p-4 sticky top-0 z-50">
    <header className="flex items-center justify-between">
      <Link href="/">
        <div className="font-bold text-2xl">ArtiFusion</div>
      </Link>
      <div className="space-x-4">
        <a className="text-blue-500">About Us</a>
        <a className="text-blue-500">Features</a>
        <a className="text-blue-500">Pricing</a>
        <a className="text-blue-500">Contact</a>
      </div>
    </header>
  </nav>
);

export default Header;
