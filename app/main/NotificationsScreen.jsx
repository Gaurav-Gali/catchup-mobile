import { Text, View } from "react-native";
import React, { Component } from "react";
import SafeView from "../../components/SafeView";
import Header from "../../components/Header";
export class NotificationsScreen extends Component {
    render() {
        return (
            <SafeView>
                {/* Header */}
                <Header notification={true} />
            </SafeView>
        );
    }
}

export default NotificationsScreen;
