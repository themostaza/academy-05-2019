import { posts as postsMock } from "../mocks/hackernews";
import keysConfig from "../config/keys";

let savedPosts = null;

const fetchPosts = async () => {
  if (keysConfig.USE_MOCK) {
    console.log("Using mock data");
    await new Promise((res, rej) =>
      setTimeout(res, 3000)
    );
    return Promise.resolve(postsMock);
  }

  const result = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const postsId = await result.json();

  const promises = postsId
    .slice(0, 9)
    .map(postId => fetchItem(postId));

  savedPosts = await Promise.all(promises);
  return savedPosts;
};

const fetchItem = async postId => {
  const result = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${postId}.json`
  );
  return await result.json();
};

const getPosts = () => {
  return savedPosts;
};

export default {
  fetchPosts,
  getPosts
};
