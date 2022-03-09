import * as React from "react";
import { Link } from "gatsby";
import Company from "../../content/company/company.yaml";
import Logo from "../images/logos/black.svg";

const Header = () => {
  return (
    <header>
      <h1>
        <img id="logoHeader" src={Logo} alt={Company.name} />
      </h1>
      <h1 id="en-construction">Site en construction</h1>
    </header>
  );
};

export default Header;
