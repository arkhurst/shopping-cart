import React from 'react';
import { Text, View, StyleSheet, ImageBackground,Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const Login = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                <Text style={styles.headerText}>Dejays</Text>
                <Image style={styles.image} source={require('../../assets/login_item.jpg')}/>
            </View>
            <Text style={{textAlign:'center', marginTop:20, fontWeight:'500', fontSize:25, color:'#fff'}}>Login</Text>

            {/* Form */}
            <View style={styles.form}>
                {/* Email */}
                <View>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        />
                </View>
                {/* Password */}
                <View style={{marginTop:40}}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                         style={styles.input}
                         secureTextEntry={true}
                         autoCapitalize="none"
                         />
                </View>
            </View>
            {/* Forgot password */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={{color:"#30AD88", fontSize:15, fontWeight:'bold'}}>Log in</Text>
            </TouchableOpacity>
            {/* Join Us */}
            <TouchableOpacity>
                <Text style={styles.joinUs}>Don't have an account with us? 
                  <Text style={{color:'#fff', fontWeight:'bold'}}> Sign Up</Text>
                </Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#30AD88",
    },
    image:{
      width:250,
      height:250,
      borderBottomRightRadius:150,
      borderBottomLeftRadius:120,
      borderTopLeftRadius:150,
      marginTop:-70
    },
    headerText:{
        marginTop:70,
        color:'#fff',
        fontSize:45,
        fontWeight:'bold',
        marginLeft:20,
        fontFamily:'SnellRoundhand',
    },
    form:{
        marginBottom:35,
        marginHorizontal:30,
        marginTop:20
    },
    inputLabel:{
        color:'#e4e4e4',
        fontSize:13,
        textTransform:'uppercase'
    },
    input:{
        borderBottomColor:'#e4e4e4',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:'white'
    },
    forgotPasswordContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    forgotPassword:{
        color:'white',
        fontSize:15  
    },
    loginBtn:{
       marginLeft:100,
       marginTop:20,
       width:230,
       height:40,
       backgroundColor:'#ffffff',
       borderRadius:10,
       justifyContent:'center',
       alignItems:'center'

    },
    joinUs:{
        marginTop:12,
        fontWeight:'500',
        textAlign:'center',
        color:'#e4e4e4'
    },
})

export default Login;