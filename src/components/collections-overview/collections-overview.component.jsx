import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(CollectionsOverview);
