import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import Link from "next/link";

function Home() {
  return (
<div>

      {/* Hero Section */}
      <section className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to ArtiFusion</h1>
        <p className="text-xl mb-8">
          Empowering writers with AI assistance and collaboration tools.
        </p>
        <Link href="./dashboard">
          <button className="btn btn-primary">Start Writing Now</button>
        </Link>
      </section>

      {/* Company Section 1 */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </section>

      {/* Company Section 2 */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl mb-8">
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>

      {/* Company Section 3 */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-xl mb-8">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium.
        </p>
      </section>

    </div>
  );
}

export default Home;
