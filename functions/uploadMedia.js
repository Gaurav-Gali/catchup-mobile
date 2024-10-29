import * as FileSystem from "expo-file-system";
import { decode } from "base64-arraybuffer";
import { supabase } from "../lib/supabase";

export const uploadMedia = async (folderName, fileUri, isImage = true) => {
    try {
        let fileName = getFilePath(folderName, isImage);
        const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        // Converting image data to array buffer
        let imageData = decode(fileBase64);

        // Uploading to supabase storage bucket
        let { data, error } = await supabase.storage
            .from("uploads")
            .upload(fileName, imageData, {
                cacheControl: 3600,
                upsert: false,
                contentType: isImage ? "image/*" : "video/*",
            });

        if (error) {
            console.log("File upload error : ", error);
            return { success: false };
        }
        return { success: true, data: data.path };
    } catch (error) {
        console.log("File upload error : ", error);
        return { success: false };
    }
};

export const getFilePath = (folderName, isImage) => {
    const filePath = `${folderName}/${Date.now()}.${isImage ? "jpg" : "mp4"}`;
    return filePath;
};

export const getSupabaseFilePath = (filePath) => {
    return `https://dnduavdlmyrogrpsnjjm.supabase.co/storage/v1/object/public/uploads/${filePath}`;
};
