import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const redirectToCollectionPage = (history, title) => {
  history.push(`/shop/${title.toLowerCase()}`);
};

const MenuItem = ({ title, imageUrl, size, history }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => redirectToCollectionPage(history, title)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
