import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function IdeaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idea</Text>
      <Link href="/level" style={styles.title}>
        Go to /level
      </Link>
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
  },
});
