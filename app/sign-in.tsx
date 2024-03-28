import { Text, View } from "react-native";
import { useSession } from "../hooks/useSession";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
        }}
      >
        Sign In
      </Text>
    </View>
  );
}
