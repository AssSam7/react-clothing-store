import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/crown.svg";

import "./header.styles.scss";

const Header = (props) => (
  <div className="header">
    <Link lassName="logoContainer" to="" c>
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
