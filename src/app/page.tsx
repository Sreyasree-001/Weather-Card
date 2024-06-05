"use client";

import Card from "./Components/Card";
import Header from "./Components/Header";

export default function Home() {
  return (
    <>
    
      <div className="bg-indigo-950 h-screen w-screen text-white flex flex-col">
      <div>
          <Header/>
        </div>
      <div className="self-center mt-10">
        <Card/>
      </div>
      </div>
    </>
  );
}
