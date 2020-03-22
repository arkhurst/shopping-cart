import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

const Profile = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={{marginLeft:15, fontWeight:'bold'}}>Welcome...</Text>
                <TouchableOpacity style={styles.button}>
                   <Text style={{fontWeight:'bold', color:'white'}}>Login/Sign in</Text>
                </TouchableOpacity>
            </View>
             <Text style={{fontWeight:'bold', marginTop:10,paddingHorizontal:15, color:'grey'}}>MY ACCOUNT</Text>
            <View style={styles.itemContainer}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                   <MaterialCommunityIcons name="shopify" size={25}  />
                   <Text style={{marginTop:5, fontWeight:'bold',marginLeft:20}}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row'}}>
                   <MaterialIcons name="rate-review" size={25}  />
                   <Text style={{marginTop:5, fontWeight:'bold',marginLeft:20}}>Ratings & Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('fav')}} style={{flexDirection:'row'}}>
                   <Ionicons name="ios-heart-empty" size={25}  />
                   <Text style={{marginTop:5, fontWeight:'bold',marginLeft:20}}>Saved Items</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontWeight:'bold', marginTop:10,paddingHorizontal:15, color:'grey'}}>MY SETTINGS</Text>
            <View style={styles.itemContainer}>
               <Text style={{fontWeight:'bold'}}>Account Details</Text>
                <Text style={{fontWeight:'bold'}}>Change Password</Text>
                <Text style={{fontWeight:'bold'}}>Delete Account</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'whitesmoke'
    },
    welcome:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        backgroundColor:'#30cfbb',
        alignItems:'center'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:40,
        backgroundColor:'orange',
        marginRight:15,
        borderRadius:10
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
export default Profile;