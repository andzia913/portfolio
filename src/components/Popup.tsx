import React, { useEffect, useState, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "../styles/popup.scss";

interface PopupProps {
  handleClosePopup: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ handleClosePopup, children }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const popupCloseRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popupCloseRef.current &&
      popupCloseRef.current.contains(event.target as Node)
    ) {
      handleClosePopup();
    }
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup" ref={popupRef}>
      <div className="popup__close-icon" ref={popupCloseRef}>
        <IoIosCloseCircle />
      </div>
      {children}
    </div>
  );
};

export default Popup;
