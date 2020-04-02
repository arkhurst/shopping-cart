import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons,FontAwesome, Ionicons } from '@expo/vector-icons';


const Services = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width:32, height:32,borderRadius:16, backgroundColor:"rgba(21,22,48,0.1)", justifyContent:'center',alignItems:'center', marginLeft:20}}>
                  <Ionicons name="ios-arrow-round-back" size={32} color="#fff"  />
                </TouchableOpacity>
              ),
        });
      }, [navigation]);

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
    }
})
export default Services;