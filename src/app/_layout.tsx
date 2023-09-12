import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "../../global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  StatusBar.setBackgroundColor("#16A34A");
  StatusBar.setBarStyle("light-content");
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#026c45",
        },
        headerTintColor: "#fffffe",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Settings" />
      <Stack.Screen name="Attendance" />
      <Stack.Screen name="Hostel" />
      <Stack.Screen name="Result/index" options={{
        title: 'Result',
      }} />
      <Stack.Screen name="Timetable" options={{
        title: 'Timetable',
        // presentation: 'modal'
      }} />
      <Stack.Screen name="JoinClub" options={{
        title: 'Join Club'
      }} />
      <Stack.Screen name="FeeDetails" options={{
        title: "Fee Details"
      }} />
      <Stack.Screen name="Assignments" />
      <Stack.Screen name="Library" />
    </Stack>
  );
}

