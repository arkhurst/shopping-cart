import React from 'react';
import { View, Text, Button } from 'react-native';

const Categories = (props) => {
    return(
        <View style={{flexDirection:'',   backgroundColor:'#fofofo'}}>
          <View style={{flexDirection:'row',paddingHorizontal:15, marginTop:19, justifyContent:'space-between', backgroundColor:"rgba(236,231,231,0.856)", paddingLeft:5, borderRadius:20}}>
             <Text style={{marginLeft:10, fontSize:24, fontWeight:'400',marginTop:5,  textAlign:'center', color:"#40617a"}}>Categories</Text>
             <View style={{borderColor:"black", backgroundColor:'white', borderWidth:1, borderRadius:10}}>
                <Button title="View all" onPress={() => props.navigation.navigate("Product Category")}/>
             </View>
           </View>
        </View>
    );
};

export default Categories;