import React from "react";
import { connect } from "react-redux";
import { remFeature } from "../actions";
import AddedFeature from "./AddedFeature";

const AddedFeatures = ({ car, remFeature }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map((item) => (
            <AddedFeature
              key={item.id}
              feature={item}
              handleClick={() => remFeature(item)}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps, { remFeature })(AddedFeatures);
