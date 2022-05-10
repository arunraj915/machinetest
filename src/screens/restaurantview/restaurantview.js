
import React from 'react';
import { Share,  StyleSheet,View, Text, TouchableOpacity, Image} from 'react-native';
import colors from '../../utils/colors';
   export default class RestaurantView extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
           isFetching: false,
           image:'',
           title:'',
           desc:'',
           address:'',
           time:'',
       
    };
   }

    componentDidMount() {
      this.setState({
       title:this.props.navigation.getParam('param').title,
      image:this.props.navigation.getParam('param').image,
      desc:this.props.navigation.getParam('param').desc,
      address:this.props.navigation.getParam('param').address,
      time:this.props.navigation.getParam('param').time,
     })
  console.log(this.props.navigation.getParam('param'));

   }
 
  
  showAlert1(msg) {  
  
    alert(msg);  
}

 onShare = async () => {
    try {
      const result = await Share.share({
        message:
         this.state.title+'\n '+this.state.desc,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

   render() {
      return (
         
        <View
        style={{
          backgroundColor: "#fff",
          height:' 100%'
        }}
      >
          <View style={{paddingTop:20,justifyContent: 'center',alignItems: 'center'}}><Image source = {{uri:this.state.image}} style = {{ width: 250, height: 250}} /></View>
  <View style={{paddingTop:10, paddingLeft:36}}><Text style={{fontSize:21}}>{this.state.title}</Text></View>
  <View style={{paddingTop:10, paddingLeft:36}}><Text style={{fontSize:18}}>{this.state.desc}</Text></View>
  <View style={{paddingTop:10, paddingLeft:36}}><Text style={{fontSize:18}}>{this.state.address}</Text></View>
  <View style={{paddingTop:10, paddingLeft:36}}><Text style={{fontSize:18}}>Opening Time :{this.state.time}</Text></View>  
  <View
        style={{
          flexDirection: "row",
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
           paddingRight: 20,
        }}
      >
           
     <TouchableOpacity  onPress={() => this.onShare()} style={{
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
              <Text style={{color:'#fff'}}>Share</Text>
            </TouchableOpacity>
      </View>
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

