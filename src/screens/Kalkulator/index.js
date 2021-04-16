import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import styles from './styles';


const Kalkulator = () => {
   
const[wynik, setWynik] = useState("0");
const[temp, setTemp] = useState("0");
const[znak, setZnak] = useState("");
const[przecinek, setPrzecinek] = useState(false);
  

    function Dzialanie(){
        if(znak == "+")
        {
            setWynik(((parseFloat(wynik)*ile() + parseFloat(temp)*ile())/ile()).toString() );
        }
        if(znak == "-")
        {
          setWynik(((parseFloat(wynik)*ile() - parseFloat(temp)*ile())/ile()).toString());
        }
        if(znak == "/")
        {
          if(temp == "0"){
            setWynik("Nie można dzielić przez zero");
          }
          else{
            setWynik((parseFloat(wynik)*ile() / parseFloat(temp)*ile()).toString() );
          }
        }
        if(znak == "*")
        {
          setWynik((parseFloat(wynik)*ile() * parseFloat(temp)*ile() / ile() / ile()).toString());
        }
        if(znak == "=")
        {
          setWynik(temp);
        }
    }


    function ile(){

      let a = wynik.toString();
      let b = temp.toString();

      if(a.indexOf(".")){
        var t1 = a.substring(a.indexOf("."));
      }

      if(b.indexOf(".")){
        var t2 = b.substring(b.indexOf("."));
      }

      if(a.indexOf(".") || b.indexOf(".")){
        if(t1.length > t2.length){
          return Math.pow(10, t1.length);
        }
        else{
          return Math.pow(10, t2.length);
        }
      }
      else{
        return 0;
      }
    }

    function Liczba(cyfra){

      if(wynik === "Nie można dzielić przez zero" || wynik =="NaN")
      {
        setZnak("");
        setPrzecinek(false);
        setWynik(cyfra);
        setTemp(0);
      }
      else{
        if(znak == ""){
          if(wynik == "0" && cyfra !== "."){
            setWynik(cyfra);
          }
          else{
            setWynik(wynik + '' + cyfra);
          }
        }
        else{
          if(temp == "0" && cyfra !== "."){
            setTemp(cyfra);
          }
          else{
            setTemp(temp + '' + cyfra);
          }
        }
      }
    }


    function Skasuj(){
      if(wynik === "Nie można dzielić przez zero" || wynik =="NaN")
      {
        setZnak("");
        setPrzecinek(false);
        setWynik(0);
        setTemp(0);
      }
      else{
        if(znak == ""){
          let a = wynik.toString();
        
          if(a.indexOf(".")+1 == a.length){
            setPrzecinek(false);
          }
  
          setWynik(a.substring(0, a.length-1));
  
          if(a.length == 1){
            setWynik("0");
          }
        }
        else{
          let a = temp.toString();

          if(a.indexOf(".")+1 == a.length){
            setPrzecinek(false);
          }
          setTemp(a.substring(0,a.length-1));
  
          if(a.length == 1){
            setTemp("0");
          }
        }
      }
    }

    function Znak(znak_zmienna){
      if(znak_zmienna == "c")
      {
        setPrzecinek(false);
        setWynik("0");
        setTemp("0");
        setZnak("");
      }
      else if(znak_zmienna == "="){
        Dzialanie();
        setZnak("");
        setTemp("0");
      }
      else if(znak == "")
      {
        setPrzecinek(false);
        setZnak(znak_zmienna);
      }
      else{
        Dzialanie();
        setZnak("");
        setTemp("0");
      }
      
    }

    return (
    <View style ={styles.screen}>
      <Text style = {styles.show} >
        {znak} {temp}
      </Text>
      <Text style = {styles.wynik}>
          =  {wynik} 
      </Text>


      <View style = {styles.przyciski}>
        <Button 
            title = "-"
          onPress={() => Znak("-")}
        />

        <Button 
            title = "+"
            onPress={() => Znak("+")}
        />
    
        <Button 
            title = "/"
            onPress={() => Znak("/")}
        />

        <Button 
            title = "*"
            onPress={() => Znak("*")}
        />

        <Button 
            title = "."
            onPress={() => { if(przecinek == false){ setPrzecinek(true); Liczba("."); }
           }}
        />
        
          <Button 
            title = "="
            onPress={() => Znak("=")}
        />

          <Button 
            title = "c"
            onPress={() => Znak("c")}
        />

          <Button 
            title = "del"
            onPress={() => Skasuj()}
        />

          <Button 
            title = "1"
            onPress={() =>{Liczba(1); }}
        />
          <Button 
            title = " 2 "
            onPress={() =>{Liczba(2);}}
        />
          <Button 
            title = " 3 "
            onPress={() =>{Liczba(3);}}
        />
          <Button 
            title = " 4 "
            onPress={() =>{ Liczba(4);}}
        />
          <Button 
            title = " 5 "
            onPress={() =>{ Liczba(5);}}
        />
          <Button 
            title = " 6 "
            onPress={() =>{ Liczba(6);}}
        />
          <Button 
            title = " 7 "
            onPress={() =>{ Liczba(7);}}
        />
          <Button 
            title = " 8 "
            onPress={() =>{ Liczba(8);}}
        />
          <Button 
            title = " 9 "
            onPress={() =>{ Liczba(9);}}
        />
          <Button 
            title = " 0 "
            onPress={() =>{ Liczba(0);}}
        />
  
      </View >
    </View>
    )
}

export default Kalkulator;