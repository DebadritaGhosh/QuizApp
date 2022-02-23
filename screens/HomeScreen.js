import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("quizscreen")}} style={styles.button}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#301b75",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    backgroundColor: "#663fe8",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText:{
    color: "#fff",
    fontSize: 30
  }
});

export default HomeScreen;