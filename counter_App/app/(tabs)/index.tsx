// HomeScreen.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from './Register/DashBoard';
import Login from './Register/Login';
import Register from './Register/Register';
import UpdateForm from './TODO/UpdateForm';
import Home from './TODO/Home';


const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="Register" component={Login} />
      <Stack.Screen name="Login" component={Register} />
      <Stack.Screen name="USER" component={UpdateForm}/>
      <Stack.Screen name="Home" component={Home} />
      
      
    </Stack.Navigator>
  );
}
