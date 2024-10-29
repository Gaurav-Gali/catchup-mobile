import { supabase } from "../lib/supabase";

export const fetchPosts = async (userId) => {
    try {
        if (userId) {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("userId", userId)
                .order("created_at", { ascending: false });
            if (error) {
                console.log("ERROR : ", error);
                return { success: false };
            } else {
                return { success: true, data: data };
            }
        } else {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .order("created_at", { ascending: false })
                .limit(10);
            if (error) {
                console.log("ERROR : ", error);
                return { success: false };
            } else {
                return { success: true, data: data };
            }
        }
    } catch (error) {
        console.log("ERROR : ", error);
        return { success: false };
    }
};
