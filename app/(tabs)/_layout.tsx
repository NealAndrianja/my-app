import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                tabBarStyle: { backgroundColor: "#25292e" },
                headerStyle: { backgroundColor: "#25292e" },
                headerTintColor: "#fff",
                headerShadowVisible: false
            }}>
            <Tabs.Screen name="index" options={{
                headerTitle: "Home",
                tabBarIcon: ({ focused, color }) =>
                    (<Ionicons
                        name={focused ? "home-sharp" : "home-outline"}
                        size={24}
                        color={color}
                    />)
            }} />
            <Tabs.Screen name="about" options={{ headerTitle: "About",
                tabBarIcon: ({ focused, color }) =>
                    (<Ionicons
                        name={focused ? "information-circle-sharp" : "information-circle-outline"}
                        size={24}
                        color={color}
                    />)
             }} />
            <Tabs.Screen name="not-found" options={{ headerShown: false }} />
        </Tabs>
    );
}
