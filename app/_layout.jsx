import { Stack, useRouter } from "expo-router";
// Setting Up Custom Fonts
import { useFonts } from "expo-font";

// Context Imports
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";

import "../global.css";
import { useEffect } from "react";

import { getUserData } from "../functions/getUserData";

const _layout = () => {
    return (
        <AuthProvider>
            <RootLayout />
        </AuthProvider>
    );
};

const RootLayout = () => {
    //Defining fonts
    useFonts({
        // Playfair Display
        playfair: require("../assets/fonts/playfair_display/PlayfairDisplay-Regular.ttf"),
        "playfair-medium": require("../assets/fonts/playfair_display/PlayfairDisplay-Medium.ttf"),
        "playfair-bold": require("../assets/fonts/playfair_display/PlayfairDisplay-Bold.ttf"),

        // Roboto
        roboto: require("../assets/fonts/roboto/Roboto-Regular.ttf"),
        "roboto-medium": require("../assets/fonts/roboto/Roboto-Medium.ttf"),
        "roboto-bold": require("../assets/fonts/roboto/Roboto-Bold.ttf"),
    });

    // Implementing authentication
    const { setAuth, setUserData } = useAuth();
    const router = useRouter();

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                setAuth(session?.user);
                updateUserData(session?.user);
                router.replace("/main/home");
            } else {
                setAuth(null);
                router.replace("/welcome");
            }
        });
    }, []);

    const updateUserData = async (user) => {
        const { success, data } = await getUserData(user?.id);
        if (success) {
            setUserData(data);
        }
    };

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" />
        </Stack>
    );
};

export default _layout;
