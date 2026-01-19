import React from "react";
import Link from "next/link";

interface Args {
  redirectUrl?: string;
}

const Logo = ({ redirectUrl = "/" }: Args) => {
  return (
    <Link href={redirectUrl}>
      <h3 className="text-3xl lg:text-5xl font-bold gradient-top-to-bottom bg-clip-text text-transparent">
        Edvanta
      </h3>
    </Link>
  );
};

export default Logo;
