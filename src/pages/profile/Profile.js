import { Feed } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rightbar from "../../component/rightbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import { findbyTokenwithAxios } from "../../store/features/UserSlice";

import "./profile.css";

function Profile() {
  const id = useSelector((state) => state.user.userProfile.id);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userProfile);
  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios(token));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{"user.username"}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed id={id} />
            <Rightbar profile={"user"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
