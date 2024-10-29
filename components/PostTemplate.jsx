import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Img from "./Img";
import MoreSvg from "../assets/svg/MoreSvg";
import HeartSvg from "../assets/svg/HeartSvg";
import CommentSvg from "../assets/svg/CommentSvg";
import ShareSvg from "../assets/svg/ShareSvg";

const PostTemplate = ({ props }) => {
    const liked = !true;
    return (
        <View className="bg-transparent border border-gray-300 flex gap-5 m-3 p-3 rounded-xl">
            {/* Author Data */}
            <View className="rounded-xl flex-row items-start justify-between">
                <View className="flex-row gap-3 items-center justify-center">
                    <Img
                        styl="h-[36px] w-[36px] border border-violet-200 rounded-full"
                        radius={200}
                    />
                    <View>
                        <Text className="font-[roboto-medium] text-[14px] text-gray-700">
                            User Name
                        </Text>
                        <Text className="font-[roboto] text-[12px] text-gray-600">
                            Oct 29
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <MoreSvg size={24} color="#374151" />
                </TouchableOpacity>
            </View>
            {/* Post Image */}
            <View>
                <Img styl="h-[230px]" radius={10} />
            </View>
            {/* Post Caption */}
            <View className="p-1 pt-0 pb-0">
                <Text className="font-[roboto] text-[14px] text-gray-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur, asperiores!
                </Text>
            </View>
            {/* Post Details */}
            <View className="flex-row items-center justify-between">
                {/* Interactions */}
                <View className="flex-row gap-5 p-2 pt-0 pb-0 items-center justify-center">
                    <View className="flex-row gap-2 items-center justify-center">
                        <HeartSvg size={24} filled={liked} />
                        <Text className="font-[roboto] text-gray-600">1</Text>
                    </View>
                    <View className="flex-row gap-2 items-center justify-center">
                        <CommentSvg size={24} color="#6B7280" />
                        <Text className="font-[roboto] text-gray-600">1</Text>
                    </View>
                </View>
                {/* Share */}
                <View className="p-2 pt-0 pb-0">
                    <ShareSvg size={24} color="#6B7280" />
                </View>
            </View>
        </View>
    );
};

export default PostTemplate;
