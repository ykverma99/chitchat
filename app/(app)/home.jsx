import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, Button, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { StatusBar } from "expo-status-bar";
import ChatList from "@/components/ChatList";
import { getDocs, query, where } from "firebase/firestore";
import { userRef } from "@/firebaseConfig";

const home = () => {
  const { user } = useAuth();
  const [users, setusers] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {
    // fetch User
    const q = query(userRef, where("userId", "!=", user?.uid));

    const querySnapshot = await getDocs(q);

    let data = [];

    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });

    setusers(data);
  };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {users.length > 0 ? (
        <ChatList currentUser={user} users={users} />
      ) : (
        <View className="flex  items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size={"large"} color={"gray"} />
        </View>
      )}
    </View>
  );
};

export default home;
