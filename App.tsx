import { StatusBar } from "expo-status-bar";
import React from "react";

import { Home } from "./src/pages/Home";
import { Search } from "./src/pages/Search";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Search />
    </>
  );
}