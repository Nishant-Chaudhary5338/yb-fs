import React, { useState } from "react";
import { data } from "../restApi.json";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <nav>
        <div className="logo">RUTBA-THE FINE DINING</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <a
                href={`/${element.link}`}
                key={element.id}
              >
                {element.title}
              </a>
            ))}
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
