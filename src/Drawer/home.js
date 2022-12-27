import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.homeText}>Home page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    },
    homeText : {
        fontSize:50,
        fontWeight:'bold',
    }
})