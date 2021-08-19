import React from "react";

function Header() {
  const myParagraph = React.createElement(
    "p",
    { className: "paragraph" },
    "Hello"
  );
  const myLink = React.createElement(
    "a",
    { href: "https://reactjs.org/", target: "_blank", className: 'link' },
    "React"
  );
  return (
    <header id='main'>
      {myParagraph}
      {myLink}
    </header>
  );
}

export default Header;
