import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findallPostFetch } from "../../store/features/PostSlice";
import Post from "../post/Post";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.postList);

  const getAllPost = async () => {
    const response = await dispatch(findallPostFetch());
    console.log(response);
  };
  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Post></Post>
      </div>
    </div>
  );
}

export default Feed;
