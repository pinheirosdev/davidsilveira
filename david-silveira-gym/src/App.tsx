import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Modalities from './components/Modalities';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import Modal from './components/Modal';   
import ModalForm from './components/ModalForm.tsx'; 

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'MATRICULA' | 'EXPERIMENTAL' | null>(null);

  const openModal = (type: 'MATRICULA' | 'EXPERIMENTAL') => {
    setActiveModal(type);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="app-container">
      <Header onMatriculeClick={() => openModal('MATRICULA')} /> 
      <Hero onExperimentalClick={() => openModal('EXPERIMENTAL')} /> 
      
      <div id="professor"><About /></div>
      <div id="modalidades"><Modalities /></div>
      <div id="contato"><Contact /></div>
      <Footer />
      
      {activeModal && (
        <Modal isOpen={!!activeModal} onClose={closeModal}>
          <ModalForm
            onClose={closeModal}
            submissionType={activeModal}
            title={activeModal === 'MATRICULA' ? 'QUERO ME MATRICULAR!' : 'AGENDAR AULA EXPERIMENTAL'}
            submitText={activeModal === 'MATRICULA' ? 'ENVIAR SOLICITAÇÃO DE MATRÍCULA' : 'AGENDAR VIA WHATSAPP'}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;