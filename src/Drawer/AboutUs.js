import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class AboutUs extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.aboutText}>About Us page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'cyan',
        alignItems:'center',
        justifyContent:'center',
    },
    aboutText : {
        fontSize:50,
        fontWeight:'bold',
    }
})