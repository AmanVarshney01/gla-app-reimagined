import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { View, Text } from "react-native";
import { HomeIcon, BellIcon, PhoneIcon, Bars3Icon, UserIcon } from "react-native-heroicons/solid";

const HomeHeader = () => (
  <View>
    <Text className=" font-bold text-xl text-gray-100">GLA University</Text>
    <Text className=" text-gray-100/80 text-lg -mt-1">Mathura</Text>
  </View>
)

const header = (title: string) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: '#fffffe', fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
  </View>
)

export default function TabLayout() {
  const {colorScheme} = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fffffe",
        tabBarActiveBackgroundColor: "#16A34A",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colorScheme == "light" ? "#fffffe" : "#1F2937",
          borderTopColor: "#232323",
          borderBottomWidth: 0,
          height: 60,
          paddingTop: 12,
          paddingBottom: 10,
          paddingHorizontal: 10,
        },
        tabBarItemStyle: {
          borderRadius: 100,
          marginHorizontal: 12,
        },
        headerTitle: HomeHeader,
        headerStyle: {
          backgroundColor: "#15803D",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerTitle: () => header("Profile"),
          tabBarIcon: ({ color }) => <UserIcon color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifications",
          headerTitle: () => header("Notifications"),
          tabBarIcon: ({ color }) => <BellIcon color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="Help"
        options={{
          title: "Help",
          headerTitle: () => header("Help"),
          tabBarIcon: ({ color }) => <PhoneIcon color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "More",
          headerTitle: () => header("More"),
          tabBarIcon: ({ color }) => <Bars3Icon color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
