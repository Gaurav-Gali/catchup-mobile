import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import SafeView from "../../components/SafeView";
import { supabase } from "../../lib/supabase";

import Header from "../../components/Header";
import Img from "../../components/Img";
import PostTemplate from "../../components/PostTemplate";

import { useRouter } from "expo-router";

// Getting User
import { useAuth } from "../../contexts/AuthContext";

const ProfileScreen = () => {
    // Handlers
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert("Couldn't Log Out", error.message);
        }
    };

    const router = useRouter();

    // User
    const User = useAuth().user;

    return (
        <SafeView>
            {/* Header */}
            <Header avatar={true} />
            {/* User Data */}
            <View className="border-none border-b-[0.5px] border-gray-300 mb-5">
                <View className="flex-col items-center justify-center gap-5 m-3 p-3 rounded-xl">
                    <View className="bg-purple-300 p-2 rounded-full">
                        <View className="bg-purple-200 p-2 rounded-full">
                            <View className="bg-purple-100 p-2 rounded-full">
                                <Img
                                    src={User.image}
                                    styl="h-[100px] w-[100px]"
                                    radius={200}
                                />
                            </View>
                        </View>
                    </View>
                    <View className="flex-col gap-1 items-center justify-center">
                        <Text className="font-[roboto-bold] text-[18px] text-gray-700">
                            {User?.name && User.name}
                        </Text>
                        <Text className="font-[roboto] text-[14px] text-gray-500">
                            {User?.email && User.email}
                        </Text>
                        {User?.bio && (
                            <View className="p-2">
                                <Text className="text-center font-[roboto] text-[14px] text-gray-700">
                                    {User.bio}
                                </Text>
                            </View>
                        )}
                    </View>
                    <View className="w-full flex-row items-center justify-between gap-5">
                        <TouchableOpacity
                            onPress={() =>
                                router.push("main/EditProfileScreen")
                            }
                            className="bg-transparent flex-1 border border-gray-300 p-4 rounded-2xl"
                        >
                            <Text className="text-gray-700 text-center font-[roboto] text-[14px]">
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleLogout()}
                            className="bg-violet-500 flex-1 p-4 rounded-2xl"
                        >
                            <Text className="text-white text-center font-[roboto] text-[14px]">
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* User Posts */}
            <View className="flex-col">
                {Array(10)
                    .fill()
                    .map((post) => {
                        return <PostTemplate key={post} />;
                    })}
            </View>
        </SafeView>
    );
};

export default ProfileScreen;
