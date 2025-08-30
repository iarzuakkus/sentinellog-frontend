import React, { useState } from "react";
import "../styles/logasistan.css";
import sendButton from "../assets/send-button.svg";

export default function LogAsistan() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);

  const handleSubmit = () => {
    if (!question.trim()) return;

    // ⚡ Backend geldiğinde buraya API isteği eklenecek
    setAnswer("/api/user endpoint’i son 7 gün içerisinde toplam 457 hata ile en fazla hatayı üreten endpoint olmuştur.");
    setQuestion(""); // input temizlensin
  };

  return (
    <div className="page">
      <div className="chat-card">
        
        {/* Input alanı */}
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Bir soru sorun..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="send-btn" onClick={handleSubmit}>
            <img src={sendButton} alt="Send" />
          </button>
        </div>

        {/* Cevap alanı */}
        {answer && (
          <div className="answer-box">
            <p>{answer}</p>

            {/* Memnuniyet */}
            <div className="feedback">
              <p>Bu yanıttan memnun musunuz?</p>
              <button>Evet</button>
              <button>Hayır</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
