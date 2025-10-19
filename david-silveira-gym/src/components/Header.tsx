import React, { useState } from 'react';
import '../styles/Header.css';
import { IoIosClose } from 'react-icons/io';
import { IoIosMenu } from 'react-icons/io';

const ACADEMIA_NAME = 'DAVID SILVEIRA';
const SLOGAN = 'GYM & FIGHT';

const navLinks = [
  { name: 'Início', href: '#' },
  { name: 'O Professor', href: '#professor' },
  { name: 'Modalidades', href: '#modalidades' },
  { name: 'Contato', href: '#contato' },
];

interface HeaderProps {
    onMatriculeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMatriculeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };


  return (
    <header className="main-header">
      <div className="header-content container">

        <div className="logo">
          <a href="#">
            <span className="logo-name">{ACADEMIA_NAME}</span>
            <span className="logo-slogan">{SLOGAN}</span>
          </a>
        </div>

        <nav className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="desktop-only">
          <button className="action-button" onClick={onMatriculeClick}>
              Matricule-se
          </button>
        </div>

        <div className="mobile-only">
          <button className="menu-toggle-button" onClick={toggleMenu} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <IoIosClose className="close-icon" /> : <IoIosMenu className="menu-icon" />}
          </button>
        </div>
      </div>

      <nav className={`mobile-nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="mobile-nav-link" onClick={handleLinkClick}>
            {link.name}
          </a>
        ))}
        <a href="#contact" className="mobile-action-link" onClick={handleLinkClick}>
            <button className="action-button mobile-action-button" onClick={onMatriculeClick}>
                Matricule-se
            </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;