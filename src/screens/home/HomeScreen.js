
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity,View, Image, FlatList } from 'react-native';
import { BackHandler, DeviceEventEmitter ,Alert} from 'react-native'
import colors from '../../utils/colors';
var topBannerWidth = Dimensions.get('window').width
   export default class HomeScreen extends React.Component {
   constructor(props) {
      super(props);
      this.backPressSubscriptions = new Set()
   }

   componentDidMount = () => {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
 
   DeviceEventEmitter.addListener('hardwareBackPress', () => {
    if(this.props.navigation.isFocused()){
      Alert.alert(
        'Exit Application',
        'Do you want to quit application?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }, {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
        }], {
          cancelable: false
        }
      );
    }else{
      this.props.navigation.goBack(null);
    }
 
  })

   this.backPressSubscriptions.add(this.handleHardwareBack)
  }
  componentWillUnmount = () => {
  
    //console.log(this.props.navigation.state.routeName)
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
    this.backPressSubscriptions.clear()
  }

 

  insurancefun = async ($val) => {
    console.log($val)
      const { navigate } = this.props.navigation;
      navigate('InsuranceForm', {param: $val });
    }
   render() {
      return (
        <View
        style={{
          backgroundColor: "#fff",
        }}
      >
      
      <View style={{left: 0, right: 0, bottom: 0,marginTop:150,justifyContent: 'center', alignItems: 'center', backgroundColor:"#293E54"}}><Text style={{color:"#fff",padding: 6}}>&#169; ICM Insurance Brokers Pvt Ltd.,
				2022 (V 3.0) </Text></View>
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
   iconimage1: {
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
   }
})

