import { Text, View } from "react-native";
import React, { Component } from "react";
import SafeView from "../../components/SafeView";
import Header from "../../components/Header";
export class CreateScreen extends Component {
    render() {
        return (
            <SafeView>
                {/* Header */}
                <Header create={true} />
            </SafeView>
        );
    }
}

export default CreateScreen;
