import React,{Component} from "react";
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Image,
} from 'react-native';

export default class Register extends Component{
    componentDidMount(){
        console.log(this.props.route.params.username)
    }
    render(){
        return(
            <View>
                 <ImageBackground source={require('../assets/bg.webp')} style={styles.container}>
                 <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                    <Text style={styles.registerText}>Register</Text>
                    <TextInput style={styles.input} placeholder="Enter Name" value={this.props.route.params.username}></TextInput>
                    <TextInput style={styles.input} placeholder="Enter Email"></TextInput>
                    <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true}></TextInput>
                    <View style={styles.phoneContent}>
                        <TextInput style={styles.inputPhoneSmall} placeholder="+91" maxLength={2}></TextInput>
                        <TextInput style={styles.inputPhone} placeholder="Enter Phone number" maxLength={10}></TextInput>

                    </View>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} onPress={()=> this.props.navigation.navigate('Drawer')}>
                        <Text style={styles.buttonText}>Click Here</Text>
                    </TouchableHighlight>
                   
                 </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        height:'100%',
        width : '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerText : {
        fontSize:20,
        fontWeight:'bold',
    },
    logo : {
        height:100,
        width:100,
    },
    input : {
        height:50,
        width:'80%',
        borderWidth:1,
        borderRadius:5,
        marginTop:20,
        paddingLeft:20,

    },
    inputPhone : {
        height:50,
        width:'60%',
        borderWidth:1,
        borderRadius:5,
        marginTop:20,
        paddingLeft:20,
    },
    inputPhoneSmall : {
        height:50,
        width:'20%',
        borderWidth:1,
        borderRadius:5,
        marginTop:20,
        paddingLeft:20,
        marginRight:3,
    },
    phoneContent : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button : {
        height:50,
        width:'80%',
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:20,
    },
    buttonText: {
        fontWeight:'bold'
    }


})