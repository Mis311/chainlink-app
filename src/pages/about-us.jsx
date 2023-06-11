import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl mb-5 text-center">About Us</h1>

      <p className="mb-4 text-2xl">
        We are a passionate team of creatives & developers who believe in the power of words
        and stories. Our mission is to create captivating, impactful, and
        immersive experiences for our readers and support the talents of
        emerging authors.
      </p>

      <div className="gap-5 flex">
  <div className="border p-4 rounded shadow flex">
    <Image
      src="/inspiration.png"
      alt="About Us"
      width={900}
      height={300}
    />
    <div className="flex flex-col ml-4">  
      <h2 className="text-2xl mb-2">Vision</h2>
      <p className="mb-4">
        We will compose of talented writers, editors, designers, and more,
        all united by our love for storytelling and commitment to bringing
        unique narratives to life.
      </p>
          <Image
      src="/inspiration2.png"
      alt="About Us"
      width={900}
      height={600}
    />
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
