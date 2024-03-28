import { router } from "expo-router";
import React from "react";

export interface IAuthContext {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

function signIn() {
  router.replace("/home");
}

function signOut() {
  router.replace("/");
}

export const AuthContext = React.createContext<IAuthContext>({
  signIn: signIn,
  signOut: signOut,
  session: null,
  isLoading: false,
});
