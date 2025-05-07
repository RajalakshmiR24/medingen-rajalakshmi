import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: 'What if I vomit after taking Paracetamol?',
      answer:
        'If you vomit in less than 30 minutes after having a dose of Paracetamol tablets or syrup, retake the same dose again. If you vomit after 30 minutes of a dose, you do not need to take another one until the next standard dose.',
    },
    {
      question: 'When will I feel better after taking the Paracetamol?',
      answer:
        'Usually, you will start feeling better after about half an hour of taking a Paracetamol.',
    },
    {
      question: 'How often can I take the Paracetamol?',
      answer:
        'You should only take four doses of Paracetamol in 24 hours. There should be a gap of at least 4 hours between two doses. Do not take Paracetamol for more than 3 days without consulting a doctor first.',
    },
    {
      question: 'Does Paracetamol make babies sleepy?',
      answer:
        'No, Paracetamol does not make babies sleepy. It is a pain-relieving medicine that is also used to control high fever.',
    },
    {
      question: 'Is Paracetamol safe for children?',
      answer:
        'Paracetamol is considered safe for children only when used as directed by the doctor.',
    },
    {
      question: 'Is Paracetamol an antibiotic?',
      answer:
        'No, Paracetamol is not an antibiotic. It works as a painkiller and fever-reducing medicine.',
    },
    {
      question: 'Can I take Paracetamol and ibuprofen together?',
      answer:
        'Ibuprofen and Paracetamol are safe medicines, but both should not be used together. Consult your doctor if you are not sure.',
    },
    {
      question: 'How long does a Paracetamol take to work?',
      answer:
        'Paracetamol takes around 30–45 min to start working and show its effects. It is advised to take this medicine for the duration suggested by the doctor. Consult your doctor if you experience any bothersome side effects.',
    },
    {
      question: 'What are the serious side effects of taking an excess of the Paracetamol?',
      answer:
        'Overdose of Paracetamol may cause severe life-threatening liver injury. Taking more than the prescribed dose may also cause kidney injury, decreased platelet count, and even coma. Early symptoms of an overdose include nausea, vomiting, and general tiredness. Immediately consult a doctor or reach an emergency in case of a suspected overdose.',
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-title" onClick={() => setIsOpen(!isOpen)}>
        <h2>Frequently asked questions for Paracetamol</h2>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && (
        <div className="faq-section">
          <h3 className="faq-heading">Paracetamol</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <p className="faq-question">Q. {faq.question}</p>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQ;
