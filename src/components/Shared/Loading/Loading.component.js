import React from "react";

import "./Loading.styles.scss";

const Loading = ({ show }) => {
  return (
    <div className="loading lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
