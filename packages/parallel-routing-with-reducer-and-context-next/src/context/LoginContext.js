import { createContext, useContext, useReducer } from "react";

const LoginContext = createContext(null);

const LoginDispatchContext = createContext(null);

export function LoginProvider({ children }) {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}

export function useLoginDispatch() {
  return useContext(LoginDispatchContext);
}

function loginReducer(item, action) {
  switch (action.type) {
    case "changed": {
      if (item.login.id === 0) {
        return action.login;
      } else {
        return item;
      }
    }
    default: {
      throw Error("Unknown action:" + action.type);
    }
  }
}

const initialLogin = { login: { id: 0, name: null, authenticated: false } };
