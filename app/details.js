import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const {
    name,
    country,
    temp,
    feels,
    humidity,
    pressure,
    wind,
    desc,
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Cuaca</Text>

      <View style={styles.card}>
        <Text style={styles.city}>{name}, {country}</Text>
        <Text style={styles.temp}>{Math.round(temp)}°C</Text>
        <Text style={styles.desc}>{desc}</Text>

        <View style={styles.line} />

        <Text style={styles.item}>Terasa Seperti: {Math.round(feels)}°C</Text>
        <Text style={styles.item}>Kelembapan: {humidity}%</Text>
        <Text style={styles.item}>Tekanan Udara: {pressure} hPa</Text>
        <Text style={styles.item}>Kecepatan Angin: {wind} m/s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#4a90e2",
    padding: 20,
    borderRadius: 15,
  },
  city: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
  },
  temp: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  desc: {
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
  },
  line: {
    height: 1,
    backgroundColor: "white",
    marginVertical: 15,
  },
  item: {
    fontSize: 18,
    color: "white",
    marginVertical: 4,
  },
});
