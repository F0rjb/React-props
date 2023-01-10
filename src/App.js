import React from "react";
import Profile, { PImage } from "./componants/profile/Profile";
import PropTypes from "prop-types";
import { PropaneSharp } from "@mui/icons-material";

export default function App() {
  function handleName(name) {
    alert(name + "🕶");
  }
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
        source="/pp.jpg "
        profession="Geomatics and Landsurveying Eng"
        handleName={handleName}
      >
        <PImage />
      </Profile>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};
