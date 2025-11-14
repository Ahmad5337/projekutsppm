import { View, Text, StyleSheet } from "react-native";

export default function WeatherCard({ data }) {
  if (!data || data.cod !== 200) {
    return <Text style={styles.error}>Kota tidak ditemukan.</Text>;
  }

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.name}</Text>
      <Text style={styles.temp}>{Math.round(data.main.temp)}°C</Text>
      <Text style={styles.desc}>{data.weather[0].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#4a90e2",
    marginTop: 20,
  },
  city: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },
  temp: {
    fontSize: 48,
    color: "white",
    fontWeight: "600",
  },
  desc: {
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
  },
  error: { marginTop: 20, color: "red", fontSize: 16 },
});
