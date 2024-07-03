import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@/context/authContext";

const home = () => {
  const { logout, user } = useAuth();
  const handleLogOut = async () => {
    await logout();
  };

  return (
    <View>
      <Text>home</Text>

      <Button title="Sign Out" onPress={handleLogOut} />
    </View>
  );
};

export default home;
