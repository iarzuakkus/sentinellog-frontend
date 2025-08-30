import React, { useState } from "react";
import "../styles/notificationModal.css";
import okIcon from "../assets/ok.svg";

export default function NotificationModal({ onClose, records = [] }) {
  const [page, setPage] = useState(0);
  const pageSize = 6;

  const totalPages = Math.ceil(records.length / pageSize);
  const startIndex = page * pageSize;
  const visibleRecords = records.slice(startIndex, startIndex + pageSize);

  return (
    <>
      {/* Overlay */}
      <div className="overlay" onClick={onClose}></div>

      {/* Modal kutusu */}
      <div className="notification-modal">
        <div className="modal-header">
          <h3>Geçmiş Anomoli Tespitleri</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {visibleRecords.length > 0 ? (
            visibleRecords.map((rec, idx) => (
              <div key={idx} className="record-row">{rec}</div>
            ))
          ) : (
            Array.from({ length: pageSize }).map((_, idx) => (
              <div key={idx} className="record-row empty"></div>
            ))
          )}
        </div>

        <div className="modal-footer">
          <button 
            className="arrow-btn" 
            onClick={() => setPage(page - 1)} 
            disabled={page === 0}
          >
            <img src={okIcon} alt="Önceki" />
          </button>
          <button 
            className="arrow-btn" 
            onClick={() => setPage(page + 1)} 
            disabled={page >= totalPages - 1 || totalPages === 0}
          >
            <img src={okIcon} alt="Sonraki" style={{ transform: "rotate(180deg)" }} />
          </button>
        </div>
      </div>
    </>
  );
}
