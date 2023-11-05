import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useBearStore from "../storage/counter";

const Pages1 = ({ navigation }) => {
  const count = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);
  const decrease = useBearStore((state) => state.decrease);

  return (
    <SafeAreaView>
      <View style={styles.countView}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonView} onPress={decrease}>
          <Text>Decrease</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonView} onPress={increase}>
          <Text>Increase</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pages2")}
        style={styles.navigateButtonView}
      >
        <Text>Sayfa 2ye Geç </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  countView: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  countText: { fontSize: 20 },
  navigateButtonView: {
    borderRadius: 16,
    backgroundColor: "lightblue",
    alignItems: "center",
    marginTop: 50,
    padding: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Pages1;
