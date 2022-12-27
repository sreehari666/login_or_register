import React,{Component} from "react";
import {
    View, Text,StyleSheet,ActivityIndicator,TouchableHighlight,FlatList,
} from 'react-native';
import axios from "axios";

export default class Chats extends Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            DATA:[],
        }
    }

    getData(){
        this.setState({loading : true})
        fetch('http://universities.hipolabs.com/search?country=United+States')
        .then((response)=>response.json())
        .then((response)=>{
            this.setState({loading :false})
            this.setState({DATA: response})
            console.log(response)
        }).catch((error)=>{
            this.setState({loading :false})
            console.log(error)
        })
    }

    getAxiosData(){
        this.setState({loading :true})
        axios.get('http://universities.hipolabs.com/search?country=United+States')
        .then((response)=>{
            this.setState({loading :false})
            this.setState({DATA: response.data})
            console.log(response)
        }).catch((error)=>{
            this.setState({loading :false})
            console.log(error)
        })
    }

    render(){
        const renderItem = ({item}) => (
            <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={{marginLeft:10,color:'blue'}}>{item.domains[0]}</Text>
                <Text style={{marginLeft:10,marginBottom:10,}}>{item.country}</Text>
            </View>
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size={50} color='green' animating={this.state.loading} />

        
                <TouchableHighlight style={styles.button} onPress={()=> this.getData()}>
                    <Text style={styles.buttonText}>Fetch load</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={()=> this.getAxiosData()}>
                    <Text style={styles.buttonText}>Axois load</Text>
                </TouchableHighlight>
                
                <FlatList
                style={styles.flatList}
                data={this.state.DATA}
                renderItem={renderItem} />

                {/* <Text style={styles.cartText}>Chats page</Text> */}
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
    },
    button : {
        height:50,
        width:'50%',
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    buttonText : {
        fontSize: 18,
        fontWeight:'bold',
        color:'#fff',
    },
    flatList : {
        width:'90%',
        marginTop:20,
    },
    itemContainer : {
        width:'100%',
        backgroundColor:'#eee',
        elevation:4,
        marginTop:10,
        borderRadius:5,
        

    },
    title : {
        color : 'black',
        fontSize:18,
        marginLeft:10,
        marginTop:10,
    }
})