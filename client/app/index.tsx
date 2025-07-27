import { Button, ButtonText } from "@/components/ui/button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-6">
      <View className="flex flex-col items-center gap-2">
        <Text className="text-2xl font-bold text-green-500">
          Welcome to Notes
        </Text>
        <Text className="text-primary-500">Continue Where You Left Off.</Text>
      </View>
      <View className="space-y-2">
        <Button variant="solid" action="primary" onPress={handleGoogleLogin}>
          <Ionicons name="logo-google" size={16} color="white" />
          <ButtonText>Continue with Google</ButtonText>
        </Button>
        <Button variant="solid" action="primary" onPress={handleGithubLogin}>
          <Ionicons name="logo-github" size={16} color="white" />
          <ButtonText>Continue with Github</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
