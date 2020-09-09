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

export const giveUserNames = () => {
  return firebase.auth().currentUser;
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
