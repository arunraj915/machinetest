import React, {Component} from 'react';
import { Image, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from "./src/screens/home/HomeScreen";
import LoginForm from "./src/screens/login/login";
import PincodeForm from "./src/screens/pincode/pincode";
import RegisterForm from "./src/screens/register/register";
import RestaurantList from "./src/screens/restaurantlist/restaurantlist";
import RestaurantView from "./src/screens/restaurantview/restaurantview";
import ImageHeader from './src/screens/header';

const navigationOptions = ({ navigation }) => ({
  headerTitle: <ImageHeader/>,
  headerStyle: {
    backgroundColor: '#000'
  },
})

const RootStack = createStackNavigator({
  
  
     HomeScreen: { screen: HomeScreen,navigationOptions: {
    
    } }, 
    LoginForm: { screen: LoginForm,navigationOptions: {
      header: null,
    }},  
    PincodeForm: { screen: PincodeForm,navigationOptions: {
      header: null,
    }},    
    RegisterForm: { screen: RegisterForm,navigationOptions: {
      header: null,
    }},  
    RestaurantList: { screen: RestaurantList,navigationOptions},  
    RestaurantView: { screen: RestaurantView,navigationOptions},  
  
  },
  {
    initialRouteName: 'LoginForm',
  }
);

const App = createAppContainer(RootStack);
export default App;
