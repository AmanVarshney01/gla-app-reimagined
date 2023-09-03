import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import { useState } from "react";
import { useColorScheme } from "nativewind";
import { SunIcon, MoonIcon } from "react-native-heroicons/solid";

export default function DarkModeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  //   console.log(colorScheme);
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className=" justify-between items-center flex-row px-4 py-2 rounded-lg bg-white shadow shadow-stroke">
      <Text className=" text-lg">Dark Mode</Text>
      <Switch
        // trackColor={{ false: "gray", true: "#f8f5f2" }}
        // thumbColor={colorScheme == "light" ? "#F59E0B" : "#232323"}
        circleSize={25}
        activeText={"ON"}
        inActiveText={"OFF"}
        backgroundActive={"#232323"}
        backgroundInactive={"#F59E0B"}
        // circleBorderWidth={3}
        // barHeight={26}
        renderInsideCircle={() =>
          colorScheme == "light" ? (
            <View className="bg-yellow rounded-full">
              <SunIcon size={25} color="white" />
            </View>
          ) : (
            <View className=" bg-stroke rounded-full">
              <MoonIcon size={25} color="white" />
            </View>
          )
        }
        // innerCircleStyle={{ borderColor: "#232323" }}
        switchWidthMultiplier={2.5}
        switchLeftPx={5}
        switchRightPx={5}
        onValueChange={toggleColorScheme}
        value={colorScheme == "light" ? false : true}
      />
    </View>
  );
}
