import React from "react";

// import "./collection.styles.scss";
import {
  CollectionPageContainer,
  CollectionPageItems,
  CollectionPageTitle,
} from "./collection.styles";

// for using the redix
import { connect } from "react-redux";

// To get collection using the dynamicURL from the shop reducer
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionPageItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItems>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, otherProps) => {
  return {
    collection: selectCollection(otherProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
