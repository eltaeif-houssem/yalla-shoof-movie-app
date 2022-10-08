// initialState interface
export interface initialStateInt {
  isLoggedIn: boolean;
  user: any;
}

// action reducer interface
export interface actionReducerInt {
  type: string;
  payload: any;
}

// snack interface
export interface snackInt {
  open: boolean;
  severity: "warning" | "error" | "";
  message: string;
}

// context provider interface
export interface contextInt {
  children: JSX.Element[] | JSX.Element;
}
