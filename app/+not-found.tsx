import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: "Oops!" }} />
        <View style={styles.container}>
            <Text style={styles.text}>This screen does not exist.</Text>
            <Link href="/(tabs)" style={styles.button}>Go back to home screen!</Link>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#25292e"
    },
    text: {
        color: "#fff"
    },
    button: {
        marginTop: 20,
        color: "#1e90ff",
        fontSize: 18
    }
})