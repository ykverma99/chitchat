import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MessageItem = ({ message, currentUser }) => {
  if (currentUser?.userId === message?.userId) {
    // my message
    return (
      <View className="flex-row justify-end mb-3 mr-3">
        <View style={{ width: wp(80) }}>
          <View className="flex self-end p-3 border border-neutral-200 rounded-2xl bg-white">
            <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View className="ml-3 mb-3" style={{ width: wp(80) }}>
        <View className="flex self-start p-3 px-4 bg-indigo-100 border border-indigo-200 rounded-2xl">
          <Text style={{ fontSize: hp(1.9) }}>{message?.text}</Text>
        </View>
      </View>
    );
  }
};

export default MessageItem;
