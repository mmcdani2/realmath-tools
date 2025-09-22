import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}>
      <Text style={{ fontSize: 22 }}>RealMath Tools</Text>
      <Link href="/dashboard">Go to Dashboard</Link>
    </View>
  );
}
