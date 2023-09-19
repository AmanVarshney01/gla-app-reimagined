import { View, Text, ScrollView, FlatList } from "react-native";
import help from "../../../assets/data/help.json";

export default function HelpScreen() {
  type helpDataType = Record<string, {
    name: string;
    phoneNumber: number,
    email: string,
    role: string
  }[]>;

  const helpData: helpDataType = help;

  return (
    <ScrollView className="bg-neutral-100 dark:bg-neutral-900">
      <View className="bg-neutral-100 dark:bg-neutral-900">
        <FlatList 
          data={Object.keys(helpData)}
          renderItem={({item}) => (
            <View className="bg-white dark:bg-neutral-800 rounded-lg p-4 mb-2">
              <Text className="text-lg font-bold text-neutral-900 dark:text-neutral-100">{item}</Text>
              
              <FlatList 
                data={helpData[item]}
                renderItem={({item}) => (
                  <View className="flex-row justify-between items-center">
                    <Text className="text-base text-neutral-900 dark:text-neutral-100">{item.name}</Text>
                    <Text className="text-base text-neutral-900 dark:text-neutral-100">{item.phoneNumber}</Text>
                    <Text className="text-base text-neutral-900 dark:text-neutral-100">{item.email}</Text>
                    <Text className="text-base text-neutral-900 dark:text-neutral-100">{item.role}</Text>
                  </View>
                )}
                keyExtractor={(item) => item.name}
              />
            </View>
          )}
        

        />
      </View>
    </ScrollView>
  );
}
