import {
    View,
    TextInput,
    Text,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import BackSvg from "../../assets/svg/BackSvg";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
const SignUp = () => {
    const router = useRouter();
    // Refs
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    // State
    const [loading, setLoading] = useState(false);

    // Handlers
    const handleSignUp = () => {
        setLoading(true);
        console.log(nameRef.current, emailRef.current, passwordRef.current);
        setLoading(false);
    };
    return (
        <KeyboardAvoidingView
            behavior="padding"
            className="flex-1 h-full bg-purple-50"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex-1 h-full bg-purple-50"
            >
                <SafeAreaView className="flex-1 h-full bg-purple-50">
                    {/* Header */}
                    <TouchableOpacity
                        onPress={() => router.push("welcome")}
                        className="pl-5 pt-1"
                    >
                        <BackSvg color="#8b5cf6" size={24} />
                    </TouchableOpacity>
                    {/* Form */}
                    <View className="p-3 pl-7 pr-7 flex-1 gap-5 mt-32 items-center justify-center">
                        <Text className="font-[playfair-medium] text-gray-700 text-3xl">
                            Let's Get You Started
                        </Text>
                        <TextInput
                            onChangeText={(value) => (nameRef.current = value)}
                            className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                            placeholder="Enter your name"
                        />
                        <TextInput
                            onChangeText={(value) => (emailRef.current = value)}
                            className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                            placeholder="Enter your email"
                        />
                        <TextInput
                            onChangeText={(value) =>
                                (passwordRef.current = value)
                            }
                            className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                            secureTextEntry={true}
                            placeholder="Enter your password"
                        />
                        <TextInput
                            onChangeText={(value) => (confirmPasswordRef.current = value)}
                            className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                            secureTextEntry={true}
                            placeholder="Confirm your password"
                        />
                        <TouchableOpacity
                            onPress={() => handleSignUp()}
                            className="bg-violet-500 font-[roboto] p-4 pl-5 shadow-md shadow-purple-200 rounded-2xl w-full"
                        >
                            <Text className="text-center font-[roboto-medium] text-md p-[5px] text-violet-50">
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <View className="flex flex-row justify-center gap-1">
                            <Text className="text-center font-[roboto] text-gray-700">
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => router.push("auth/login")}
                            >
                                <Text className="text-center font-[roboto] text-violet-500">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
