import { router } from "expo-router";
import React from "react";
import { Alert } from "react-native";
import { supabase } from "./supabase";

export interface IAuthContext {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    Alert.alert(error.message);
    console.error(error);
  }

  const { data } = await supabase.auth.getSession();
  Alert.alert("Created at: " + data.session?.user.created_at);
  router.replace("/home");
}

function signOut() {
  // router.replace("/");
  console.log("signing out");
}

export const AuthContext = React.createContext<IAuthContext>({
  signIn: signIn,
  signOut: signOut,
  session: null,
  isLoading: false,
});
