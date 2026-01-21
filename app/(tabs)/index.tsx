import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: "#fff"
  },
  button: {
    marginTop: 20,
    color: "#1e90ff",
    fontSize: 18
  }
});
