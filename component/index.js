import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Inputs from "../inputs";



const App = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button1}
        onPress={onPress}
      >
        <Text style={{fontWeight: "bold"}} >REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={onPress}
      >
        <Text style={{fontWeight: "bold"}} >REGISTER AS COUNSELLOR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#FA8072" ,
    justifyContent: "space-evenly",
    paddingVertical: 200 ,
    paddingHorizontal: 50
    
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#3498DB",
    padding:20
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#3498DB",
    padding:20
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
  
});

export default App;