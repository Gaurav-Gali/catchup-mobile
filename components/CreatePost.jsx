import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from "react-native";

// Svg Imports
import AddImageSvg from "../assets/svg/AddImageSvg";
import UploadSvg from "../assets/svg/UploadSvg";
import AddVideoSvg from "../assets/svg/AddVideoSvg";

import Img from "./Img";
import { Video } from "expo-av";

import CloseSvg from "../assets/svg/CloseSvg";

import { useAuth } from "../contexts/AuthContext";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { createUpdatePost } from "../functions/createUpdatePost";

const CreatePost = () => {
    const User = useAuth().user;

    // States
    const [loading, setLoading] = useState(false);
    const [hasMedia, setHasMedia] = useState(false);
    const [media, setMedia] = useState(null);
    const [caption, setCaption] = useState("");

    // Image Picker
    const onPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.75,
        });

        // If image was picked
        if (!result.canceled) {
            setMedia(result.assets[0]);
            setHasMedia(true);
        }
    };

    const onPickVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
        });

        // If image was picked
        if (!result.canceled) {
            setMedia(result.assets[0]);
            setHasMedia(true);
        }
    };

    // Handlers
    const handleSubmit = async () => {
        if (!caption || !media) {
            Alert.alert("Couldn't Post", "Please add a caption or media");
            return;
        }
        setLoading(true);
        const data = {
            userId: User.id,
            caption,
            media,
        };

        // Create Post;
        let result = await createUpdatePost(data);

        if (result.success) {
            Alert.alert(
                "Congratulations!",
                "Your post has been created successfully"
            );
        } else {
            Alert.alert("Ooopsies!", "Your post could not be created");
        }

        // Reset caption and image
        setCaption("");
        setMedia(null);
        setHasMedia(null);
        setLoading(false);
    };

    return (
        <View className="p-3 flex-col gap-3 border border-gray-300 m-3 rounded-2xl">
            {/* Preview Media */}
            {hasMedia && (
                <View className="flex-col items-end gap-3">
                    <TouchableOpacity
                        onPress={() => {
                            setMedia(null);
                            setHasMedia(false);
                        }}
                    >
                        <CloseSvg size={24} color="#6B7280" />
                    </TouchableOpacity>
                    {media?.type === "image" ? (
                        <View className="w-full">
                            <Img
                                preview
                                src={media.uri}
                                styl="h-[230px]"
                                radius={10}
                            />
                        </View>
                    ) : (
                        <View className="w-full">
                            <Video
                                style={{
                                    flex: 1,
                                    height: 230,
                                    borderRadius: 10,
                                }}
                                source={{ uri: media?.uri }}
                                useNativeControls
                                resizeMode="cover"
                                isLooping
                            />
                        </View>
                    )}
                </View>
            )}
            {/* Input Field */}
            <View className="flex-row bg-violet-100 rounded-2xl items-center gap-3 p-5 w-full">
                <TextInput
                    value={caption}
                    onChangeText={(value) => setCaption(value)}
                    className="text-gray-600 placeholder:text-gray-600 w-full bg-transparent font-[roboto]"
                    placeholder="What's on your mind?"
                    multiline
                />
            </View>
            {/* File Upload */}
            <View className="flex-row gap-3 justify-evenly">
                <TouchableOpacity
                    onPress={() => onPickImage()}
                    className="flex-row items-center gap-2 border border-gray-200 rounded-2xl p-2"
                >
                    <AddImageSvg size={20} color="#4B5563" />
                    <Text className="font-[roboto] text-md text-gray-600">
                        Attach Photo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onPickVideo()}
                    className="flex-row items-center gap-2 border border-gray-200 rounded-2xl p-2"
                >
                    <AddVideoSvg size={20} color="#4B5563" />
                    <Text className="font-[roboto] text-md text-gray-600">
                        Attach Video
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    className="flex-row items-center pl-4 pr-4 gap-2 bg-violet-500 rounded-2xl p-2"
                >
                    {loading ? (
                        <ActivityIndicator
                            size={16}
                            className="m-5 mt-0 mb-0"
                            color="white"
                        />
                    ) : (
                        <>
                            <UploadSvg size={16} color="white" />
                            <Text className="font-[roboto] text-md text-gray-50">
                                Post
                            </Text>
                        </>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreatePost;
