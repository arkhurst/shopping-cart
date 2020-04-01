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
                        icon={({focused}) => (
                            <Ionicons 
                                name = "ios-home" 
                                size={26} 
                                color={focused ? "#30AD88" : "grey"} 
                            />
                        )}
                        label="Home"
                        onPress={() => {}}
                    />
                      <DrawerItem 
                        icon={({focused}) => (
                            <Ionicons 
                                name = "ios-basket" 
                                size={26} 
                                color={focused ? "#30AD88" : "grey"} 
                            />
                        )}
                        label="Basket"
                        onPress={() => {}}
                    />
                      <DrawerItem 
                        icon={({focused}) => (
                            <FontAwesome 
                                name = "user-o" 
                                size={26} 
                                color={focused ? "#30AD88" : "grey"} 
                            />
                        )}
                        label="Account"
                        onPress={() => {}}
                    />
                      <DrawerItem 
                        icon={({focused}) => (
                            <Ionicons 
                                name = "ios-settings" 
                                size={26} 
                                color={focused ? "#30AD88" : "grey"} 
                            />
                        )}
                        label="Settings"
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
        backgroundColor:'red'

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