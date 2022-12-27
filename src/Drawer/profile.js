import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.profileText}>Profile page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
    },
    profileText : {
        fontSize:50,
        fontWeight:'bold',
    }
})