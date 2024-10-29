import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { supabase } from "../../lib/supabase";

import SafeView from "../../components/SafeView";

// Component Imports
import Header from "../../components/Header";
import PostTemplate from "../../components/PostTemplate";
import CreatePost from "../../components/CreatePost";

const home = () => {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert("Couldn't Log Out", error.message);
        }
    };

    return (
        <SafeView>
            {/* Header */}
            <Header />
            {/* Create Post */}
            <CreatePost />
            {/* Posts */}
            {Array(10)
                .fill()
                .map((post) => {
                    return <PostTemplate key={post} />;
                })}
            <PostTemplate />
        </SafeView>
    );
};

export default home;
