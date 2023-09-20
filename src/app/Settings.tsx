import DarkModeSwitch from "@/components/DarkModeSwitch";
import { View, Text, ScrollView } from "react-native";
import { Switch } from "react-native-switch";

const settings = () => {
  return (
    <ScrollView className="flex-grow bg-neutral-100 dark:bg-neutral-900">
      <View className=" bg-neutral-100 dark:bg-neutral-900 p-4">
        <View className=" py-4">
          <Text className=" text-neutral-500 text-lg py-2">General</Text>
          <View className=" flex-row justify-between items-center px-4 py-2 rounded-lg bg-white dark:bg-neutral-800">
            <Text className=" text-base font-medium text-neutral-800 dark:text-neutral-100">Show result on Home</Text>
            <Switch
              circleSize={30}
              activeText={"ON"}
              inActiveText={"OFF"}
              backgroundActive={"#16A34A"}
              backgroundInactive={"#52525B"}
              switchWidthMultiplier={2.5}
              switchLeftPx={5}
              switchRightPx={5}
              // onValueChange={toggleColorScheme}
              value={false}
            />
          </View>
        </View>
        <View className=" py-4">
          <Text className=" text-lg py-2 text-neutral-500">Notifications</Text>
          <View className=" flex-row justify-between items-center px-4 py-2 rounded-lg bg-white dark:bg-neutral-800">
            <Text className=" text-base font-medium text-neutral-800 dark:text-neutral-100">Push Notifications</Text>
            <Switch
              circleSize={30}
              activeText={"ON"}
              inActiveText={"OFF"}
              backgroundActive={"#16A34A"}
              backgroundInactive={"#52525B"}
              switchWidthMultiplier={2.5}
              switchLeftPx={5}
              switchRightPx={5}
              // onValueChange={toggleColorScheme}
              value={true}
            />
          </View>
        </View>
        <View className=" py-4">
          <Text className=" text-neutral-500 text-lg py-2">Appearance</Text>
          <DarkModeSwitch />
        </View>
      </View>
    </ScrollView>
  );
};

export default settings;
