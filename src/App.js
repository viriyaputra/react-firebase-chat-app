import React, { useState } from "react";
import "./App.css";
import { Auth } from "./components/Auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  if (!isAuth) {
    return (
      <div>
        <Auth />
      </div>
    );
  }

  if (room) {
    return <div> Chat </div>;
  }

  return (
    <div className="room">
      <label> Enter Room Number</label>
      <input />
      <button> Enter Chat</button>
    </div>
  );
}

export default App;
