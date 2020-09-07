import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = (uid) => {
  return {
    type: "LOGIN",
    uid,
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};

const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
export default startLogin;

export const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
