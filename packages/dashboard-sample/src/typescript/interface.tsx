export interface AuthInterface {
  id: number | null;
  name: string | null;
}

export interface AuthAction {
  type: "login" | "logout";
  auth: AuthInterface;
  authenticated: boolean;
}
