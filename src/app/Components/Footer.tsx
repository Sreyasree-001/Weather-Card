"use client";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:space-x-1">
        <p className="text-gray-600 font-light self-center text-center">
          Made by Sreyasree
        </p>
        <p className="text-gray-600 font-light self-center text-center">
          © Copyright {date.getFullYear()} All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
