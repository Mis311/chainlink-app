import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-5">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
export default RootLayout;
