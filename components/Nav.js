import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link href="/">starWars API</Link>
      </div>
      <div className="mini-nav">
        <div>
          <Link href="/people">people</Link>
        </div>
        <div>
          <Link href="/planets">planets</Link>
        </div>
        <div>
          <Link href="/vehicles">vehicles</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
