
import React from 'react';
import { Dimensions, Alert, SafeAreaView, StyleSheet,View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import colors from '../../utils/colors';

import TextInputComponent from '../../components/textInput'
import {LoadingIndicator} from "../../components/LoadingIndicator";

   export default class LoginForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        isLoading: false,
    };
   }

   componentDidMount() {
   }
 
  validateDetails = () => {
    switch (true) {
        case this.state.username.trim() === "": {
          this.showAlert1("Enter Username.")
            return false
        }
        case this.state.password.trim() === "": {
          this.showAlert1("Enter Password")
            return false
        }
        default : {
            return true;
        }

    }
  }
  showAlert1(msg) {  
  
    alert(msg);  
}
  sumbitfun = async () => {
   const { navigate } = this.props.navigation;
   
    if (this.validateDetails()) {
       if((this.state.username=='admin')&&(this.state.password=='12345')){
      navigate('PincodeForm');
       }else{
 this.showAlert1("Enter Correct Username and Password")
       }
    }
  }

   render() {
      return (
        <View
        style={{
          backgroundColor: "#fff",
          height:' 100%'
        }}
      >
        <View
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
          <Image resizeMode="contain" source={require('../../assets/logo.png')} style={{paddingTop:250}} />
         </View>
           <View
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         
    <TextInputComponent  isSecure={false} placeholder={"Enter Your User Name"} maxLength={60} value={this.state.username} onChangeText={(text) => this.setState({ username: text })} isShowDrawable={false} />
      </View>
  <View
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    <TextInputComponent isSecure={true} placeholder={"Enter Your Password"} maxLength={20}  value={this.state.password}
      onChangeText={(text) =>  this.setState({ password: text })}  isShowDrawable={false} />
    </View>
    <View style={{paddingLeft:285}}>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterForm')}>
                     <Text style={styles.register}>Register</Text>
                  </TouchableOpacity></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
           
     <TouchableOpacity  onPress={() => this.sumbitfun()} style={{
                backgroundColor: "#DC583C",
                paddingBottom: 10,
                paddingTop: 10,
                paddingStart: 20,
                paddingEnd: 20,
                borderRadius: 10,
                marginLeft:15,
                marginTop:20
              }}
            >
              <Text style={{color:'#fff'}}>Login</Text>
            </TouchableOpacity>
      </View> 
      {this.state.isLoading ? (
      <View style={styles.loading}>
            <LoadingIndicator  size="large" loading={true} />
            </View>) : null }
      </View> 
      
      );
    }
     


}


const styles = StyleSheet.create({
   listContainer: {
      backgroundColor: colors.white,
      alignItems: 'center',
      marginTop: 40,
      justifyContent: 'center',
      marginStart: 30,
      width: '40%',
      paddingTop: 25,
      paddingBottom: 25,
      shadowColor: "#010000",
      shadowOffset: {
         width: 0,
         height: 0
      },
      shadowRadius: 1,
      shadowOpacity: 1,
      elevation: 5
   },
register:{
 color:'#FF0000'
},
   list: {
      alignSelf: 'center',
      width: '100%',
   },
   title: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 10
   },
   logo: {
      height: 20,
      width: 20,
      marginStart: 20
   },
   home: {
      marginStart: 20,
      fontSize: 18,
      fontWeight: '600'
   },
   image: {
      height: 80,
      width: '98%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   iconimage: {
      height: 80,
      width: 52,
      marginLeft: 60,
      justifyContent: 'center',
      alignItems: 'center',
   },
   toolbar: {
      backgroundColor: colors.white,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      shadowColor: "#010000",
      shadowOffset: {
         width: 0,
         height: 0
      },
      shadowRadius: 2.5,
      shadowOpacity: 1,
      elevation: 2
   },
   loading: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

