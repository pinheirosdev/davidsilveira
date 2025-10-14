import React from 'react';
import '../styles/Achievements.css'; 

const achievementTitles = [
    '14x Paranaense', '11x Campeão Brasileiro', '8x WGP',
    '6x Copa do Brasil', '3x Sul-Americano', '3x Panamericano',
    '3x K.O. Fight', '3x Gravidade Zero', '2x Copa dos Campeões',
    '2x Jogos Abertos de São Paulo', '2x Balada Fight', 'Jungle Fight',
    'Storm Samurai', 'Brave FC'
];

type AchievementsProps = {
    isActive: boolean;
};

const Achievements: React.FC<AchievementsProps> = ({ isActive }) => {
  return (
    <div 
      id="achievements-details" 
      className={`achievements-details ${isActive ? 'active' : ''}`}
      aria-hidden={!isActive}
    >
      <div className="container">
          <h4 className="achievements-title red-text">
                Histórico de Títulos
          </h4>
          <div className="achievements-grid">
              {achievementTitles.map((title, index) => (
                  <div key={index} className="achievement-item">
                      🏆 <span className="achievement-text">{title}</span>
                  </div>
              ))}
          </div>
          <p className="achievements-closing">
              Esta trajetória de sucesso reflete a dedicação e o método técnico que David Silveira aplica em cada aula.
          </p>
      </div>
    </div>
  );
};

export default Achievements;