import React from "react";

// import "./shop.styles.scss";
import { ShopPageContainer } from "./shop.styles";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.url}`} component={CollectionsOverview} />
      <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  );
};

export default ShopPage;
