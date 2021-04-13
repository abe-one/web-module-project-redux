import React from "react";

const AddedFeature = ({ feature, handleClick }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
