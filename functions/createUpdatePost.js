import { supabase } from "../lib/supabase";
import { uploadMedia } from "./uploadMedia";

export const createUpdatePost = async (data) => {
    const userId = data.userId;
    let caption = data.caption;
    let media = data.media;
    let fileResult = null;
    try {
        // Uploading media
        fileResult = await uploadMedia(
            media?.type === "images" ? "postImages" : "postVideos",
            media?.uri,
            media?.type === "images" ? true : false
        );
        if (fileResult.success) {
            media = fileResult.data;
        } else {
            return fileResult;
        }

        const { data, error } = await supabase
            .from("posts")
            .upsert({
                userId,
                body: caption,
                image: media,
            })
            .select()
            .single();

        if (error) {
            console.log(error);
            return {
                success: false,
            };
        } else {
            return { success: true, data: data };
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
        };
    }
};
