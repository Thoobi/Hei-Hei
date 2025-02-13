import { ShoppingListItem } from "../components/ShoppingListItem";
import { View, StyleSheet } from "react-native";
import { theme } from "../theme";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/counter" style={styles.link}>
        Go to /counter
      </Link>
      <ShoppingListItem name="Banana" isCompleted={false} />
      <ShoppingListItem name="Milk" isCompleted={true} />
      <ShoppingListItem name="Coffee" isCompleted={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  link: {
    marginBottom: 18,
    textAlign: "center",
    fontSize: 24,
  },
});
