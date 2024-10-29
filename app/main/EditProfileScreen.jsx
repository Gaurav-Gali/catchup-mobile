import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    ActivityIndicator,
    Alert,
} from "react-native";
import React, { useState, useRef } from "react";

import BackSvg from "../../assets/svg/BackSvg";

import SafeView from "../../components/SafeView";
import AddImageSvg from "../../assets/svg/AddImageSvg";

import * as ImagePicker from "expo-image-picker";
import { uploadMedia } from "../../functions/uploadMedia";

import { useRouter } from "expo-router";

import { useAuth } from "../../contexts/AuthContext";

import { updateUserData } from "../../functions/updateUserData";

const EditProfileScreen = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Ref's
    const nameRef = useRef();
    const emailRef = useRef();
    const bioRef = useRef();
    const photoRef = useRef();
    const User = useAuth().user;
    const { setUserData } = useAuth();

    // Image Picker
    const onPickImage = async () => {
        // Opening image gallery
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.75,
        });

        // If image was picked
        if (!result.canceled) {
            photoRef.current = result.assets[0];
        }
    };

    // Handlers
    const handleUpdateProfile = async () => {
        setLoading(true);
        // Update Profile
        let name = nameRef.current?.trim();
        let email = emailRef.current?.trim();
        let bio = bioRef.current?.trim();

        if (!name) {
            name = User.name;
        }
        if (!email) {
            email = User.email;
        }
        if (!bio) {
            bio = User.bio;
        }

        let data = {
            name,
            email,
            bio,
        };

        if (typeof photoRef.current === "object") {
            let imageRes = await uploadMedia(
                "profile",
                photoRef.current.uri,
                true
            );
            console.log("ImageRes : ", imageRes);
            if (imageRes.success) {
                data.image = imageRes.data;
            } else {
                data.image = null;
            }
        }

        const { success } = await updateUserData(User.id, data);

        if (!success) {
            Alert.alert("Error", "Something went wrong");
            setLoading(false);
            return;
        }
        setUserData({ ...User, ...data });
        console.log("User : ", User);

        setLoading(false);
        router.replace("/main/ProfileScreen");
    };
    return (
        <SafeView>
            {/* Header */}
            <View>
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="pl-5 pt-1"
                >
                    <BackSvg color="#8b5cf6" size={24} />
                </TouchableOpacity>
            </View>
            {/* Edit Profile */}
            <View className="p-3 pl-7 pr-7 flex-1 gap-5 mt-20 items-center justify-center">
                <Text className="font-[playfair-medium] text-gray-700 text-3xl">
                    Let's Edit Your Profile
                </Text>
                {/* General */}
                <Text className="font-[roboto] text-gray-500 text-lg">
                    General
                </Text>
                <TextInput
                    onChangeText={(value) => (nameRef.current = value)}
                    className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                    placeholder={User.name}
                />
                <TextInput
                    onChangeText={(value) => (emailRef.current = value)}
                    className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                    placeholder={User.email}
                />
                {/* Bio and photo  */}
                <Text className="font-[roboto] text-gray-500 text-lg">
                    Photo And Bio
                </Text>
                <View className="flex-row items-center justify-between gap-3 w-full">
                    <TouchableOpacity
                        onPress={() => onPickImage()}
                        className="flex-row flex-1 items-center justify-center gap-2 border border-gray-200 rounded-2xl p-2"
                    >
                        <AddImageSvg size={20} color="#4B5563" />
                        <Text className="font-[roboto] text-md text-gray-600">
                            Update your profile picture
                        </Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    onChangeText={(value) => (bioRef.current = value)}
                    className="bg-violet-100 font-[roboto] text-gray-500 placeholder:text-gray-400 p-5 rounded-xl w-full"
                    placeholder={User.bio}
                    multiline={true}
                />

                {/* Update Button */}
                <TouchableOpacity
                    onPress={() => handleUpdateProfile()}
                    className="bg-violet-500 font-[roboto] p-4 pl-5 shadow-md shadow-purple-200 rounded-2xl w-full"
                >
                    {loading ? (
                        <ActivityIndicator size={25} color="white" />
                    ) : (
                        <Text className="text-center font-[roboto-medium] text-md p-[5px] text-violet-50">
                            Update Profile
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </SafeView>
    );
};

export default EditProfileScreen;
