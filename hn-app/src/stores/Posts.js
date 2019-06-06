import { observable } from "mobx";

import hackernewsService from "../services/hackernews";

class Posts {
  @observable isLoading = false;
  @observable entries = [];

  constructor() {
    this.fetchEntries();
  }

  fetchEntries = async () => {
    this.isLoading = true;
    this.entries = await hackernewsService.fetchPosts();
    this.isLoading = false;
  };
}

export default Posts;
