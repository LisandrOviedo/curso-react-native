import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Main } from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 10,
  },
});
