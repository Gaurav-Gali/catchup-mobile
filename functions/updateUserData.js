import { supabase } from "../lib/supabase";

export const updateUserData = async (userId, data) => {
    const { error } = await supabase
        .from("users")
        .update(data)
        .eq("id", userId);
    if (error) {
        return { success: false };
    }
    return { success: true };
};
