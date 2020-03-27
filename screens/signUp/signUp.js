import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const SignUp = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row',  marginTop:60,  marginLeft:20}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width:32, height:32,borderRadius:16, backgroundColor:"white", justifyContent:'center',alignItems:'center'}}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#30AD88"  />
                </TouchableOpacity>
                <Text style={styles.headerText}>{"Start shopping with us :)"}</Text>
            </View>
            <Text style={{textAlign:'center', marginTop:20, fontWeight:'500', fontSize:25, color:'#fff', marginTop:40}}>Sign Up</Text>
            {/* Form */}
            <View style={styles.form}>
                {/* User Name */}
                <View>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        />
                </View>
                {/* Email */}
                <View  style={{marginTop:38}}>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        />
                </View>
                {/* Password */}
                <View style={{marginTop:38}}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                         style={styles.input}
                         secureTextEntry={true}
                         autoCapitalize="none"
                         />
                </View>
            </View>
            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn} onPress={ () => navigation.navigate('Home')}>
                <Text style={{color:"#30AD88", fontSize:15, fontWeight:'bold'}}>Sign up</Text>
            </TouchableOpacity>
            {/* Join Us */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.joinUs}>Already have an account with us? 
                  <Text style={{color:'#fff', fontWeight:'bold'}}> Log in</Text>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#30AD88"
    },
    headerText:{
        color:'#fff',
        fontSize:45,
        fontWeight:'bold',
        marginLeft:20,
        fontFamily:'Savoye LET',
        marginTop:-5
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
        height:38,
        fontSize:15,
        color:'white'
    },
    loginBtn:{
       marginLeft:100,
       marginTop:18,
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
export default SignUp;