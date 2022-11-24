import React from "react";
import { useSelector } from "react-redux";
import Topbar from "../../component/topbar/Topbar";

function HomePage() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Topbar></Topbar>

      <div className="homeContainer">
        <div>Left bar</div>
        <div> akış </div>
        <div>right bar</div>
      </div>
    </>
  );
}

export default HomePage;
