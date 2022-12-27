import React,{ Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';


export default class Login extends Component{

constructor(){
    super();
    this.state = {
        name:null,
    }
}

updateValue(username){
    console.log(username)
    this.setState({
        name:username,
    })
}

  render(){
    return(
      <View>
        <ImageBackground source={require('../assets/bg.webp')} style={styles.imageBackground}>
          <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
          <Text style={styles.loginText} >Login</Text>
          
          <TextInput style={styles.input} placeholder="Enter userid" onChangeText={(username)=>this.updateValue(username)}></TextInput>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}></TextInput>
          <TouchableHighlight style={styles.button}
           onPress={()=>this.props.navigation.navigate('BottomTab',{username: this.state.name})}
           underlayColor="transparant">
        
            <Text>Login</Text>
          </TouchableHighlight>

        

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageBackground : {
    height:'100%',
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
  },
  loginText : {
    fontSize: 20,
    fontWeight: 'bold',

  },
  logo : {
    height:100,
    width:100,
  },
  input : {
    height: 55,
    width: '80%',
    borderColor: '#2ba9cc',
    borderWidth:1,
    marginTop:20,
    paddingLeft:20,
    borderRadius:5,
  },
  button : {
    width:'60%',
    height:50,
    backgroundColor:'#2ba9cc',
    marginTop:20,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  },
})