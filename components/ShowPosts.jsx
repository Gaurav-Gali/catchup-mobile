import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { fetchPosts } from "../functions/fetchPosts";
import PostTemplate from "./PostTemplate";
import { useState, useEffect } from "react";
const ShowPosts = ({ userId }) => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getPosts();
    }, []);
    const getPosts = async () => {
        setLoading(true);
        let res = await fetchPosts(userId);
        if (res.success) {
            setPosts(res.data);
            console.log("POSTS : ", res.data);
        } else {
            console.log("Error in loading posts : ");
        }
        setLoading(false);
    };
    return (
        <View>
            {loading ? (
                <View className="mt-5">
                    <ActivityIndicator color="#A78BFA" />
                </View>
            ) : (
                <View>
                    {posts?.map((post) => (
                        <PostTemplate key={post.id} username="Test" createdAt={post.created_at} image={post.image} body={post?.body} />
                    ))}
                </View>
            )}
        </View>
    );
};

export default ShowPosts;
