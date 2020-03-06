import React from 'react';
import { View, Text,Image } from 'react-native';

const Phones = () => {
    return(
        <View>
            <Image source={require('../assets/phone.jpg')} style={{width:70, height:70}}  />
            <Text> Items</Text>
        </View>
    );
};

export default Phones;