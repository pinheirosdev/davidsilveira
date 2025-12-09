import React from 'react';
import logoImage from '../assets/logo-david.png'; 
import '../styles/Hero.css';

interface HeroProps {
    onExperimentalClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExperimentalClick }) => {
  return (
    <section className="hero">
      <div className="hero-content container">
        
        <img src={logoImage} alt="Logo David Silveira | Gym & Fight" className="hero-logo"/>

        <h1 className="hero-title">
          TREINE FORTE. <span className="red-text">LUTE MELHOR.</span>
        </h1>

        <p className="hero-subtitle">
          Kickboxing, Muay Thai, Boxe, MMA e Karatê. Transforme-se com o Mestre David Silveira.
        </p>

        <button className="hero-cta-button" onClick={onExperimentalClick}>
          Agende Sua Aula Experimental
        </button>
      </div>
    </section>
  );
};

export default Hero;
