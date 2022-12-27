import React,{Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
} from 'react-native';

import axios from "axios";


export default class Calls extends Component{

    constructor(){
        super();
        this.state = {
            loader: false,
            DATA : [],
        }
    }

    getData(){
        this.setState({loader: true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response)=>response.json())
        .then((response)=>{
            if(response.length > 0){
                this.setState({DATA : response})
            }
            console.log(response)
            this.setState({loader :false})
            
        })
        .catch((error)=>{
            console.log(error)
            this.setState({loader: false})
        })
    }

    getAxiosData(){
        this.setState({loader: true})
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((response)=>{
            this.setState({loader:false})
            console.log(response)
        }).catch((error)=>{
            this.setState({loader:false})
            console.log(error)
        })
    }

    componentDidMount(){
        this.getData()
    }

    render(){

        const renderItem = ({item}) =>(
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
        )

        return(
            <View style={styles.container}>
                <ActivityIndicator size={50} color='blue' animating={this.state.loader} />
                <Text onPress={()=>this.getAxiosData()}>Click here</Text>
                <FlatList
                style={{width:'90%',marginTop: 10,}}
                data={this.state.DATA}
                renderItem={renderItem} />


                {/* <Text style={styles.cartText}>Calls page</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#eeeeee',
        alignItems:'center',
        justifyContent:'center',
    },
    cartText : {
        fontSize:50,
        fontWeight:'bold',
    },
    itemContainer : {
        width:'100%',
        marginTop:10,
        backgroundColor:'#ffffff',
        elevation:5,
        padding:10,
    },
    itemTitle : {
        fontSize :18,
        fontWeight:'bold',
    },
    itemDescription : {
        fontSize:14,
        color:'#369'
    }
})