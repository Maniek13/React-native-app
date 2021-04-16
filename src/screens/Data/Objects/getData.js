import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';

class Show extends React.Component{  
    constructor(props){
        super(props);
        this.state = {
            wynik: [[]]
        };
    }

    componentDidMount(){
        fetch('http://178.235.60.107:8000/select',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => { this.setState({wynik : data})})
        .catch(err => console.error(err));
    }

    render(){
        return this.state.wynik.map((data) => {
            return (
                <React.Fragment>
                    <View key={data.id} style = {styles.item}>
                        <Text >{data.name}</Text>
                        <Text >{data.description}</Text>
                        <Text >{data.date}</Text>
                    </View>
                </React.Fragment>
            )
        })   
    }
}

export default Show;



