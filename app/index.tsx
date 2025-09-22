import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { theme as t } from "../lib/theme";

const Btn = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} asChild>
    <Pressable
      style={{
        paddingVertical: 14, paddingHorizontal: 20, borderWidth: 2,
        borderColor: t.ink, backgroundColor: "white", borderRadius: t.radius,
        shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 0, elevation: 2,
      }}>
      <Text style={{ fontSize: 16, fontWeight: "700", color: t.ink }}>{label}</Text>
    </Pressable>
  </Link>
);

export default function Home() {
  return (
    <View style={{
      flex: 1, justifyContent: "center", alignItems: "center",
      backgroundColor: t.bg, gap: t.gap * 2, padding: 24,
    }}>
      {/* Bauhaus block header */}
      <View style={{ alignItems: "center" }}>
        <View style={{ width: 180, height: 16, backgroundColor: t.primary }} />
        <Text style={{ fontSize: 28, fontWeight: "800", color: t.ink, marginTop: 10 }}>
          RealMath Tools
        </Text>
        <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
          <View style={{ width: 24, height: 24, backgroundColor: t.accent1 }} />
          <View style={{ width: 24, height: 24, backgroundColor: t.accent2 }} />
          <View style={{ width: 24, height: 24, backgroundColor: t.ink }} />
        </View>
      </View>

      {/* Action buttons */}
      <View style={{ gap: t.gap }}>
        <Btn href="/dashboard" label="Go to Dashboard" />
        <Btn href="/(auth)/signin" label="Sign in" />
      </View>
    </View>
  );
}
