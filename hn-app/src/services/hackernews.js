import { posts as postsMock } from "../mocks/hackernews";
import keysConfig from "../config/keys";

const getPosts = async () => {
  if (keysConfig.USE_MOCK) {
    console.log("Using mock data");
    return Promise.resolve(postsMock);
  }

  const result = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const postsId = await result.json();

  const promises = postsId
    .slice(0, 9)
    .map(postId => getItem(postId));

  const posts = await Promise.all(promises);
  return posts;
};

const getItem = async postId => {
  const result = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${postId}.json`
  );
  return await result.json();
};

export default {
  getPosts
};
