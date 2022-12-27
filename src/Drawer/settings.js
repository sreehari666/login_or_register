import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class Settings extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.settingsText}>Settings page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center',
    },
    settingsText : {
        fontSize:50,
        fontWeight:'bold',
    }
})