import { View, Text, FlatList } from "react-native";
import Notifications from "../../../assets/data/notifications.json";
import { ScrollView } from "react-native-gesture-handler";

export default function NotificationsScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 bg-neutral-100 dark:bg-neutral-900 p-4">
        <FlatList
          scrollEnabled={false}
          data={Notifications}
          renderItem={({ item }) => (
            <View className="p-4 mb-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
              <View className="flex justify-between items-center">
                <Text className="text-lg font-bold dark:text-neutral-200">
                  {item.title}
                </Text>
                <Text className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.time}
                </Text>
              </View>
              <Text className="mt-2 text-neutral-700 dark:text-neutral-300">
                {item.message}
              </Text>
              <View className="mt-2 flex flex-row">
                {item.tags.map((tag, index) => (
                  <Text
                    key={index}
                    className="inline-block bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200 mt-2 mr-2 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
