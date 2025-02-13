import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link href="/counter/history" asChild>
              <Pressable hitSlop={20}>
                <MaterialCommunityIcons
                  name="history"
                  size={32}
                  color={theme.colorCerulean}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="history" options={{ title: "History" }} />
    </Stack>
  );
}
