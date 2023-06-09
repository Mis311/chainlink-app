import Link from "next/link";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import styles from "./Home.module.css";

function Home() {
  const [state, setState] = useState({
    showFirstImage: true,
    showSecondImage: false,
    showText: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setState({ ...state, showFirstImage: false, showSecondImage: true });
    }, 5000);

    const timer2 = setTimeout(() => {
      setState({ ...state, showSecondImage: false, showText: true });
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      <section className="flex flex-col justify-center items-center h-96 relative">
        {state.showFirstImage && (
          <img
            className={`${styles["animate-slide"]} ${styles["animate-fadeInOut"]} object-cover w-full  absolute z-10`}
            src="/inspiration.png"
            alt="Inspiration"
          />
        )}
        {state.showSecondImage && (
          <img
            className={`${styles["animate-slide"]} ${styles["animate-fadeInOut"]} object-cover w-full  absolute z-10`}
            src="/inspiration2.png"
            alt="Inspiration2"
          />
        )}
        {state.showText && (
          <div className="text-center p-10 z-20 absolute text-white">
            <h1
              className={`${styles["inspiration-gradient"]} text-4xl font-bold mb-4`}
            >
              "Inspiration"
            </h1>
            <Link href="./dashboard">
              <button className="btn btn-primary">
                Create on today's theme
              </button>
            </Link>
          </div>
        )}
      </section>
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-xl mb-8">
          ArtiFusion is a studio for all writers and creators to get
          inspiration, motivation, and fund-raising opportunity on Web3
          universe. With out AI-driven support tool such as AI streaming, AI
          assistance, we will support your creative work and helps it to be
          automated as much as possible.
        </p>
      </section>

      {/* Company Section 2 */}
{/* Company Section 2 */}
<section className="p-10 h-screen/2 flex items-center justify-center bg-background1 bg-opacity-50 x-10 z-10">
  <div>
    <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
    <p className="text-xl mb-8 text-gray">
      Our mission at ArtiFusion is to ease the burden for creators as much
      as possible and inspire everyone to become storytellers of dreams,
      future, and potential. We aim to break down the barriers between
      ideas and execution, empowering creators to turn their thoughts and
      inspirations into reality. By equipping everyone with the tools to
      tell their stories, we hope to move forward together into a future
      of enhanced creative productivity.
    </p>
  </div>
</section>

{/* Company Section 3 */}
<section className="p-10 h-screen/2 flex items-center justify-center bg-background1 bg-opacity-50">
  <div>
    <h2 className="text-3xl font-bold mb-4 text-gray">Our Team</h2>
    <p className="text-xl mb-8 text-gray">
      Our team at ArtiFusion is a diverse group of highly technical
      members and creative individuals. With a unique blend of skills in
      technology, storytelling, and art, we are driven by a shared passion
      for creativity and innovation. Our commitment to technology and
      creativity enables us to build tools that help automate creative
      processes, giving our users the freedom to focus on what matters
      most - creating incredible content and telling compelling stories.
    </p>
  </div>
</section>

    </div>
  );
}

export default Home;