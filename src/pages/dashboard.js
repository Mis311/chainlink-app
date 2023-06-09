import React from "react";
import WriterInterface from "@/components/WriterInterface";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
const dashboard = () => {
  return (
    <>
   <Header></Header>
      <WriterInterface />
      <Footer></Footer>
    </>
  );
};

export default dashboard;
