import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "@/components/Loading";
import CustomKeyboardView from "@/components/CustomKeyboardView";

const signIn = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign In", "Please fill all the field");
      return;
    }

    // login process
  };

  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* singIn image */}
        <View className="items-center">
          <Image
            source={require("../assets/images/login.png")}
            style={{ height: hp(25) }}
            resizeMode="contain"
          />
        </View>
        <View className="space-y-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            Sign In
          </Text>
          <View className="space-y-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row space-x-3 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <Octicons name="mail" size={hp(2.7)} color={"gray"} />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email address"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="space-y-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row space-x-3 px-4 bg-neutral-100 items-center rounded-2xl"
              >
                <Octicons name="lock" size={hp(2.7)} color={"gray"} />
                <TextInput
                  onChangeText={(value) => (passwordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                  secureTextEntry
                />
              </View>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-right text-neutral-500"
              >
                Forgot password?
              </Text>
            </View>

            {/* Submit button */}

            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleLogin}
                  className="bg-indigo-500 justify-center items-center rounded-xl"
                  style={{ height: hp(6.5) }}
                >
                  <Text
                    className="text-white font-bold tracking-wider text-center"
                    style={{ fontSize: hp(2.7) }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* signup text */}

            <View className="flex-row justify-center">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semibold text-neutral-500"
              >
                Don't have an account?{" "}
              </Text>
              <Pressable
                onPress={() => {
                  router.push("/signUp");
                }}
              >
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-bold text-indigo-500"
                >
                  Sing Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default signIn;
