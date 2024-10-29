import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import SafeView from "../../components/SafeView";

// Component Imports
import Header from "../../components/Header";
import PostTemplate from "../../components/PostTemplate";
import CreatePost from "../../components/CreatePost";
import ShowPosts from "../../components/ShowPosts";
const home = () => {
    return (
        <SafeView>
            {/* Header */}
            <Header />
            {/* Create Post */}
            <CreatePost />
            {/* Posts */}
            <ShowPosts />
        </SafeView>
    );
};

export default home;
