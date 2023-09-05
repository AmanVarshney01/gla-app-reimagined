import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import { useState } from "react";
import { useColorScheme } from "nativewind";
import { SunIcon, MoonIcon } from "react-native-heroicons/solid";

export default function DarkModeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row justify-between items-center px-4 py-2 rounded-lg bg-white shadow-md">
      <Text className="text-lg font-semibold text-gray-800">Dark Mode</Text>
      <Switch
        circleSize={30}
        activeText={"ON"}
        inActiveText={"OFF"}
        backgroundActive={"#1F2937"}
        backgroundInactive={"#FBBF24"}
        renderInsideCircle={() =>
          colorScheme == "light" ? (
            <View className="bg-yellow-500 rounded-full">
              <SunIcon size={30} color="white" />
            </View>
          ) : (
            <View className="bg-gray-800 rounded-full">
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
