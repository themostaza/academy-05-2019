import { decorate, observable } from "mobx";

import hackernewsService from "../services/hackernews";

class Posts {
  isLoading = false;
  entries = [];

  constructor() {
    this.fetchEntries();
  }

  fetchEntries = async () => {
    this.isLoading = true;
    this.entries = await hackernewsService.fetchPosts();
    this.isLoading = false;
  };
}

decorate(Posts, {
  isLoading: observable,
  entries: observable
});

export default Posts;
