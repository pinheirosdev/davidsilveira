import React from 'react';
import '../styles/Footer.css';
import logoImage from '../assets/logo-david.png'; 
import instagramIcon from '../assets/instagram.png';
import whatsappIcon from '../assets/whatsapp.png';
import facebookIcon from '../assets/facebook.png';

const ACADEMIA_PHONE = '43991630462'; 

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        
        <div className="footer-col footer-about">
          <img 
            src={logoImage} 
            alt="Logo David Silveira | Gym & Fight" 
            className="footer-logo"
          />
          <p className="footer-description">
            Transformando corpos e mentes através da disciplina das Artes Marciais. Treine com o Mestre David Silveira.
          </p>
        </div>
        
        <div className="footer-col footer-links">
          <h4>LINKS RÁPIDOS</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#about">O Mestre</a></li>
            <li><a href="#modalities">Modalidades</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        
        <div className="footer-col footer-contact">
          <h4>FALE CONOSCO</h4>
          <p>Rua Pará, 1122</p>
          <p>Centro - Londrina/PR</p>
          <p>
            <a href={`tel:+55${ACADEMIA_PHONE}`} className="contact-link">
              (43) 99163-0462
            </a>
          </p>
          
          <div className="social-icons">
            <a 
              href="https://api.whatsapp.com/send?phone=5543999230361" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp" 
              className="social-link social-image-icon"
            >
              <img src={whatsappIcon} alt="Ícone WhatsApp" className="social-icon-img" />
            </a> 
            
            <a 
              href="https://www.instagram.com/davidkickboxing" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="social-link social-image-icon"
            >
              <img src={instagramIcon} alt="Ícone Instagram" className="social-icon-img" />
            </a>
            
            <a 
              href="https://www.facebook.com/david.silveira.551557" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="social-link social-image-icon"
            >
              <img src={facebookIcon} alt="Ícone Facebook" className="social-icon-img" />
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} David Silveira | Gym & Fight. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;