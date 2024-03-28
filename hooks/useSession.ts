import React from "react";
import { AuthContext, IAuthContext } from "../lib/auth-context";

// This hook can be used to access the user info.
export function useSession(): IAuthContext {
  const context = React.useContext<IAuthContext>(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!context) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return context;
}
