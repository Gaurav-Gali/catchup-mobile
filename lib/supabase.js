import { AppState } from "react-native";
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Importing environment variables
// import { SUPABASE_URL, SUPABASE_API_KEY } from "@env";

const supabaseUrl = "https://dnduavdlmyrogrpsnjjm.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZHVhdmRsbXlyb2dycHNuamptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTQ0NTgsImV4cCI6MjA0NTUzMDQ1OH0.cH82DONdOPVXQeH3F9ih6PPLeW6VFYTq9eyPHzf5OSI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
    if (state === "active") {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});
