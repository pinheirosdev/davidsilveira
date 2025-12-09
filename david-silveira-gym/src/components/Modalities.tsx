import React from 'react'; 
import '../styles/Modalities.css';
import muaythayImage from '../assets/muay-thai.png'; 
import useEmblaCarousel from 'embla-carousel-react'; 
import EmblaCarouselPagination from './EmblaCarouselPagination';

const modalities = [
  {
    title: 'Kickboxing',
    description: 'A união perfeita de socos do boxe e chutes poderosos. Desenvolva agilidade, força e coordenação motora em um treino intenso e dinâmico.',
    icon: '🥊',
    image: null,
  },
  {
    title: 'Boxe',
    description: 'Foco na técnica de punhos, trabalho de pés e defesa. Melhora o condicionamento cardiovascular, a resistência muscular e a precisão dos golpes.',
    icon: '👊',
    image: null,
  },
  {
    title: 'Muay Thai',
    description: 'Conhecida como "A Arte dos Oito Membros", utiliza punhos, cotovelos, joelhos e canelas. Ideal para quem busca alta performance, resistência e defesa pessoal.',
    icon: '',
    image: muaythayImage, 
  },
  {
    title: 'MMA',
    description: 'O treinamento mais completo, combinando Boxe, Kickboxing, Jiu-Jitsu e Wrestling. Perfeito para quem busca ser um lutador completo ou apenas ter melhor condicionamento.',
    icon: '🔥',
    image: null,
  },
  {
    title: 'Jiu-Jitsu',
    description: 'A arte suave foca em alavancas e posições de domínio no chão. Aumenta o foco, a disciplina e a capacidade de defesa, independentemente da força física.',
    icon: '🥋',
    image: null,
  },
  {
    title: 'Karatê',
    description: 'Desenvolva disciplina, foco e coordenação com o Karatê. Aulas para todas as idades, focadas na técnica tradicional e defesa pessoal.',
    icon: '🥷🏻',
    image: null,
  },
];

const Modalities: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
      loop: false,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'keepSnaps',
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      }
  }); 

  return (
    <section className="modalities-section">
      <div className="container">
        
        <h2 className="section-title white-text">
          MODALIDADES
        </h2>
        <h3 className="modalities-subtitle red-text">
          TREINAMENTO COMPLETO PARA TODOS OS NÍVEIS
        </h3>
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {modalities.map((modality, index) => (
                    <div className="embla__slide" key={index}>
                        <div className="modality-card">
                            <div className="modality-icon-wrapper">
                              {modality.image ? (
                                  <img 
                                    src={modality.image} 
                                    alt={`Ícone ${modality.title}`} 
                                    className="modality-image"
                                  />
                              ) : (
                                  <span className="modality-icon-emoji">{modality.icon}</span>
                              )}
                            </div>
                            
                            <h4 className="modality-title">{modality.title}</h4>
                            <p className="modality-description">{modality.description}</p>
                            {/* <a href="#" className="modality-cta">
                              Ver Horários →
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <EmblaCarouselPagination emblaApi={emblaApi} /> 

      </div>
    </section>
  );
};

export default Modalities;
