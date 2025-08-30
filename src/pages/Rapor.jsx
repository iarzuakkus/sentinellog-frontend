import React, { useState } from "react";
import "../styles/rapor.css";

export default function Rapor() {
  const [email, setEmail] = useState("");

  const handleReport = () => {
    if (!email.trim()) return;
    // ⚡ Backend geldiğinde API isteği buraya eklenecek
    alert(`Rapor ${email} adresine gönderilecek.`);
    setEmail(""); // input temizlensin
  };

  return (
    <div className="page">
      <div className="chat-card">
        
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Mail adresinizi girin..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleReport()}
          />
        </div>

        <button className="report-btn" onClick={handleReport}>
          Rapor Oluştur
        </button>

      </div>
    </div>
  );
}
