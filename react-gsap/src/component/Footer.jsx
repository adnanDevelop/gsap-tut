import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-[#448c74] py-4">
      <p className="text-white">
        © All rights reserved by{" "}
        <a
          href="https://adnandev.netlify.app"
          target="_blank"
          className="text-white"
        >
          Adnan Tariq
        </a>
      </p>
    </footer>
  );
};

export default Footer;
