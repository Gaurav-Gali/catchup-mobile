import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { supabase } from "../../lib/supabase";

import SafeView from "../../components/SafeView";

// Component Imports
import Header from "../../components/Header";
import PostTemplate from "../../components/PostTemplate";

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
            {/* Body */}
            {
                Array(10).fill().map((post) => {
                    return (
                        <PostTemplate />
                    )
                })
            }
            <PostTemplate />
        </SafeView>
    );
};

export default home;
