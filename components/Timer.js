import React,{useState,useEffect} from 'react';
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

function Timer({time,title}) {
    const [timeLeft, setTimeLeft] = useState(time);
    const [isRunning, setIsRunning] = useState(false);
    const [start,setStart] = useState(true);
  
    const toggleTimer = () => {
      setIsRunning(!isRunning);
      setStart(false);
    };
  
    const resetTimer = () => {
      setTimeLeft(time);
      setIsRunning(false);
      setStart(true);
    };
  
    const decreaseTime = () => {
      setTimeLeft(timeLeft - 1);
    };
  
    useEffect(() => {
      let intervalId = null;
      if (isRunning) {
        intervalId = setInterval(decreaseTime, 1000);
      } else if (!isRunning && timeLeft !== 0) {
        clearInterval(intervalId);
      }
      return () => clearInterval(intervalId);
    }, [isRunning, timeLeft]);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
         <ProgressCircle
            percent={timeLeft/(time)*100}
            radius={135}
            borderWidth={17}
            color="#3399FF"
            shadowColor="#000"
            bgColor='#000'
          
        >
           <Text style={styles.timerText}>
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60 == 0)?"00":timeLeft % 60}
        </Text>
        
        </ProgressCircle>
        
        <TouchableOpacity onPress={toggleTimer} style={styles.startbtn}>
          <Text style={{textAlign:"center",fontSize:20}}>{start?'Start':(isRunning ? 'Pause' : 'Resume')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetTimer} style={styles.resetbtn}>
          <Text style={{textAlign:"center",fontSize:20}}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#000",
    width:"100%",
    
  
 
  },
  timerText: {
    fontSize: 60,
  },
  startbtn:{
    width:"45%",
    height:"7%",
    backgroundColor:"#658864",
    justifyContent:'center',
    borderRadius:10,
    marginTop:10

  },
  resetbtn:{
    width:"45%",
    height:"7%",
    backgroundColor:"#F48484",
    justifyContent:'center',
    borderRadius:10,
    marginTop:10

  },
  title:{textAlign:'center',fontSize:25,marginBottom:20,fontFamily: 'Cochin',}
});

export default Timer
