import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import App from "./App";
import { Fontisto } from "@expo/vector-icons";
import { Link } from "expo-router";

const index = () => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(29, 190, 241, 0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <Text
          style={{
            color: "#AC30E7",
            fontSize: 42,
            fontWeight: "700",
            letterSpacing: 0.8,
          }}
        >
          Let's Join
        </Text>
        <Text
          style={{
            color: "#AC30E7",
            fontSize: 42,
            fontWeight: "700",
            letterSpacing: 0.8,
          }}
        >
          Facecall Family
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 300,
            width: 350,
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../assets/facecallWomen.png")}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </View>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Link
          href="/App"
          style={{
            backgroundColor: "#AC30E7",
            width: 280,
            borderRadius: 150,
            elevation: 5,
            shadowColor: "#000",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: 280,
              gap: 20,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 40,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "500",
                fontSize: 21,
                color: "#FFF",
                letterSpacing: 0.5,
              }}
            >
              Get Started
            </Text>
            <Fontisto name="arrow-right-l" size={24} color="#FFF" />
          </View>
        </Link>
      </View>
    </View>
  );
};

export default index;
