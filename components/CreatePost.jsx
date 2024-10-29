import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

// Svg Imports
import AddImageSvg from "../assets/svg/AddImageSvg";
import UploadSvg from "../assets/svg/UploadSvg";
import AddVideoSvg from "../assets/svg/AddVideoSvg";

const CreatePost = () => {
    return (
        <View className="p-3 flex-col gap-3 border border-gray-300 m-3 rounded-2xl">
            {/* Input Field */}
            <View className="flex-row bg-violet-100 rounded-2xl items-center gap-3 p-5 w-full">
                <TextInput
                    className="text-gray-600 placeholder:text-gray-600 w-full bg-transparent font-[roboto]"
                    placeholder="What's on your mind?"
                    multiline
                />
            </View>
            {/* File Upload */}
            <View className="flex-row gap-3 justify-evenly">
                <TouchableOpacity className="flex-row items-center gap-2 border border-gray-200 rounded-2xl p-2">
                    <AddImageSvg size={20} color="#4B5563" />
                    <Text className="font-[roboto] text-md text-gray-600">
                        Attach Photo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center gap-2 border border-gray-200 rounded-2xl p-2">
                    <AddVideoSvg size={20} color="#4B5563" />
                    <Text className="font-[roboto] text-md text-gray-600">
                        Attach Video
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center pl-4 pr-4 gap-2 bg-violet-500 rounded-2xl p-2">
                    <UploadSvg size={16} color="white" />
                    <Text className="font-[roboto] text-md text-gray-50">
                        Post
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreatePost;
