import React from 'react';
import { View, StyleSheet, Image,Text} from 'react-native';
import { DrawerContent, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons,FontAwesome } from '@expo/vector-icons';

const Drawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <View style={styles.userContainer}>
                    <Image style={styles.profile} />
                    <Text style={styles.user}>Welcome 
                       <Text style={{fontWeight:'bold', fontFamily:'SnellRoundhand',}}>Fiifi</Text> 
                    </Text>
                    <Ionicons name="ios-home" size={25} />
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
                        onPress={() => {}}
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
                        onPress={() => {}}
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
        backgroundColor:'red',
        marginTop:-50,
      

    },
    profile:{
        width:60,
        height:60,
        borderRadius:30,   
    },
    user:{
        marginTop:15
    },
    drawerSection:{
        marginTop:20
    }
})

export default Drawer;