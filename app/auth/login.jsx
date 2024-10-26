import { View, TextInput, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import BackSvg from "../../assets/svg/BackSvg";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import LoginSvg from "../../assets/svg/LoginSvg";
const Login = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 h-full bg-purple-50">
            {/* Header */}
            <TouchableOpacity
                onPress={() => router.push("welcome")}
                className="pl-5 pt-1"
            >
                <BackSvg color="#8b5cf6" size={24} />
            </TouchableOpacity>
            {/* Form */}
            <View className="p-3 pl-7 pr-7 flex-1 gap-5 mb-52 items-center justify-center">
                <Text className="font-[playfair-medium] text-gray-700 text-3xl">
                    Welcome Back
                </Text>
                <TextInput
                    className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                    placeholder="Enter your email"
                />
                <TextInput
                    className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                    secureTextEntry={true}
                    placeholder="Enter your password"
                />
                <TouchableOpacity
                    onPress={() => router.push("auth/signup")}
                    className="bg-violet-500 font-[roboto] p-4 pl-5 shadow-md shadow-purple-200 rounded-2xl w-full"
                >
                    <Text className="text-center font-[roboto-medium] text-md p-[5px] text-violet-50">
                        Login
                    </Text>
                </TouchableOpacity>
                <View className="flex flex-row justify-center gap-1">
                    <Text className="text-center font-[roboto] text-gray-700">
                        Don't have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push("auth/signup")}
                    >
                        <Text className="text-center font-[roboto] text-violet-500">
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Footer */}
            <View className="absolute bottom-5 right-5">
                <LoginSvg size={230} />
            </View>
        </SafeAreaView>
    );
};

export default Login;
