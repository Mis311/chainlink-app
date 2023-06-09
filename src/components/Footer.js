function Footer() {
    return (
      <footer className="bg-white text-center text-sm p-5 mt-5">
        <div className="mb-5">
          <h2 className="font-bold mb-2">ArtiFusion</h2>
          <p>Empowering writers with AI assistance and collaboration tools.</p>
        </div>
        <div className="mb-5">
          <a href="#" className="text-blue-500 mx-2">Contact</a>
        </div>
        <div>
          © {new Date().getFullYear()} ArtiFusion. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  