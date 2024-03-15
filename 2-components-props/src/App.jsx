import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-5xl text-center ">Components & Props</h1>
      <Card username="Prince" title="HOD" />
      <Card username="Sourav" title="Assistant Prof." />
      <Card username="Vishnu" title="Lab Atendent" />
      <Card username="Paras" title="Security Gaurd" />
    </>
  );
}

export default App;
