
import React from 'react';
import { Dimensions, Alert, SafeAreaView, StyleSheet,View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import colors from '../../utils/colors';

import TextInputComponent from '../../components/textInput'
import {LoadingIndicator} from "../../components/LoadingIndicator";

   export default class PincodeForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        pincode: "",
        isLoading: false,
    };
   }

   componentDidMount() {
   }
   namvalidation = (name) => {
    const re = /^[1-9][0-9]{5}$/;
   if((name.match(re))){
     return true;
   }else{
    return false;
   }
  }
  validateDetails = () => {
    switch (true) {
        case this.state.pincode.trim() === "": {
          this.showAlert1("Enter Pin code.")
            return false
        }
          case (!this.namvalidation(this.state.pincode)): {
          this.showAlert1("Enter Valid Pincode.")
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
      
      navigate('RestaurantList', {param: this.state.pincode });
     
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
         
    <TextInputComponent keyboardType={"numeric"} isSecure={false} placeholder={"Enter Pin code"} maxLength={6} value={this.state.pincode} onChangeText={(text) => this.setState({ pincode: text })} isShowDrawable={false} />
      </View>
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

