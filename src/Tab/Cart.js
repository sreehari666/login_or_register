import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class Cart extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.cartText}>Cart page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    cartText : {
        fontSize:50,
        fontWeight:'bold',
    }
})