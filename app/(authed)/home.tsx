import { Text, View } from "react-native";
import { useSession } from "../../hooks/useSession";

export default function Home() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => signOut()}>Sign Out</Text>
    </View>
  );
}
