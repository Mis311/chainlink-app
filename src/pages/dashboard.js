import React from "react";
import WriterInterface from "@/components/WriterInterface";
import Header from "@/components/Header";

import Link from "next/link";
const dashboard = () => {
  return (
    <>
  
  <nav className="bg-white p-4 sticky top-0 z-50">
    <header className="flex items-center justify-between">
      <Link href="/">
        <div className="font-bold text-2xl">ArtiFusion</div>
      </Link>

    </header>
  </nav>
    
        <WriterInterface />
  
    </>
  );
};

export default dashboard;
