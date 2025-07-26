import { Button, ButtonText } from "@/components/ui/button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-6">
      <View className="flex flex-col items-center gap-2">
        <Text className="text-2xl font-bold text-green-500">
          Welcome to Notes
        </Text>
        <Text className="text-primary-500">Continue Where You Left Off.</Text>
      </View>
      <Button
        variant="solid"
        action="primary"
        onPress={() => router.push("/notes")}
      >
        <Ionicons name="logo-google" size={16} color="white" />
        <ButtonText>Continue with Google</ButtonText>
      </Button>
    </SafeAreaView>
  );
}
