import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const deleteUserFromFirebase = () => {
    const user = auth.currentUser;
    return deleteUser(user);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    createUser,
    deleteUserFromFirebase,
    signInUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
