import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class Order extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.orderText}>Order page</Text>
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
    orderText : {
        fontSize:50,
        fontWeight:'bold',
    }
})