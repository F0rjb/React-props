import React from "react";
import Profile from "./componants/profile/Profile";
import PropTypes from "prop-types";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Profile
        name="Ahmed Nasri"
        address="City Of Bassatine"
        source="/pp.jpg"
        profession="Geomatics and Landsurveying Eng"
      ></Profile>
    </div>
  );
}
Profile.PropTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};
