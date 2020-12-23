import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      fullname: '',
      mobileno:'',
      occupation: '',
      email: '',
      address: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ fullname: text })
   }
   handleEmail = (text) => {
      this.setState({ mobileno: Number })  
   }
   handleEmail = (text) => {
      this.setState({ occupation: text })
   }  
   handleEmail = (text) => {
      this.setState({ email: text })      
   }
   handleEmail = (text) => {
      this.setState({ address: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "FULL NAME"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleFULLNAME}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Mobile No."
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleMoblieNo}/>  

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Occupation"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleOccupation}/>


            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleAddress}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.fullname, this.state.mobileno, this.state.occupation, this.state.email, this.state.address, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      textAlign: 'center',
      borderRadius: 4,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      textAlign: 'center',
      color: 'white'
   }
})