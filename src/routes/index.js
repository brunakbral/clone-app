import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feed from "../screens/Feed";

import camera from "../../assets/camera.png";
import logo from "../../assets/logo.png";
import comment from "../../assets/comment.png";

const MainNavigator = createStackNavigator(
  {
    Feed,
  },
  {
    defaultNavigationOptions: {
      headerTitle: <Image source={logo} />,
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Image source={camera} />
        </TouchableOpacity>
      ),
      headerRight: (
        <>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image source={comment} />
          </TouchableOpacity>
        </>
      ),
    },
  }
);

export default createAppContainer(MainNavigator);
