import React, { useState } from "react";
import "../styles/notification.css";
import bellIcon from "../assets/notification.svg";
import NotificationModal from "./NotificationModal";

export default function Notification() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bildirim simgesi */}
      <div 
        className={`notification ${open ? "active" : ""}`} 
        onClick={() => setOpen(true)}
      >
        <img src={bellIcon} alt="Notification" className="bell-icon" />
      </div>

      {/* Modal */}
      {open && (
        <NotificationModal 
          onClose={() => setOpen(false)} 
          records={[]}   // şimdilik boş, sonra backendden gelecek
        />
      )}
    </>
  );
}
