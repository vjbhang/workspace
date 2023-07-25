import { createContext, useContext, useReducer } from "react";
import { AuthAction, AuthInterface } from "@/typescript/interface";

export const AuthContext: any = createContext(null);
// @ts-ignore
export const AuthDispatchContext: any = createContext(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // @ts-ignore
  const [auth, dispatch] = useReducer(authReducer, initialAuth);

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

function authReducer(state: AuthInterface[], action: AuthAction) {
  switch (action.type) {
    case "login": {
      return state.map((item) => {
        if (item.id === action.auth.id) {
          return { auth: action.auth, authenticated: true };
        } else {
          return item;
        }
      });
    }
    case "logout": {
      return state.map((item) => {
        if (item.id === action.auth.id) {
          return { auth: action.auth, authenticated: false };
        } else {
          return item;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatchContext);
}

const initialAuth: AuthInterface[] = [{ id: 1, name: "Hello World" }];
