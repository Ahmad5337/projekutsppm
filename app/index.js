import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../utils/fetcWeather.js";
import { router } from "expo-router";

export default function Home() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  async function handleSearch() {
    const result = await fetchWeather(city);
    setData(result);
  }

  function goToDetails() {
  if (!data || !data.main) return;

  router.push({
    pathname: "/details",
    params: {
      name: data.name ?? "",
      country: data.sys?.country ?? "",
      temp: data.main?.temp ?? 0,
      feels: data.main?.feels_like ?? 0,
      humidity: data.main?.humidity ?? 0,
      pressure: data.main?.pressure ?? 0,
      wind: data.wind?.speed ?? 0,
      desc: data.weather?.[0]?.description ?? "",
    }
  });
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama kota..."
        onChangeText={setCity}
      />

      <Button title="Cari Cuaca" onPress={handleSearch} />

      {data && data.main && <WeatherCard data={data} />}

      {data && data.main && (
  <View style={{ marginTop: 20 }}>
    <Button title="Lihat Detail Cuaca" onPress={goToDetails} />
  </View>
)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 10,
  },
});
