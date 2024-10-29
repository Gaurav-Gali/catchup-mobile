import { KeyboardAvoidingView, ScrollView, SafeAreaView } from "react-native";
import React from "react";

const SafeView = ({ children }) => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            className="flex-1 h-full bg-purple-50"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex-1 h-full bg-purple-50"
            >
                <SafeAreaView className="flex-1 h-full mb-[100px] bg-purple-50">
                    {children}
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SafeView;
