import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";
import React from "react";
import { supabase } from "../../lib/supabase";

import { useAuth } from "@/contexts/AuthContext";

const home = () => {
    const { user } = useAuth();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert("Couldn't Log Out", error.message);
        }
    };
    return (
        <SafeAreaView>
            <Text>Welcome, {user.name}</Text>
            {/* Temporary Logout Button */}
            <TouchableOpacity onPress={() => handleLogout()}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default home;
