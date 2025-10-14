

import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; 
import Achievements from './Achievements';
import History from './History';
import '../styles/About.css';
import img1 from '../assets/foto1.jpg'; 
import img2 from '../assets/foto2.jpg'; 
import img3 from '../assets/foto3.jpg'; 
import img4 from '../assets/foto4.jpg'; 
import img5 from '../assets/foto5.jpg'; 
import img6 from '../assets/foto6.jpg'; 

const carouselImages = [img4, img1, img2, img3, img5, img6];

const About: React.FC = () => {
  const [showAchievements, setShowAchievements] = useState(false);

  const toggleAchievements = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    setShowAchievements(!showAchievements);
  };

  const autoplayOptions = React.useMemo(() => ({
    delay: 4000,
    stopOnInteraction: false,
  }), []);

  const [emblaRef, emblaApi] = useEmblaCarousel( 
      { 
          loop: true, 
          align: 'start',
          slidesToScroll: 1,
          containScroll: 'keepSnaps',
      },
      [Autoplay(autoplayOptions)] 
  ); 

React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
    };

    emblaApi.on('select', onSelect); 
    
    return () => {
        emblaApi.off('select', onSelect);
    };

}, [emblaApi]); 

  return (
    <section className="about-section">
      <div className="container about-content">
        
        <div className="about-image-wrapper">
          <div className="embla-about" ref={emblaRef}>
                <div className="embla-about__container">
                    {carouselImages.map((imageSrc, index) => (
                        <div className="embla-about__slide" key={index}>
                            <img src={imageSrc} alt={`Foto de treino ${index + 1} do Professor David Silveira`} className="about-profile-pic"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="about-text-wrapper">
          <h2 className="section-title red-text">
            REFERÊNCIA NACIONAL
          </h2>
          <h3 className="about-subtitle">
            Mais de 25 Anos de Carreira e Centenas de Títulos Conquistados
          </h3>
          
          <p className="about-paragraph">
            Referência nacional nas artes marciais, David Silveira tem mais de 25 anos de carreira, passagens por 12 países e centenas de títulos conquistados. Ele é ,<strong>Faixa Preta 5º dan em Kickboxing, kruang preto de Muaythai e faixa marrom de Jiu-Jitsu</strong>.
          </p>
          
          <p className="about-paragraph">
            Como professor, técnico e mentor, David já representou o Brasil em competições internacionais e treinou atletas de elite do <strong>WGP, UFC e seleções oficiais</strong>. David criou um estilo próprio de ensino: técnico, combativo e humano.
          </p>
          
          <p className="about-paragraph">
            À frente da Academia que leva seu nome, seu foco é formar campeões nas artes marciais — mas, acima de tudo, <strong>formar pessoas</strong> com disciplina, foco e resiliência.
          </p>

          <a href="#" className="about-cta-link" onClick={toggleAchievements} aria-expanded={showAchievements} aria-controls="achievements-details">
            {showAchievements ? 'Ocultar ↑' : 'Conheça Mais Sobre Sua História e Conquistas ↓'}
          </a>
        </div>
      </div>

    <Achievements isActive={showAchievements} />
    <History isActive={showAchievements} />

    </section>
  );
};

export default About;