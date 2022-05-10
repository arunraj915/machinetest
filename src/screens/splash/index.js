
import React from 'react';
import { View, Image, Text, StatusBar, Animated, Easing, SafeAreaView, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from "react-redux";



class SplashScreen extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isApp: false
      };
      this.springValue = new Animated.Value(1);
      this.fadeInOpacity = new Animated.Value(0);

   }

   async componentDidMount() {
      await this.onLoad();
      await this.spring();
      setTimeout(() => {
         this.navigateToHome()
      }, 3000)
   }

   navigateToHome = async () => {
      console.log(this.props.userData)
      if(this.props.userData.token != null){
         if (this.props.userData.is_profile_complete === 1) {
            this.props.navigation.navigate('HomeInitial');
            // if (this.props.userData.is_approved === 0) {
            //     Modal.alert("Well done! you have completed your profile , please wait for profile approval !")
            //     this.props.navigation.navigate('Loading');
            // } else {
            //     this.props.navigation.navigate('HomeInitial');
            // }
        } else if (this.props.userData.is_profile_complete === 0 && this.props.userData.page_status === 5) {
            this.props.navigation.navigate('HomeInitial');
        } else {
         
            switch (this.props.userData.page_status) {
                case 0:
                    this.props.navigation.navigate('SignUpStage', { data: { userData: this.props.userData, stage: 0, fromLogin: false } })
                    break;
                case 1:
                    this.props.navigation.navigate('SignUpStage', { data: { userData: this.props.userData, stage: 1, fromLogin: true } })
                    break;
                case 2:
                    this.props.navigation.navigate('SignUpStage', { data: { userData: this.props.userData, stage: 2, fromLogin: true } })
                    break;
                case 3:
                    this.props.navigation.navigate('SignUpStage', { data: { userData: this.props.userData, stage: 3, fromLogin: true } })
                    break;
                case 4:
                    this.props.navigation.navigate('SignUpStage', { data: { userData: this.props.userData, stage: 4, fromLogin: true } })
                    break;
            }

        }
        // this.props.navigation.navigate('HomeInitial')
      }else{
         this.props.navigation.navigate('Landing')
      }
   }

   onLoad = () => {
      this.fadeInOpacity.setValue(0);
      Animated.timing(this.fadeInOpacity, {
         toValue: 1,
         duration: 2000,
         useNativeDriver: true
      }).start();
   };

   spring = () => {
      this.springValue.setValue(0.9)
      Animated.spring(
         this.springValue,
         {
            toValue: 1,
            useNativeDriver: true,
            friction: 1
         }
      ).start()
   }


   render() {
      return (
         <View style={styles.container}>
            <Text>
            <Image source={require('../../assets/images/TravelMedicareSplashBG.png')}
             />

            <Image source={require('../../assets/images/TravelMedicareSplashLogo.png')}
               />
 </Text>
         </View>

      );
   }
}
const mapStateToProps = state => {
   return {
      userData: state.user.userData
   }
};

const styles = StyleSheet.create({
   container: {
   },
   icon: {
      height: 200,
      width: 200, position: 'absolute',
      alignSelf: 'center',
      top: 100
   },
   paragraph: {
      textAlign: 'center',
      marginTop: 0,
      fontSize: 24,
      color: 'black',
      fontWeight: '600'
   },

   logo: {
      height: '100%',
      width: '100%'
   }
})



export default connect(mapStateToProps, null)(SplashScreen);