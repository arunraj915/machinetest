import React, { useState } from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'

export default class ImageHeader extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        switch1Value: false
    };
    }
   
    render() {
       
        return (
            <View style={styles.container}>
                
                          <Text style={{color:'#fff',paddingRight:35,fontSize:18}}>Restaurant App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
         justifyContent: 'center',
          alignItems: 'center',
    },
    image: {
        width: 25,
        height: 25
    },

    text: {
        fontSize: 18
    }

})