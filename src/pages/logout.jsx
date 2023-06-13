import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { logoutCometChatUser } from "../cometChat";
export default function LogoutPage() {
  const history = useNavigate();
  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .then(async () => {
        await logoutCometChatUser();
        history.push("/");
      });
  }, []);
  return <div />;
}
