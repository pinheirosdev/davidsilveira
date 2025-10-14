import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import '../styles/Contact.css';

const WHATSAPP_PHONE = '5543999230361';
const ACADEMIA_EMAIL = 'dlsilveira@hotmail.com';
const ACADEMIA_PHONE = '43991630462'; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `
Olá, David! Gostaria de agendar uma aula experimental.

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Email:* ${formData.email}
*Mensagem/Interesse:* ${formData.mensagem || 'Nenhuma mensagem adicional.'}

Aguardo o contato!
    `.trim();

    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14655.604933646842!2d-51.17927774700679!3d-23.31934201346685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4327a29e0e3b%3A0x5c4385d18e384fe2!2sDavid%20Silveira%20%7C%20Gym%20%26%20Fight!5e0!3m2!1spt-BR!2sbr!4v1760453664104!5m2!1spt-BR!2sbr";

  return (
    <section className="contact-section">
      <div className="container contact-content">
        
        <div className="contact-map">
          <h2 className="section-title red-text">LOCALIZAÇÃO</h2>
          <h3 className="contact-subtitle white-text">
            Venha nos Visitar e Comece Seu Treino
          </h3>
          
          <div className="map-placeholder">
            <iframe 
                src={MAP_EMBED_URL}
                width="100%" 
                height="350" 
                style={{ border: 0 }}
                allowFullScreen={false} 
                loading="lazy"
                title="Localização da Academia"
            ></iframe>
          </div>
          
          <div className="contact-info">
            <p><strong>Endereço: </strong>Rua Pará, 1122 - Centro - Londrina/PR</p>
            <p>
              <strong>Telefone: </strong> 
              <a href={`tel:+55${ACADEMIA_PHONE}`} className="contact-link">
                (43) 99163-0462
              </a>
            </p>
            <p>
              <strong>E-mail: </strong> 
              <a href={`mailto:${ACADEMIA_EMAIL}`} className="contact-link">
                {ACADEMIA_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2 className="section-title red-text">FALE CONOSCO</h2>
          <h3 className="contact-subtitle white-text">
            Marque sua Aula Experimental
          </h3>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Seu Nome Completo" 
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required 
              pattern="[a-zA-Z\s\u00C0-\u017F]+"
              title="Apenas letras são permitidas no nome."
            />
            <input 
              type="email" 
              placeholder="Seu E-mail" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="tel" 
              placeholder="Seu Telefone / WhatsApp" 
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required 
              pattern="[0-9]+" 
              title="Apenas números são permitidos no telefone." 
            />
            <textarea 
              placeholder="Mensagem / Modalidade de Interesse" 
              rows={4} 
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit" className="submit-button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;