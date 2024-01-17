import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  deleteField,
} from "firebase/firestore";

export default function RoomScreen({ setScreen, screens, setRoomId, roomId }) {
  const onCallOrJoin = (screen) => {
    if (roomId.length > 0) {
      setScreen(screen);
    }
  };

  //generate random room id
  useEffect(() => {
    const generateRandomId = () => {
      const characters = "abcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return setRoomId(result);
    };
    generateRandomId();
  }, []);

  //checks if room is existing
  const checkMeeting = async () => {
    if (roomId) {
      const roomRef = doc(db, "room", roomId);
      const roomSnapshot = await getDoc(roomRef);

      // console.log(roomSnapshot.data());

      if (!roomSnapshot.exists() || roomId === "") {
        // console.log(`Room ${roomId} does not exist.`);
        Alert.alert("Wait for your instructor to start the meeting.");
        return;
      } else {
        onCallOrJoin(screens.JOIN);
      }
    } else {
      Alert.alert("Provide a valid Room ID.");
    }
  };

  return (
    <View
      style={{
        backgroundColor: "rgba(29, 190, 241, 0.5)",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ paddingLeft: 20 }}>
        <Text
          style={{
            color: "#AC30E7",
            fontSize: 24,
            fontWeight: "400",
            marginTop: 60,
          }}
        >
          Make every moment count
        </Text>
        <Text
          style={{
            color: "#AC30E7",
            fontSize: 30,
            fontWeight: "700",
          }}
        >
          Start a Facecall
        </Text>
      </View>

      <View style={{ marginBottom: 200 }}>
        <View style={{ marginTop: 60 }}>
          <Text
            style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
          >
            Enter Room ID:
          </Text>
          <TextInput
            style={{
              backgroundColor: "white",
              borderColor: "#00c2ff",
              borderWidth: 2,
              marginHorizontal: 10,
              marginVertical: 10,
              padding: 6,
              borderRadius: 8,
            }}
            placeholder="Enter valid id"
            value={roomId}
            onChangeText={setRoomId}
          />
        </View>

        <View style={{ marginHorizontal: 10, marginTop: 20, gap: 3 }}>
          <TouchableOpacity
            style={{ backgroundColor: "#AC30E7", padding: 2, borderRadius: 8 }}
            onPress={() => onCallOrJoin(screens.CALL)}
          >
            <Text
              style={{
                color: "#FFF",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                paddingVertical: 6,
              }}
            >
              Start meeting
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 10, marginTop: 10, gap: 3 }}>
          <TouchableOpacity
            style={{ backgroundColor: "#AC30E7", padding: 2, borderRadius: 8 }}
            onPress={() => checkMeeting()}
          >
            <Text
              style={{
                color: "#FFF",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                paddingVertical: 6,
              }}
            >
              Join meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
