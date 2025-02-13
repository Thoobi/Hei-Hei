import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted: boolean;
};

export const ShoppingListItem = ({ name, isCompleted }: Props) => {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this item?",
      "It will be gone for good",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <View style={styles.row}>
        <Feather
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorBlack}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>

      <TouchableOpacity hitSlop={20} onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "900",
    color: "black",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorLightGray,
  },
  completedText: {
    color: theme.colorGrey,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
