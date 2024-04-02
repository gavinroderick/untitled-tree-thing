import { useState } from "react";
import { AppState, Button, View } from "react-native";
import { Input } from "react-native-elements";
import { useSession } from "../hooks/useSession";
import { supabase } from "../lib/supabase";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) =>
  state === "active"
    ? supabase.auth.startAutoRefresh()
    : supabase.auth.stopAutoRefresh()
);
export default function SignIn() {
  const { signIn } = useSession();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail() {
    setLoading(true);
    await signIn(email, password);
    setLoading(false);
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ alignSelf: "stretch" }}>
        <Input
          label="Email"
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="you@lovethese.trees"
          autoCapitalize={"none"}
        />
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="ILoveTrees123!"
          autoCapitalize={"none"}
        />
      </View>
      <View>
        <Button
          title={"Sign in"}
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
    </View>
  );
}
