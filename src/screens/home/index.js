import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomeComponent from "./home";
import { View } from 'react-native';


const mapStateToProps = state => {
    return {

    }
};

const Actions = {

};



export const Home = connect(
    mapStateToProps
)(HomeComponent);



const mapStateToPropsForIcon = state => {
    return {

    }
};

const HomeTabNavigator =  createStackNavigator({

    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
  },
    {
  
      initialRouteName: "Home",
      headerMode: 'none',
      transitionConfig: () => ({
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [layout.initWidth, 0, 0]
          });
          const opacity = position.interpolate({
            inputRange: [
              index - 1,
              index - 0.99,
              index,
              index + 0.99,
              index + 1
            ],
            outputRange: [0, 1, 1, 0.3, 0]
          });
          return { opacity, transform: [{ translateX }] };
        }
      })
    }
  );



const HomeDrawerNavigation = createDrawerNavigator(
    {
        TabsNavigator: {
            screen: HomeTabNavigator
        }
    }
);

export default HomeDrawerNavigation;
