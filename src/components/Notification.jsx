import React, { useState } from "react";
import "../styles/notification.css";
import bellIcon from "../assets/notification.svg";

export default function Notification() {
  const [active, setActive] = useState(false);

  return (
    <div 
      className={`notification ${active ? "active" : ""}`} 
      onClick={() => setActive(!active)}
    >
      <img src={bellIcon} alt="Notification" className="bell-icon" />
    </div>
  );
}
