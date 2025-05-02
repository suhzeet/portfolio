import React from "react";
import Image from "next/image";
import Profile from "@/app/assets/profile.png";

function Header() {
  return (
    <div
      className="w-screen h-vp bg-cover bg-top"
      style={{ backgroundImage: `url(${Profile.src})` }}
    >
      hello
    </div>
  );
}

export default Header;
