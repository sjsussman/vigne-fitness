import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";

const Navigationlinks = () => {
  return (
    <>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/mission">
        Our Mission
      </Link>
      <Link className="link" to="/shop">
        Shop
      </Link>
      <Link className="link" to="/inquiries">
        Inquiries
      </Link>
    </>
  );
};

export default Navigationlinks;
