import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findallMYFollowPost2Fetch,
  findallMYFollowPostFetch,
  findallPostFetch,
  findMyPostFetch,
} from "../../store/features/PostSlice";
import {
  findbyTokenwithAxios,
  setUserIdforPosts,
} from "../../store/features/UserSlice";
import Post from "../post/Post";
import Share from "../share/Share";

function Feed({ id }) {
  const dispatch = useDispatch();
  const otherPostList = useSelector((state) => state.post.postList);
  const myPostList = useSelector((state) => state.post.myPostList);
  const token = useSelector((state) => state.auth.token);
  const currentUserId = useSelector((state) => state.user.currentUserId);
  const posts = id === "" || currentUserId == null ? otherPostList : myPostList;

  const getMyFollowPosts2 = async () => {
    const response = await dispatch(findallMYFollowPost2Fetch(token));
    console.log(response);
  };

  const getMyPost = async () => {
    const response = await dispatch(findMyPostFetch(token));
  };

  useEffect(() => {
    if (id == "" || currentUserId == null) {
      getMyFollowPosts2();
    } else {
      getMyPost();
    }
  }, [currentUserId]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
        {posts?.map((p) => (
          <Post key={p.id} post={p}></Post>
        ))}
      </div>
    </div>
  );
}

export default Feed;
