import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header Section */}
      <header className="flex items-center justify-between p-5 bg-white">
        <div className="font-bold text-2xl">ArtiFusion</div>
        <nav className="space-x-4">
          <a className="text-blue-500">About Us</a>
          <a className="text-blue-500">Features</a>
          <a className="text-blue-500">Pricing</a>
          <a className="text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to ArtiFusion</h1>
        <p className="text-xl mb-8">
          Empowering writers with AI assistance and collaboration tools.
        </p>
        <button className="btn btn-primary">Start Writing Now</button>
      </section>

      {/* The rest of your sections go here */}
    </div>
  );
}
