import React from 'react';
import { View, StyleSheet, Image,Text,ImageBackground} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign,FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <View source={require('../assets/profileBackground.jpg')} style={styles.userContainer}>
                    <Image source={require('../assets/profile.jpg')} style={styles.profile} />
                    <Text style={styles.user}>Welcome {""}
                       <Text style={{fontWeight:'bold', fontFamily:'Savoye LET', fontSize:22}}>Fiifi</Text> 
                    </Text>
                    <TouchableOpacity style={styles.logout}>
                      <AntDesign name="logout" color="tomato" size={16} />
                      <Text style={{marginLeft:5, fontWeight:'400'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
                {/* Drawer section */}
                <View style={styles.drawerSection}>
                    <DrawerItem 
                        icon={() => (
                            <Ionicons 
                                name = "ios-home" 
                                size={26} 
                                color= "#30AD88"
                            />
                        )}
                        label="Home"
                        labelStyle={{color:'#30AD88'}}
                        onPress={() => props.navigation.navigate("Home")}
                    />
                    <DrawerItem 
                        icon={() => (
                            <Ionicons 
                                name = "ios-basket" 
                                size={26} 
                                color= "#30AD88"
                            />
                        )}
                        label="Basket"
                        labelStyle={{color:'#30AD88'}}
                        onPress={() => props.navigation.navigate("Basket")}
                    />
                      <DrawerItem 
                        icon={() => (
                            <FontAwesome 
                                name = "user-o" 
                                size={26} 
                                color="#30AD88"
                            />
                        )}
                        label="Account"
                        labelStyle={{color:'#30AD88'}}
                        onPress={() => {}}

                    />
                    <DrawerItem 
                        icon={() => (
                            <Ionicons 
                                name = "ios-settings" 
                                size={26} 
                                color="#30AD88" 
                            />
                        )}
                        label="Settings"
                        labelStyle={{color:'#30AD88'}}
                        onPress={() => {}}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    userContainer:{
        paddingLeft:20,
        marginTop:-50,
        height:155,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#30AD88'
    },
    profile:{
        marginTop:15,
        width:80,
        height:80,
        borderRadius:40, 
        borderWidth:1.9,
        borderColor:'white'  
    },
    user:{
        marginTop:5,
        color:'black',
        fontSize:14,
        fontWeight:'bold'
    },
    drawerSection:{
        marginTop:20
    },
    logout:{
        flexDirection:'row',
        
    }
})

export default Drawer;