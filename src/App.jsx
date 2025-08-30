import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import LogAsistan from "./pages/LogAsistan";
import Rapor from "./pages/Rapor";

import "./styles/global.css";


export default function App() {
  const [activePage, setActivePage] = useState("logasistan");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`app-container ${showModal ? "blurred" : ""}`}>
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main className="main-content">
        {activePage === "logasistan" && <LogAsistan />}
        {activePage === "rapor" && <Rapor />}
      </main>

      <Footer />
      <Notification showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
