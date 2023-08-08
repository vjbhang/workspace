import { createContext, useReducer } from "react";

export const LoginContext = createContext<LoginSession[] | null>(null);
export const LoginDispatchContext = createContext<React.Dispatch<any> | null>(
  null
);

export function LoginProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(loginReducer, loginSession);

  return (
    <LoginContext.Provider value={tasks}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

function loginReducer(tasks: LoginSession[], action: LoginSessionAction) {
  switch (action.type) {
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.login.id) {
          return action.login;
        } else {
          return t;
        }
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const loginSession: LoginSession[] = [{ id: 0, name: "", session: "" }];

interface LoginSession {
  id: number;
  name: string;
  session: string;
}

interface LoginSessionAction {
  type: "changed";
  login: LoginSession;
}
