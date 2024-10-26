import {
    View,
    TextInput,
    Text,
    SafeAreaView,
    ActivityIndicator,
    Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import BackSvg from "../../assets/svg/BackSvg";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import LoginSvg from "../../assets/svg/LoginSvg";

// Supabase imports
import { supabase } from "../../lib/supabase";

const Login = () => {
    const router = useRouter();
    // Refs
    const emailRef = useRef("");
    const passwordRef = useRef("");
    // States
    const [loading, setLoading] = useState(false);

    // Handlers
    const handleLogin = async () => {
        setLoading(true);
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert("Couldn't Login", "Please fill in all the fields");
        } else {
            // Trimming the white spaces if any
            const email = emailRef.current.trim();
            const password = passwordRef.current.trim();

            // Implementing Login
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                Alert.alert("Couldn't Login", error.message);
            }
        }
        setLoading(false);
    };
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
                    onChangeText={(value) => (emailRef.current = value)}
                    className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                    placeholder="Enter your email"
                />
                <View className="w-full">
                    <TextInput
                        onChangeText={(value) => (passwordRef.current = value)}
                        className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                        secureTextEntry={true}
                        placeholder="Enter your password"
                    />
                    <TouchableOpacity className="w-full p-1 pb-0 flex items-end">
                        <Text className="font=[roboto] text-gray-500 text-sm">
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => handleLogin()}
                    className="bg-violet-500 font-[roboto] p-4 pl-5 shadow-md shadow-purple-200 rounded-2xl w-full"
                >
                    {loading ? (
                        <ActivityIndicator size={25} color="white" />
                    ) : (
                        <Text className="text-center font-[roboto-medium] text-md p-[5px] text-violet-50">
                            Login
                        </Text>
                    )}
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
