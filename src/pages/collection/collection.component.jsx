import React from "react";

import "./collection.styles.scss";

// for using the redix
import { connect } from "react-redux";

// To get collection using the dynamicURL from the shop reducer
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, otherProps) => {
  return {
    collection: selectCollection(otherProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
