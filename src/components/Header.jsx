import React, { useState } from "react";
import "../styles/header.css";
import logo from "../assets/logo.svg";
import MenuPanel from "./MenuPanel";

export default function Header({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo + Yazı */}
      <div className="logo-section">
        <img src={logo} alt="SentinelLog Logo" className="logo-img" />
        <h1 className="logo-text">SentinelLog</h1>
      </div>

      {/* Hamburger */}
      <div 
        className={`hamburger ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menü Paneli */}
      {menuOpen && (
        <MenuPanel onClose={() => setMenuOpen(false)} setActivePage={setActivePage} />
      )}
    </header>
  );
}
