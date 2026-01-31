import React from "react";
import Link from "next/link";

interface Args {
  redirectUrl?: string;
  className?: string;
}

const Logo = ({ redirectUrl = "/", className = "" }: Args) => {
  return (
    <Link
      href={redirectUrl}
      className="inline-block"
    >
      <h3
        className={`text-3xl lg:text-5xl font-bold gradient-top-to-bottom bg-clip-text text-transparent ${className}`}
      >
        Edvanta
      </h3>
    </Link>
  );
};

export default Logo;
