import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { useRouter } from "expo-router";
import Img from "./Img";

// Svg Import
import NotificationSvg from "../assets/svg/NotificationSvg";
import AvatarSvg from "../assets/svg/AvatarSvg";
import CreateSvg from "../assets/svg/CreateSvg";

const Header = ({ create, notification, avatar }) => {
    const colorSelected = "#374151";
    const router = useRouter();

    const ICON_SIZE = 22;

    // States
    const [hasImage, setHasImage] = useState(false);
    return (
        <View className="flex-row items-center justify-between p-5 pt-3">
            <TouchableOpacity onPress={() => router.replace("main/home")}>
                <Text className="font-[playfair-medium] text-[22px] text-gray-600">
                    CatchUp
                </Text>
            </TouchableOpacity>
            <View className="flex-row gap-5 items-center justify-center">
                {/* <TouchableOpacity
                    onPress={() => router.push("main/CreateScreen")}
                >
                    <CreateSvg
                        size={ICON_SIZE}
                        color={create ? colorSelected : "#6B7280"}
                    />
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => router.push("main/NotificationsScreen")}
                >
                    <NotificationSvg
                        size={ICON_SIZE}
                        color={notification ? colorSelected : "#6B7280"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push("main/ProfileScreen")}
                >
                    {hasImage ? (
                        <Img
                            styl="h-[24px] w-[24px] border border-purple-200 rounded-full"
                            radius={200}
                        />
                    ) : (
                        <AvatarSvg
                            size={ICON_SIZE}
                            color={avatar ? colorSelected : "#6B7280"}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
