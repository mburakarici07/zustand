import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useBearStore from "../storage/counter";

const Pages2 = ({ navigation }) => {
  const count = useBearStore((state) => state.bears);
  const remove = useBearStore((state) => state.remove);
  const increase5 = useBearStore((state) => state.increase5);

  return (
    <SafeAreaView>
      <View style={styles.countView}>
        <Text>You can see the updating count:</Text>
        <Text style={styles.countText}>{count}</Text>
      </View>

      <TouchableOpacity onPress={remove} style={styles.navigateButtonView}>
        <Text>Sayıyı Sıfırla</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={increase5} style={styles.navigateButtonView}>
        <Text>Sayıya 5 ekle</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Pages1")}
        style={styles.navigateButtonView}
      >
        <Text>Sayfa 1'e Dön </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  countView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
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
  countText: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    color: "darkgray",
  },
});

export default Pages2;
