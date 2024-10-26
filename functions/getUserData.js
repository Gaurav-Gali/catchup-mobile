import { supabase } from "../lib/supabase";

export const getUserData = async (userId) => {
    const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", userId)
        .single();
    if (error) {
        return { success: false, data: error?.message };
    }
    return { success: true, data };
};
