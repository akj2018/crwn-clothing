import React from "react";

import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = (props) => {
  console.log(props.match);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
