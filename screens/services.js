import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';


const Services = () => {
    return(
        <View style={styles.container}>
             <Text style={{fontWeight:'500', marginTop:30,paddingHorizontal:15}}>Our Services</Text>
             <View style={styles.itemContainer}>
                 <TouchableWithoutFeedback>
                     <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons name="blogger" size={25} color="#30AD88" />
                        <Text style={{marginTop:5, fontWeight:'bold',marginLeft:20}}>Internet Blog</Text>
                     </View>
                 </TouchableWithoutFeedback>
                 <TouchableWithoutFeedback>
                     <View style={{flexDirection:'row'}}>
                        <FontAwesome name="buysellads" size={25} color="#30AD88" />
                        <Text style={{marginTop:5, fontWeight:'bold',marginLeft:20}}>Advertise with us</Text>
                     </View>
                 </TouchableWithoutFeedback>
                 <TouchableWithoutFeedback>
                     <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons name="apps" size={25} color="#30AD88" />
                        <Text style={{marginTop:5, fontWeight:'bold',marginLeft:20}}>Mobile App Development</Text>
                     </View>
                 </TouchableWithoutFeedback>
                 <TouchableWithoutFeedback>
                     <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons name="web" size={25} color="#30AD88" />
                        <Text style={{marginTop:5, fontWeight:'bold',marginLeft:20}}>Website Development</Text>
                     </View>
                 </TouchableWithoutFeedback>
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'whitesmoke'
    },
    itemContainer:{
        justifyContent:'space-evenly',
        backgroundColor: "white", shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 1},
        height:200,
        width:415,
        paddingHorizontal:15,
        marginVertical:10
    },
})
export default Services;