import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from "react-native";

import { posts as postsMock } from "../mocks/hackernews";

function Post(props) {
  return (
    <View
      style={[
        styles.postContainer,
        {
          backgroundColor: props.isSelected
            ? "gray"
            : "white"
        }
      ]}
    >
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            "Hai premuto",
            props.item.title,
            [
              {
                text: "OK",
                onPress: props.onPress
              },
              {
                text: "Vai al post",
                onPress: props.goToDetail
              }
            ]
          )
        }
      >
        <Text style={styles.postTitle}>
          {props.item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Separator(props) {
  return (
    <View style={styles.separator}>
      <Text>---</Text>
    </View>
  );
}

class LinksScreen extends React.Component {
  state = {
    selectedPostId: null
  };

  render() {
    return (
      <FlatList
        data={postsMock}
        renderItem={({ item }) => (
          <Post
            item={item}
            onPress={() =>
              this.setState({
                selectedPostId: item.id
              })
            }
            isSelected={
              this.state.selectedPostId ===
              item.id
            }
            goToDetail={() =>
              this.props.navigation.navigate(
                "PostDetail",
                { postId: item.id }
              )
            }
          />
        )}
        keyExtractor={(item, index) =>
          `${item.id}`
        }
        ItemSeparatorComponent={() => (
          <Separator />
        )}
      />
    );
  }
}

export default LinksScreen;

LinksScreen.navigationOptions = {
  title: "Posts List"
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
