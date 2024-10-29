import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import SafeView from "../../components/SafeView";

import Header from "../../components/Header";
import Img from "../../components/Img";
import PostTemplate from "../../components/PostTemplate";

export class ProfileScreen extends Component {
    render() {
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
                                        styl="h-[100px] w-[100px]"
                                        radius={200}
                                    />
                                </View>
                            </View>
                        </View>
                        <View className="flex-col gap-1 items-center justify-center">
                            <Text className="font-[roboto-bold] text-[18px] text-gray-700">
                                User Name
                            </Text>
                            <Text className="font-[roboto] text-[14px] text-gray-500">
                                example@example.com
                            </Text>
                            <View className="p-2">
                                <Text className="text-center font-[roboto] text-[14px] text-gray-700">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Ipsa, quidem.
                                </Text>
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between gap-5">
                            <TouchableOpacity className="bg-transparent flex-1 border border-gray-300 p-4 rounded-2xl">
                                <Text className="text-gray-700 text-center font-[roboto] text-[14px]">
                                    Edit Profile
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-violet-500 flex-1 p-4 rounded-2xl">
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
                            return <PostTemplate />;
                        })}
                </View>
            </SafeView>
        );
    }
}

export default ProfileScreen;
