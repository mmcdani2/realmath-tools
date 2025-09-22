import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "../../lib/supabase";


export default function SignIn() {
  const [email, setEmail] = useState(""); const [busy, setBusy] = useState(false);
  async function send() {
    if (!email) return Alert.alert("Enter an email");
    setBusy(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/` }
    });
    setBusy(false);
    error ? Alert.alert(error.message) : Alert.alert("Check your email for the magic link.");
  }
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center", gap:12, padding:24 }}>
      <Text style={{ fontSize:22 }}>Sign in</Text>
      <TextInput placeholder="you@school.org" autoCapitalize="none" inputMode="email"
        value={email} onChangeText={setEmail}
        style={{ borderWidth:1, borderColor:"#ccc", padding:10, width:280, borderRadius:8, backgroundColor:"white" }} />
      <Button title={busy ? "Sending..." : "Send magic link"} onPress={send} disabled={busy} />
    </View>
  );
}
