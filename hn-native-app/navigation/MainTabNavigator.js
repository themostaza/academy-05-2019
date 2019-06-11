import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import PostsListScreen from "../screens/PostsListScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${
              focused ? "" : "-outline"
            }`
          : "md-information-circle"
      }
    />
  )
};

const PostsStack = createStackNavigator({
  PostsList: PostsListScreen,
  PostDetail: PostDetailScreen
});

PostsStack.navigationOptions = {
  tabBarLabel: "Posts",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "ios-pizza"
          : "md-pizza"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "ios-options"
          : "md-options"
      }
    />
  )
};

export default createBottomTabNavigator({
  PostsStack,
  HomeStack,
  SettingsStack
});
