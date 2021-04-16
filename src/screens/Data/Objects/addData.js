import React from 'react'
import {Button, TextInput, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from '../styles';
import Show from './getData';

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description: "",
            date: new Date()
        };
    }

    onButtonClick(){
        if(this.state.name !== undefined || this.state.description !== undefined || this.state.date !== undefined){
            alert("Not enough data")
        }
        else{
            this.addToDatabase();
        }
    }

    addToDatabase(){
        fetch('http://178.235.60.107:8000/add?name=' + this.state.name + '&description=' + this.state.description + '&date=' + this.state.date.getFullYear() + "-" + this.state.date.getMonth() + "-" + this.state.date.getDate(),{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => { 
            if(data == "ok"){
                alert("Added");
            }
            else{
                alert("En error");
            }
        })
        .catch(err => console.error(err));        
    }


    render() {
        return (
        <React.Fragment>
            <TextInput style = {styles.input} placeholder='name' onChangeText={text => this.setState({ name: text })} ></TextInput >
            <TextInput style = {styles.input} placeholder='description' onChangeText={text => this.setState({ description: text })} ></TextInput >
            <View style = {styles.data_container}>
              <DatePicker style = {styles.date} mode="date" androidVariant="nativeAndroid" date={this.state.date} onDateChange={date => this.setState({ date : date })} ></DatePicker >  
            </View>
            <Button onPress={this.onButtonClick.bind(this)} title="Add"></Button>
            {<Show/>}
        </React.Fragment>
        );
    }
}

export default Add;