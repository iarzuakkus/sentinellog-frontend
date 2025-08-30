import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import LogAsistan from "./pages/LogAsistan";
import Rapor from "./pages/Rapor";

import "./styles/global.css";

export default function App() {
  const [activePage, setActivePage] = useState("logasistan"); // hangi sayfa açık
  const [showModal, setShowModal] = useState(false); // bildirim modal

  return (
    <div className={`app-container ${showModal ? "blurred" : ""}`}>
      {/* Header’a activePage veriyoruz */}
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      {/* Orta alan */}
      <main className="main-content">
        {activePage === "logasistan" && <LogAsistan />}
        {activePage === "rapor" && <Rapor />}
      </main>

      <Footer />
      <Notification showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
