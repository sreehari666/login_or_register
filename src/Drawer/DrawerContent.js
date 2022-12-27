import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileIcon}>
                        <Image style={styles.profileImage} source={require('../../assets/logo.png')} ></Image>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.nameText}>Sreehari</Text>
                        <Text>sreeharivr855@gmail.com</Text>
                        <Text>7025464077</Text>
                    </View>
                    
                </View>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('AboutUs')}>About us</Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    menu : {
        fontSize:18,
        marginLeft:18,
        marginTop:18,
        color:'black',
    },
    profileContainer : {
        height: '25%',
        width: '100%',
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignItems:'center'
    },
    profileIcon : {
        height: 100,
        width: 100,
        backgroundColor:'#bbbbbb',
        borderRadius: 50,
        marginLeft: 20,
        marginTop: 20,

    },
    infoView : {
        marginLeft:10,
    },
    profileImage : {
        height:'100%',
        width:'100%',
        
    },
    nameText : {
        color: '#360',
        fontWeight:'bold',
        paddingBottom:5,
    }

})