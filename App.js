import React from "react";
//import { LogBox } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";

//LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return <Navigation />;
}

//***----------------------------------------------------------------------------------------------------------------------***
//node_modules \ react-native \ Libraries \ Core \ Timers \ JSTimers.js
//En la fila 47, hay una función  const MAX_TIMER_DURATION_MS = 60 * 1000y aumenté el tiempo a 60 * 10000 y  me dejó de aparecer.
