import { signOut } from "firebase/auth";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import auth from "../Service/Auth";

function DashBoard({ navigation }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Sign out error:", error);
      });
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.glowText}>Welcome To You</Text>

      <TouchableOpacity style={styles.button} onPress={goToHome}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B2F", // darker background
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  glowText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadowColor: "#00FFFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 30,
    textAlign: "center",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#9F2B68",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,

    shadowColor: "#9F2B68",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,

    elevation: 8,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DashBoard;
