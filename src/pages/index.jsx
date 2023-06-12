import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import styles from "./Home.module.css";
import Image from "next/image";
import DemoDropdown from "@/components/DemoDropDown";
import { MyAppContext } from "./_app";

function Home() {
  const [state, setState] = useState({
    showFirstImage: true,
    showSecondImage: false,
    showText: false,
  });

  const [theme, setTheme] = useState("");

  const { contract, account } = useContext(MyAppContext);

  console.log("+++++Home ~ contract:", contract);

  const getTheme = async () => {
    try {
      const theme = await contract?.methods
      ?.changeTheme()
      .send({ from: account })
      console.log("______theme:", theme);
      setTheme(theme);
    } catch (error) {
      console.log(error);
    }
  };

  const changeTheme = async () => {
    try {
      await contract?.methods?.changeTheme().send({ from: account });
      getTheme();
    } catch (error) {
      console.log(error);
    }
  };


  // useEffect(() => {
  //   const axios = require('axios')
  //   const data = JSON.stringify({
  //     // callbackURL: 'https://....', // Optional
  //     prompt: 'technology, 8k, --ar 3:2',
  //   })

  //   const config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'YOUR_API_BASE_URL/imagine',
  //     headers: {
  //       Authorization: '535e2bcd-475c-4208-b915-f8a025f7d155',
  //       'Content-Type': 'application/json',
  //     },
  //     data: data,
  //   }

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        showFirstImage: false,
        showSecondImage: true,
      }));
    }, 5000);

    const timer2 = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        showSecondImage: false,
        showText: true,
      }));
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
          <Image
            className={`${styles["animate-slide"]} ${styles["animate-fadeInOut"]} object-cover w-full  absolute z-10`}
            src="/inspiration.png"
            alt="Inspiration"
            width={1280}
            height={720}
          />
        )}
        {state.showSecondImage && (
          <Image
            className={`${styles["animate-slide"]} ${styles["animate-fadeInOut"]} object-cover w-full  absolute z-10`}
            src="/inspiration2.png"
            alt="Inspiration2"
            width={1280}
            height={720}
          />
        )}
        {state.showText && (
          <div className="text-center p-10 z-20 absolute text-white">
            <h1
              className={`${styles["inspiration-gradient"]} text-4xl font-bold mb-4`}
            >
              &quot;Inspiration&quot;
            </h1>
            <Link href="./dashboard">
              <button className="btn btn-primary">
                Create on Today&apos;s theme
              </button>
            </Link>
          </div>
        )}
      </section>
      <div className="mt-28">
        <section
          className="p-10 h-screen/2 flex items-center justify-center bg-opacity-50 x-10 z-10 "
          style={{ backgroundImage: "url('/background1.png')" }}
          id="our-story"
        >
          <div className="w-4/5">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Story</h2>
            <button onClick={getTheme}>get Theme From Chainlink</button>
            <p className="text-xl mb-8 text-gray">
              ArtiFusion is a studio for all writers and creators to get
              inspiration, motivation, and fund-raising opportunity on Web3
              universe. With out AI-driven support tool such as AI streaming, AI
              assistance, we will support your creative work and helps it to be
              automated as much as possible.
            </p>
            <div className="flex w-auto">
              <Link href="/gallery">
                <button className="btn bg-primary border-transparent flex-end">
                  Read Novel
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Company Section  */}
        <section
          className="p-10 h-screen/2 flex items-center justify-center bg-opacity-50 x-10 z-50 m-10"
          style={{ backgroundImage: "url('/background1.png')" }}
        >
          <div id="demo">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="text-xl mb-8 text-gray">
              Our mission at ArtiFusion is to ease the burden for creators as
              much as possible and inspire everyone to become storytellers of
              dreams, future, and potential. We aim to break down the barriers
              between ideas and execution, empowering creators to turn their
              thoughts and inspirations into reality. By equipping everyone with
              the tools to tell their stories, we hope to move forward together
              into a future of enhanced creative productivity.
            </p>
            <Link href="/dashboard">Try Demo</Link>
          </div>
        </section>

        {/* Company Section 3 */}
        <section
          className="p-10 h-screen/2 flex items-center justify-center bg-opacity-50 x-10 z-10"
          style={{ backgroundImage: "url('/background1.png')" }}
        >
          <div className="w-4/5">
            <h2 className="text-3xl font-bold mb-4 text-gray">Our Team</h2>
            <p className="text-xl mb-8 text-gray">
              Our team at ArtiFusion is a diverse group of highly technical
              members and creative individuals. With a unique blend of skills in
              technology, storytelling, and art, we are driven by a shared
              passion for creativity and innovation. Our commitment to
              technology and creativity enables us to build tools that help
              automate creative processes, giving our users the freedom to focus
              on what matters most - creating incredible content and telling
              compelling stories.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
