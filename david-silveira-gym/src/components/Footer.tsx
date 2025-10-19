import React from 'react';
import '../styles/Footer.css';
import logoImage from '../assets/logo-david.png'; 
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

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
        </div>
        
        <div className="footer-col footer-links">
          <h4>LINKS RÁPIDOS</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#professor">O Professor</a></li>
            <li><a href="#modalidades">Modalidades</a></li>
            <li><a href="#contato">Contato</a></li>
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
              
              <FaWhatsapp className="react-icon" /> 
            </a> 
            
            <a 
              href="https://www.instagram.com/davidkickboxing" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="social-link social-image-icon"
            >
              <FaInstagram className="react-icon" /> 
            </a>
            
            <a 
              href="https://www.facebook.com/david.silveira.551557" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="social-link social-image-icon"
            >
              <FaFacebook className="react-icon" /> 
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} David Silveira | Gym & Fight. Todos os direitos reservados.</p>
          
          <p className="developer-signature">
            Desenvolvido por Lucas Pinheiro
            <a 
              href="https://www.linkedin.com/in/pinheiros-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="signature-link"
            >
            <FaLinkedin className="react-icon" />
            </a>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;