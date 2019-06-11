import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

import { posts as postsMock } from "../mocks/hackernews";

function Post(props) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>
        {props.item.title}
      </Text>
    </View>
  );
}

function Separator(props) {
  return <View style={styles.separator} />;
}

export default function LinksScreen() {
  return (
    <FlatList
      data={postsMock}
      renderItem={({ item }) => (
        <Post item={item} />
      )}
      keyExtractor={(item, index) => `${item.id}`}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  postContainer: {
    backgroundColor: "gray"
  },
  postTitle: {
    color: "black",
    fontSize: 35
  },
  separator: {
    height: 5
  }
});
