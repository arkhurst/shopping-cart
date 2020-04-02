import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Loading = ({navigation}) => {

    React.useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate('Login')
        },2000)
    })
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/dejaysblog-large.png')} />
            <Text style={styles.mainText}>Dejays Store</Text>  
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#30AD88",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:120,
        height:120
    },
    mainText:{
        fontSize:34,
        fontWeight:'bold',
        color:'#fff'
    }
})
export default Loading;