import React, { useState, createContext, useContext, useRef, useEffect } from "react";
import "../styles/Dropdown.css";

const DropdownContext = createContext();

export const Dropdown = ({ children, align = "bottom-left" }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    const toggle = () => setOpen(!open);
    const close = () => setOpen(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                close();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <DropdownContext.Provider value={{ open, toggle, close, align }}>
            <div className="dropdown" ref={dropdownRef}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

export const DropdownTrigger = ({ children }) => {
    const { toggle } = useContext(DropdownContext);
    return (
        <div className="dropdown-trigger" onClick={toggle}>
            {children}
        </div>
    );
};

export const DropdownMenu = ({ children }) => {
    const { open, align } = useContext(DropdownContext);
    return (
        <div className={`dropdown-menu ${open ? "open" : ""} ${align}`}>
            {children}
        </div>
    );
};

export const DropdownMenuItem = ({ children, onClick }) => {
    const { close } = useContext(DropdownContext);
    const handleClick = (e) => {
        if (onClick) onClick(e);
        close();
    };
    return (
        <div className="dropdown-menu-item" onClick={handleClick}>
            {children}
        </div>
    );
};
