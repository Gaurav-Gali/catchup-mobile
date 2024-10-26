import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import React from "react";
import SplashSvg from "@/assets/svg/SplashSvg";
import { router, useRouter } from "expo-router";

const welcome = () => {
    // Router
    const router = useRouter();
    return (
        <SafeAreaView className="h-full flex-1 items-center justify-evenly bg-purple-50">
            {/* Image */}
            <View>
                <SplashSvg size={300} />
            </View>
            {/* Title */}
            <View className="flex gap-3 items-center justify-center">
                <Text className="font-[playfair-bold] text-gray-700 text-[40px]">
                    CatchUp
                </Text>
                <Text className="font-[roboto] text-center text-gray-700 text-lg">
                    Where every story finds its voice.
                </Text>
            </View>
            {/* Footer */}
            <View>
                <TouchableOpacity
                    onPress={() => router.push("auth/signup")}
                    className="bg-violet-500 shadow-md shadow-purple-200 w-[90vw] rounded-2xl p-5"
                >
                    <Text className="text-center font-[roboto-medium] text-lg text-violet-50">
                        Get Started
                    </Text>
                </TouchableOpacity>
                <View className="mt-3 flex flex-row justify-center gap-1">
                    <Text className="text-center font-[roboto] text-gray-700">
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => router.push("auth/login")}>
                        <Text className="text-center font-[roboto] text-violet-500">
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default welcome;
