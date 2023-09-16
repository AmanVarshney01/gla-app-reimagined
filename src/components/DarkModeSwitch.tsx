import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import { useState } from "react";
import { useColorScheme } from "nativewind";
import { SunIcon, MoonIcon } from "react-native-heroicons/solid";

export default function DarkModeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row justify-between items-center px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 shadow-md">
      <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Dark Mode</Text>
      <Switch
        circleSize={30}
        activeText={"ON"}
        inActiveText={"OFF"}
        backgroundActive={"#3F3F46"}
        backgroundInactive={"#EAB308"}
        renderInsideCircle={() =>
          colorScheme == "light" ? (
            <View className="bg-yellow-500 rounded-full">
              <SunIcon size={30} color="white" />
            </View>
          ) : (
            <View className="bg-neutral-700 rounded-full">
              <MoonIcon size={30} color="white" />
            </View>
          )
        }
        switchWidthMultiplier={2.5}
        switchLeftPx={5}
        switchRightPx={5}
        onValueChange={toggleColorScheme}
        value={colorScheme == "light" ? false : true}
      />
    </View>
  );
}
