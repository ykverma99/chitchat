import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, Platform } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { blurhash } from "@/utils/common";
import { useAuth } from "@/context/authContext";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import CustomMenuItems from "./CustomMenuItems";
import { AntDesign, Feather } from "@expo/vector-icons";

const ios = Platform.OS == "ios";

const HomeHeader = () => {
  const { user, logout } = useAuth();
  const { top } = useSafeAreaInsets();

  const handleProfile = () => {};
  const handleLogOut = async () => {
    await logout();
  };
  return (
    <View
      className="flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl"
      style={{ paddingTop: ios ? top : top + 10 }}
    >
      <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
        Chats
      </Text>

      <View>
        <Menu>
          <MenuTrigger>
            <Image
              style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
              source={user?.profileUrl}
              placeholder={blurhash}
              transition={500}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                borderRadius: 10,
                borderCurve: "continuous",
                marginTop: 40,
                marginLeft: -20,
                backgroundColor: "white",
                elevation: 5,
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 0 },
                width: 160,
              },
            }}
          >
            <CustomMenuItems
              text={"Profile"}
              action={handleProfile}
              value={null}
              icon={<Feather name="user" size={hp(2.5)} color={"#737373"} />}
            />
            <Divider />
            <CustomMenuItems
              text={"Sign Out"}
              action={handleLogOut}
              value={null}
              icon={
                <AntDesign name="logout" size={hp(2.5)} color={"#737373"} />
              }
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

const Divider = () => {
  return <View className="p-[1px] w-full bg-neutral-200" />;
};

export default HomeHeader;
