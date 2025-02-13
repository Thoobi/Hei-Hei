import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function level() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Level</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
    fontWeight: "bold",
  },
});
