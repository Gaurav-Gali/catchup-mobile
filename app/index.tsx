import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="font-[playfair-bold]">CatchUp</Text>
            <Button
                title="Go to splash screen"
                onPress={() => router.push("./welcome")}
            />
        </View>
    );
}
