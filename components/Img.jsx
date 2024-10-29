import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { getSupabaseFilePath } from "../functions/uploadMedia";

const Img = (props) => {
    return (
        <View className={props.styl}>
            <Image
                style={
                    props.radius
                        ? { ...styles.image, borderRadius: props.radius }
                        : styles.image
                }
                source={
                    props.src
                        ? getSupabaseFilePath(props.src)
                        : "https://picsum.photos/seed/60/3000/2000"
                }
                contentFit="cover"
                transition={1000}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "100%",
        backgroundColor: "#0553",
    },
});
export default Img;
