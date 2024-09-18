import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useState, useEffect } from "react";

import axios from "axios";

export function Main() {
  const icon =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OUDUf4Bwii3YpSTHwcaHFg68zJjt_POmfw&s";

  const [empresas, setEmpresas] = useState([]);

  const obtenerEmpresas = async () => {
    const { data } = await axios(
      "http://10.10.70.19:4055/tthh/empresas/activas"
    );

    setEmpresas(data);
  };

  const insets = useSafeAreaInsets();

  useEffect(() => {
    obtenerEmpresas();
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={styles.intro}>
        <Image source={{ uri: icon }} style={styles.image} />
        <Text>¡Bienvenido Lisandro!</Text>
        <Pressable
          onPress={() => alert("¡Auch!")}
          style={{
            width: 100,
            height: 30,
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ color: "white" }}>Presiona aquí</Text>
        </Pressable>
      </View>

      {!empresas.length ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={empresas}
          keyExtractor={(empresa) => empresa.empresa_id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                Empresa: {item.nombre}
              </Text>
              <Text>Dirección: {item.direccion}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  intro: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  card: {
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
