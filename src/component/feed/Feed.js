import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findallMYFollowPost2Fetch,
  findallMYFollowPostFetch,
  findallPostFetch,
  findMyPostFetch,
} from "../../store/features/PostSlice";
import { findbyTokenwithAxios } from "../../store/features/UserSlice";
import Post from "../post/Post";
import Share from "../share/Share";

function Feed({ follows, id }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.postList);
  const token = useSelector((state) => state.auth.token);
  const [userId, setUserID] = useState();
  const getMyFollowPosts = async () => {
    const response = await dispatch(
      findallMYFollowPostFetch({
        token: token,
        follows: follows,
      })
    );
  };
  const getMyFollowPosts2 = async () => {
    const response = await dispatch(findallMYFollowPost2Fetch(token));
    console.log(response);
  };
  // useEffect(() => {
  //   if (follows.length > 0) {
  //     getMyFollowPosts();
  //   }
  // }, [follows]);

  const getMyPost = async () => {
    const response = await dispatch(findMyPostFetch(token));
    console.log(response);
    setUserID(response?.payload[0].userId);
  };
  useEffect(() => {
    getMyFollowPosts2();
  }, [token]);

  useEffect(() => {
    setUserID(id);
    if (userId === id) {
      getMyPost();
      console.log(posts);
    }
  }, [userId]);
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
