import React from "react";
import { connect } from "react-redux";

const AdditionalFeature = ({ feature, handleClick }) => {
  return (
    <li>
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
