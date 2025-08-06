import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import auth from '../Service/Auth';

function Register({navigation}) {
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [Error,SetError]=useState('')

    const checIfLoggedIn=()=>{
         const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // Reset the navigation stack so the user can't go back to Login
      navigation.reset({
        index: 0,
        routes: [{ name: 'DashBoard' }],
      });
    }
  });

  
  return unsubscribe;
    };

    useEffect(()=>{
        const unsubscribe = checIfLoggedIn();
  return unsubscribe;
    },[])
    
    function execute() {
        console.log(Email, Password);
        SetError('');
        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // AsyncStorage.setItem("user", JSON.stringify(user));
                navigation.navigate('DashBoard')
            })
            .catch((error) => {
                
                SetError( error.message)
                

            });
    }

    
function GotoRegister(){
        navigation.navigate('Register')
    }
    return (
        <View  style={styles.background} >
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.footerText} onPress={GotoRegister}>Create an account? Register</Text>
        </View>
        </View>
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

export default Register;
