import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { FlatList, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dummyNotes = [
  { id: "1", title: "Note 1", content: "This is note 1." },
  { id: "2", title: "Note 2", content: "This is note 2." },
  { id: "3", title: "Note 3", content: "This is note 3." },
  { id: "4", title: "Note 4", content: "This is note 4." },
  { id: "5", title: "Note 5", content: "This is note 5." },
  { id: "6", title: "Note 6", content: "This is note 6." },
  { id: "7", title: "Note 7", content: "This is note 7." },
  { id: "8", title: "Note 8", content: "This is note 8." },
  { id: "9", title: "Note 9", content: "This is note 9." },
];

type User = {
  name: string;
  email: string;
  avatarUrl: string;
};

export default function Notes() {
  const [isUserLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user", {
        credentials: "include",
      });
      const json = await response.json();
      setUser(json);
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView className="flex-1 md:items-center md:justify-center bg-secondary-100 md:bg-secondary-0">
      <View className="flex-1 md:flex-none p-4 md:p-6 rounded-md bg-secondary-100 md:h-[500px] md:w-[700px] grid gap-4">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-green-500">Notes</Text>
          {isUserLoading ? (
            <Skeleton variant="circular" className="w-8 h-8" />
          ) : (
            <Avatar size="sm">
              <AvatarFallbackText>{user?.name}</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: user?.avatarUrl,
                }}
              />
            </Avatar>
          )}
        </View>
        <FlatList
          showsVerticalScrollIndicator={Platform.OS === "web"}
          data={dummyNotes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <Card>
                <Text className="text-primary-950 font-medium">
                  {item.title}
                </Text>
                <Text className="text-secondary-950">{item.content}</Text>
              </Card>
            </>
          )}
          ItemSeparatorComponent={() => <View className="h-4" />}
        />
      </View>
    </SafeAreaView>
  );
}
