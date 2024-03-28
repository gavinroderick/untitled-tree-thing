import { router } from "expo-router";
import { Text, View } from "react-native";
import { useSession } from "../hooks/useSession";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signIn();
          router.replace("/home");
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
