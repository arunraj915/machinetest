
import React from 'react';
import { Dimensions, Alert, SafeAreaView, StyleSheet,View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import colors from '../../utils/colors';

import TextInputComponent from '../../components/textInput'
import {LoadingIndicator} from "../../components/LoadingIndicator";

   export default class RegisterForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        title: "",
        mobilenum: "",
        name: "",
        email: "",
        vehicleno: "",
        showDonationSuccessPopup: false,
        showDonationErrPopup: false,
        tncChecked: false,
        isLoading: false,
    };
   }

   backbtnfun(){
    this.props.navigation.goBack() 
   }


   validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  vehiclevalidation = (regno) => {
    const re = /^[A-Z]{2} [0-9]{2} [A-Z]{2} [0-9]{4}$/;
    return re.test(String(regno));
  }
  
  mobilevalidation = (number) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   if((number.match(re))){
     return true;
   }else{
    return false;
   }
  }
  namvalidation = (name) => {
    const re = /^[0-9a-zA-Z]+$/;
   if((name.match(re))){
     return true;
   }else{
    return false;
   }
  }
  validateDetails = () => {
    switch (true) {
         case this.state.name.trim() === "": {
          this.showAlert1("Enter name.")
            return false
        }
        case (!this.namvalidation(this.state.name)): {
          this.showAlert1("Enter Alphabet character only.")
            return false
        }
        case this.state.mobilenum.trim() === "": {
          this.showAlert1("Enter mobile number.")
            return false
        }
        case (!this.mobilevalidation(this.state.mobilenum)): {
          this.showAlert1("Invalid mobile number.")
            return false
        }
        case this.state.email.trim() === "": {
          this.showAlert1("Enter email address.")
            return false
        }
        case (!this.validateEmail(this.state.email)): {
          this.showAlert1("Invalid email.")
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
 
    if (this.validateDetails()) {

     this.showAlert1("Successfully Registered");
 this.props.navigation.goBack() 
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
    <TextInputComponent isSecure={false} placeholder={"Enter Your Name"} maxLength={100}  value={this.state.name}
      onChangeText={(text) =>  this.setState({ name: text })}  isShowDrawable={false} />
    </View>
           <View
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         
    <TextInputComponent keyboardType={"numeric"} isSecure={false} placeholder={"Enter Your Phone Number"} maxLength={10} value={this.state.mobilenum} onChangeText={(text) => this.setState({ mobilenum: text })} isShowDrawable={false} />
      </View>

         <View
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
    <TextInputComponent isSecure={false} placeholder={"Enter Your Email id"} maxLength={100}
     value={this.state.email} onChangeText={(text) => this.setState({ email: text })}
       isShowDrawable={false}  />
                         </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
     <TouchableOpacity  onPress={() => this.backbtnfun()} style={{
                backgroundColor: "#293E54",
                paddingBottom: 10,
                paddingTop: 10,
                paddingStart: 20,
                paddingEnd: 20,
                borderRadius: 10,
                marginRight:15,
                marginTop:20
              }}
            >
              <Text style={{color:'#fff'}}>Back</Text>
            </TouchableOpacity>
           
            
          
         
         
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
              <Text style={{color:'#fff'}}>Submit</Text>
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

