import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flexGrow: 1, backgroundColor: "#3fc295"}} edges={["top"]}>
            <View >
                <View style={{height: 50, flexDirection: "row"}}>
                    <View style={{ width: 50, justifyContent: "center", alignItems: "center" }}>
                        <FontAwesome5 name="chart-pie" size={24} color={"white"}></FontAwesome5>
                    </View>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 20, color: "white", fontWeight: "bold" }}> Dividend Income </Text>
                    </View>
                    <View style={{ width: 50, justifyContent: "center", alignItems: "center" }}>
                       <EvilIcons name="plus" size={32} color={"white"}></EvilIcons>
                    </View>
                </View>
                <View style={{height: 90, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{ fontSize: 20, color: "white" }}> Annually </Text>
                    <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}> -- </Text>
                </View>
                <View style={{height: 90, flexDirection:"row"}}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontSize: 20, color: "white" }}>Monthly</Text>
                        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}> -- </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontSize: 20, color: "white" }}> Daily </Text>
                        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}> -- </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "black" }}>
            <Text> Daily </Text>
            </View>
        </SafeAreaView>
        
    )
}
