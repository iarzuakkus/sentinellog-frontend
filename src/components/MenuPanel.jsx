import React from "react";
import "../styles/menu.css";

export default function MenuPanel({ open, onClose, setActivePage }) {
  return (
    <div className={`menu-panel ${open ? "open" : ""}`}>
      <button onClick={() => { setActivePage("logasistan"); onClose(); }}>
        Log Asistan
      </button>
      <button onClick={() => { setActivePage("rapor"); onClose(); }}>
        Rapor
      </button>
      <button disabled>Log Sınıflandırma</button>
      <button disabled>Giriş Yap / Çıkış Yap</button>
    </div>
  );
}
