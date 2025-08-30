import React from "react";
import "../styles/menu.css";

export default function MenuPanel({ open, onClose, activePage, setActivePage }) {
  return (
    <div className={`menu-panel ${open ? "open" : ""}`}>
      <button
        className={activePage === "logasistan" ? "active" : ""}
        onClick={() => {
          setActivePage("logasistan");
          onClose();
        }}
      >
        Log Asistan
      </button>

      <button
        className={activePage === "rapor" ? "active" : ""}
        onClick={() => {
          setActivePage("rapor");
          onClose();
        }}
      >
        Rapor
      </button>

      <button disabled>Log Sınıflandırma</button>
      <button disabled>Giriş Yap / Çıkış Yap</button>
    </div>
  );
}
