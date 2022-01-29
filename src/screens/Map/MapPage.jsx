import React from "react";
import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";

const MapPage = () => {
  return (
    <>
      <div className="map">
        <Sidebar />
        <Player />
      </div>
    </>
  );
};

export default MapPage;
