
import React from 'react';
import { Dimensions, Alert, ScrollView, StyleSheet,View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import colors from '../../utils/colors';
import { Card } from 'react-native-elements';

   export default class RestaurantList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
           isFetching: false,
              data: [{
            image: 'https://img.freepik.com/free-photo/delicious-grilled-burgers_62847-14.jpg?w=2000',
            title: 'Restaurant1',
            desc:'Restaurant1 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
       {
            image: 'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg',
            title: 'Restaurant2',
            desc:'Restaurant2 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg',
            title: 'Restaurant3',
            desc:'Restaurant3 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://cbsnews1.cbsistatic.com/hub/i/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/istock000044051102large.jpg',
            title: 'Restaurant4',
            desc:'Restaurant4 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/919487255/tandoori-chicken-indian-food.jpg',
            title: 'Restaurant5',
            desc:'Restaurant5 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg',
            title: 'Restaurant6',
            desc:'Restaurant6 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://d4t7t8y8xqo0t.cloudfront.net/app/eazymedia/group%2F6154%2Fmenu1020200625174818.jpg',
            title: 'Restaurant7',
            desc:'Restaurant7 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://www.rewardsnetwork.com/wp-content/uploads/2016/12/IndianFood_Main.jpg',
            title: 'Restaurant8',
            desc:'Restaurant8 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg',
            title: 'Restaurant9',
            desc:'Restaurant9 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://d4t7t8y8xqo0t.cloudfront.net/app/eazymedia/group%2F6154%2Fmenu320200625174818.jpg',
            title: 'Restaurant10',
            desc:'Restaurant10 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://www.ezeeoptimus.com/blog/wp-content/uploads/2020/04/pexels-photo-461198.jpeg',
            title: 'Restaurant11',
            desc:'Restaurant11 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://burst.shopifycdn.com/photos/shellfish-pasta-pizza-and-italian-food.jpg',
            title: 'Restaurant12',
            desc:'Restaurant12 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://images.squarespace-cdn.com/content/v1/5acad3125417fc83115887da/1617857358024-E6NTWS9DP4SHWDM46BV8/Gaonnuri+Web+Res+076.jpg',
            title: 'Restaurant13',
            desc:'Restaurant13 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://images.prismic.io/brinker-chilis/3bf450b0-ea58-45fe-9bd5-58125719495f_FAJITAS+OLO+COMBINE+TWO+STEAK+%26+SHRIMP+HIGHRES.jpg',
            title: 'Restaurant14',
            desc:'Restaurant14 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://img.freepik.com/free-photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-new-year-holiday_127425-162.jpg',
            title: 'Restaurant15',
            desc:'Restaurant15 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         },
         {
            image: 'https://images.squarespace-cdn.com/content/v1/5ce0acd83087260001683c04/1618098061069-KZCKQYVFI84KI82T83EB/_WTS0025.jpg',
            title: 'Restaurant16',
            desc:'Restaurant16 specializes in delicious food featuring fresh ingredients and masterful preparation by the  culinary team',
            address:'23th Street,OMR road, Chennai ',
            time:'10 am to 9 pm '
         }
           ],
           pincode:'',
           refreshing:false,
       
    };
   }

    componentDidMount() {
     this.setState({
      pincode:this.props.navigation.getParam('param')
     })
   }

    getdata = async (data) => {
         const { navigate } = this.props.navigation;
   navigate('RestaurantView', {param: data });
  }
  showAlert1(msg) {  
    alert(msg);  
   }
    renderItem = ({ item, index }) => {
        return (
            <View  style={{
           paddingTop:20,     
          justifyContent: 'center',
          alignItems: 'center',
        }}>
              <TouchableOpacity onPress={() => this.getdata(item)}>
               <Card>
                  <Image source = {{uri:item.image}} style = {{ width: 250, height: 250 }}/>
                  </Card>
                    <View style={{paddingTop:10, paddingLeft:16}}><Text style={{fontSize:18}}>{item.title}</Text></View>
                    <View style={{paddingLeft:16}}><Text style={{fontSize:14}}>Pin Code : {this.state.pincode}</Text></View>
                </TouchableOpacity>
            </View>
        )
    }

   render() {
      return (
        <View
        style={{
          backgroundColor: "#fff",
          height:' 100%'
        }}
      >
  
        <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
      />
    
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

