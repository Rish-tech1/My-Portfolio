import React from 'react'
import { Dropdown, DropdownMenuItem, DropdownTrigger, DropdownMenu } from '../components/Dropdown'
import MenuIcon from "../assets/icons/menu.svg?react";

export default function Menu() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 1000
        }}>
            <Dropdown align="bottom-right">
                <DropdownTrigger>
                    <MenuIcon />
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownMenuItem onClick={() => scrollToSection("about")}>About</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => scrollToSection("skills")}>Skills</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => scrollToSection("experience")}>Experience</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => scrollToSection("testimonials")}>Testimonials</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => scrollToSection("education")}>Education</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => scrollToSection("projects")}>Projects</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => scrollToSection("contact")}>Contact</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}