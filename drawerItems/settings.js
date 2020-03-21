import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Settings = () => {
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'500', marginTop:30,paddingHorizontal:15}}>About DEJAYS</Text>
            <View style={styles.itemContainer}>
                <Text style={{fontWeight:'bold', color:'grey'}}>Our Services</Text>
                <Text style={{fontWeight:'bold', color:'grey'}}>Terms and Conditions</Text>
                <Text style={{fontWeight:'bold', color:'grey'}}>FAQ</Text>
            </View>
            <Text style={{fontWeight:'500', marginTop:10,paddingHorizontal:15}}>Settings</Text>
            <View style={styles.itemContainer}>
               <Text style={{fontWeight:'bold', color:'grey'}}>Push Notifications</Text>
                <Text style={{fontWeight:'bold', color:'grey'}}>Country</Text>
                <Text style={{fontWeight:'bold', color:'grey'}}>Language</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"whitesmoke",
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

export default Settings;