import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import auth from '../Service/Auth';

function Login({navigation}) {
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [Error,SetError]=useState('')


    function execute() {
        console.log(Email, Password);
        SetError('')
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // AsyncStorage.setItem("user", JSON.stringify(user));
            })
            .catch((error) => {
                
                SetError( error.message)
                

            });
    }
    function GotoLogin(){
        navigation.navigate('Login')
    }

    return (
        <ImageBackground style={styles.background} 
        
        >
        <View style={styles.container}>
            
            <Text style={styles.title}>Register</Text>
            <TextInput
                placeholder="Enter your Email"
                style={styles.input}
                onChangeText={SetEmail}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                onChangeText={SetPassword}
            />
            <Text style={{color:'red'}}>{Error}</Text>
            <TouchableOpacity style={styles.button} onPress={execute}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.footerText} onPress={GotoLogin}>Already have an account? Login</Text>
            
        </View>
        </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
    container: {
        
  width: 300,         
  height: 400,        
  backgroundColor: 'rgba(230, 230, 250, 0.5) ',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 15,   
  elevation: 5,        
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
    },
     
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: 250,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

 
  elevation: 1,
    },
    button: {
        backgroundColor: '#9F2B68',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 10,
   
  shadowColor: '#7247B8',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.9,
  shadowRadius: 10,

  // Android Glow using elevation and background
  elevation: 8,
        
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    footerText: {
        marginTop: 20,
        fontSize: 14,
    },
      background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7247B8'

  },
});

export default Login;
