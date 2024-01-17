import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const CallActionBox = ({ switchCamera, toggleMute, toggleCamera, endCall }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);
  const [isCamSwitched, setIsCamSwitched] = useState(false);

  const handelSwitchCamera = () => {
    switchCamera();
    setIsCamSwitched(!isCamSwitched);
  };

  const handelToggleMute = () => {
    toggleMute();
    setIsMuted(!isMuted);
  };

  const handelToggleCamera = () => {
    toggleCamera();
    setIsCamOff(!isCamOff);
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "rgba(169, 169, 169, 0.7)",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
    >
      <TouchableOpacity onPress={handelSwitchCamera}>
        {isCamSwitched ? (
          <MaterialIcons name="flip-camera-ios" size={34} color="white" />
        ) : (
          <MaterialCommunityIcons name="camera-flip" size={34} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handelToggleMute}>
        {isMuted ? (
          <FontAwesome name="microphone" size={30} color="white" />
        ) : (
          <FontAwesome name="microphone-slash" size={30} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handelToggleCamera}>
        {isCamOff ? (
          <FontAwesome5 name="camera" size={30} color="white" />
        ) : (
          <MaterialCommunityIcons name="camera-off" size={34} color="white" />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={endCall}
        style={{
          backgroundColor: "red",
          height: 50,
          width: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons name="call-end" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CallActionBox;
