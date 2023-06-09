import Link from "next/link";

const Navbar = () => (
  <nav className="bg-white p-4 sticky top-0 z-50">
    <div className="flex items-center justify-between">
      <Link href="/">
        <div className="text-xl font-bold text-blue-500">Home</div>
      </Link>
      <div className="space-x-4">

      </div>
    </div>
  </nav>
);

export default Navbar;
