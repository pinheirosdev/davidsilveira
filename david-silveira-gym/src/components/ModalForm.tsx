import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import '../styles/Modal.css';

interface ModalFormProps {
    title: string;
    submitText: string;
    submissionType: 'MATRICULA' | 'EXPERIMENTAL';
    onClose: () => void;
}

const WHATSAPP_PHONE = '5543999230361';

const ModalForm: React.FC<ModalFormProps> = ({ title, submitText, submissionType, onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'nome') {
      newValue = value.replace(/[^a-zA-Z\s\u00C0-\u017F]/g, '');
    }

    if (name === 'telefone') {
      newValue = value.replace(/[^0-9]/g, '');
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const typePrefix = submissionType === 'MATRICULA' ? 'Olá David, gostaria de me matricular! 🚀' : 'Olá David, gostaria de agendar uma aula experimental! 🥊';
    
    const message = `
${typePrefix}

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Email:* ${formData.email}
*Mensagem/Interesse:* ${formData.mensagem || 'Nenhuma mensagem adicional.'}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="modal-form-content">
      <h3 className="modal-title red-text">{title}</h3>
      
      <form className="modal-form" onSubmit={handleSubmit}>
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
          placeholder="Seu Telefone/WhatsApp (Ex: 43 999999999)" 
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
          pattern="[0-9\(\)\-\s\+]+" 
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
          {submitText}
        </button>
      </form>
    </div>
  );
};

export default ModalForm;