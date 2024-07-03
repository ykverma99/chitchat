import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";
import { useRouter } from "expo-router";

const ChatList = ({
  users,
  currentUser,
}: {
  currentUser: any;
  users: any[];
}) => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item, index) => item?.userId}
        renderItem={({ item, index }) => (
          <ChatItem
            currentUser={currentUser}
            item={item}
            index={index}
            router={router}
            noBorder={index + 1 == users.length}
          />
        )}
      />
    </View>
  );
};

export default ChatList;
