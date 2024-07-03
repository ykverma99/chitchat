import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, router, useSegments } from "expo-router";
import { AuthContextProvider, useAuth } from "@/context/authContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segaments = useSegments();

  useEffect(() => {
    // check if user is authenticated or not

    if (typeof isAuthenticated === "undefined") return;

    const inApp = segaments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      // redirect to home
      router.replace("home");
    } else if (isAuthenticated == false) {
      //  redirect to signin
      router.replace("signIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

export default RootLayout;
