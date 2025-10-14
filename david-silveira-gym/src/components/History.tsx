import React from 'react';
import '../styles/Achievements.css'; 

const historyText = {
    title: "Uma História de Luta e Superação: David Silveira",
    paragraph1: '"Minha jornada começou em uma infância simples, cercada de desafios. Fui adotado ainda pequeno e aprendi, desde cedo, que a vida exige força, fé e propósito. Foi com esses valores que transformei dificuldades em motivação e cheguei à elite do Kickboxing mundial. Hoje, continuo provando que todos têm potencial para vencer, independentemente de onde vêm.',
    paragraph2: 'Minha trajetória me levou além dos ringues nacionais: morei na Europa e treinei na lendária Mike Gym, em Amsterdã — uma das academias mais respeitadas do mundo, onde tive a oportunidade de aprender com os melhores do planeta. Essa experiência internacional é a base do método técnico que aplico."',
};

const notableFighters = [
  'Artur Kyshenko', 'Alex Poatan', 'Guto Inocente', 
  'John Lineker', 'Marcos Pezão', 'e muitos outros.',
];

type HistoryProps = {
    isActive: boolean;
};

const History: React.FC<HistoryProps> = ({ isActive }) => {
 return (
    <div 
      id="history-details" 
      className={`achievements-details ${isActive ? 'active' : ''}`}
      aria-hidden={!isActive}
    >
      <div className="container">
          <h4 className="achievements-title red-text">
              {historyText.title}
          </h4>
          
          <div className="history-content">
              <p className="history-paragraph">{historyText.paragraph1}</p>
              <p className="history-paragraph">{historyText.paragraph2}</p>

              <h5 className="history-subheading red-text">Treinamentos com a Elite Global</h5>
              <p className="history-paragraph">
                  David Silveira teve a oportunidade de treinar e trocar experiências com grandes nomes do esporte, como:
              </p>
              
              <ul className="fighters-list">
                  {notableFighters.map((fighter, index) => (
                      <li key={index} className="fighter-item">
                          {fighter}
                      </li>
                  ))}
              </ul>

          </div>
      </div>
    </div>
  );
};

export default History;