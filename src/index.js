import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";
import { CometChat } from "@cometchat-pro/chat";
import firebase from "firebase/compat/app";

// import "./styles/index.css";
// import "./styles/tailwind.css";
import App from "./App";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(process.env.REACT_APP_COMETCHAT_REGION)
  .build();
CometChat.init(process.env.REACT_APP_COMETCHAT_APP_ID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    ReactDOM.render(
      <React.StrictMode>
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
          <FirestoreProvider {...firebaseConfig} firebase={firebase}>
            <App />
          </FirestoreProvider>
        </FirebaseAuthProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);
