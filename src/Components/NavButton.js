import React from "react";

export default function NavButton({ showNav, showNavigation, toggleComps }) {
  return (
    <button
      className={`nav-toggle ${showNav && "nav-open"} print-hide`}
      aria-label="toggle navigation"
      onClick={() => {
        showNavigation();
        toggleComps();
      }}
    >
      <span className="hamburger"></span>
    </button>
  );
}
