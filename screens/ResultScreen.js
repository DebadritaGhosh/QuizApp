import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";

class ResultScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          fontSize: 50,
          color: '#ffffff'
        }}>{this.props.route.params.score} / 10</Text>
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
  }
});


export default ResultScreen;