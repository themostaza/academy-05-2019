import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";

import { posts as postsMock } from "../mocks/hackernews";

class PostDetailScreen extends React.Component {
  render() {
    const postId = this.props.navigation.getParam(
      "postId",
      "NotFound"
    );
    const post = postsMock.find(
      p => p.id === postId
    );

    return (
      <ScrollView>
        <Text>{`${post.title}`}</Text>
        {post.kids.map(p => (
          <Text
            key={p}
            style={{ fontSize: 18 }}
          >{`${p}`}</Text>
        ))}
      </ScrollView>
    );
  }
}

export default PostDetailScreen;

PostDetailScreen.navigationOptions = {
  title: "Detail"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  postContainer: {
    marginHorizontal: 20
  },
  postTitle: {
    color: "black",
    fontSize: 25
  },
  separator: {
    justifyContent: "center",
    alignItems: "center"
  }
});
