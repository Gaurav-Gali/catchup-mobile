import { SafeAreaView, ActivityIndicator } from "react-native";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-purple-50 items-center justify-center">
            <ActivityIndicator size={25} />
        </SafeAreaView>
    );
}
