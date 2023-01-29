/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "./ignoreWarnings";
import React,{useState,useEffect} from 'react';

import {StyleSheet,View,Text, TouchableOpacity} from 'react-native';
import Timer from "./components/Timer";





function App() {
    const [type,setType]=useState("Focus");
    
    return (
      <View style={styles.container}>
        <Text style={{textAlign:"center",fontWeight:900,fontSize:30}}>Promodoro App</Text>
       {(type=="Focus")&&<Timer time={25*60} title="Focus On Work"/>}
       {(type=="Short")&&<Timer time={5*60} title="Short Break"/>}
       {(type=="Long")&&<Timer time={10*60} title="Long Break"/>}
       <View style={styles.bottom}>
        <TouchableOpacity style={(type=="Focus")?styles.highlightbtn:styles.button} onPress={()=>setType("Focus")}>
         <Text style={{textAlign:"center",fontSize:18}}>Focus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={(type=="Short")?styles.highlightbtn:styles.button} onPress={()=>setType("Short")}>
        <Text style={{textAlign:"center",fontSize:18}}>Short</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={(type=="Long")?styles.highlightbtn:styles.button} onPress={()=>setType("Long")}>
        <Text style={{textAlign:"center",fontSize:18}}>Long</Text>
        </TouchableOpacity>

       </View>
      

      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#000",
    paddingVertical:30
   
   
    
  
 
  },
  bottom:{
    width:"90%",
    backgroundColor:"#16213E",
    height:"8%",
    borderRadius:30,
    flexDirection:"row",
    gap:10,
    justifyContent:"center",
    alignItems:"center"


    
  },
  button:{
    width:"30%",
    height:"75%",
    
    borderRadius:20,
    justifyContent:"center"
    
  },
  highlightbtn:{
    width:"30%",
    height:"75%",
    borderRadius:20,
    justifyContent:"center",
    backgroundColor:"#6C4AB6"
  }
  
});

export default App;
