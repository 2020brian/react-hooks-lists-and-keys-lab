import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkselements = links.map((string, index) => {
    return <div key={index} index= {linkselements}>
     
     <a href="#home" key={0}>home</a>
     <a href="#about" key={1}>home</a>
     <a href="#projects" key={2}>home</a>
     </div>;
  });

  
}

export default NavBar;
