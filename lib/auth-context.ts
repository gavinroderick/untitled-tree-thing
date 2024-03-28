import React from "react";

export interface IAuthContext {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

function signIn() {
  // router.replace("/home");
  console.log("signing out");
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
