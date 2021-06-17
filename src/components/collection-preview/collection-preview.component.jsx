import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = (props) => (
  <div className="collection-preview">
    <h1 className="title">{props.collection.title.toUpperCase()}</h1>
    <div className="preview">
      {console.log(props.collection.items.filter((item) => item.id < 4))}
    </div>
  </div>
);

export default CollectionPreview;
