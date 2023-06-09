import React from "react";
import WriterInterface from "@/components/WriterInterface";
import Navbar from "@/components/Header";
import RightNavbar from "@/components/RightNavbar";
const dashboard = () => {
  return (
    <>
      <Navbar />
      <RightNavbar></RightNavbar>

      <WriterInterface />
    </>
  );
};

export default dashboard;
