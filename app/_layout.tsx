import { Tabs } from "expo-router";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../theme";
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorCerulean,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarStyle: {
          height: 60,
          flexDirection: "row",
          padding: 40,
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          shadowRadius: 40,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bulb-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="level"
        options={{
          title: "Level",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grade" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
