import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2> Don't Settle For Normal | Book Royal Hotel</h2>
      <p>
        
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/RoshanCodes_"
        >
          Roshan Kumar Sharma
        </a>
      </p>
    </footer>
  );
}
