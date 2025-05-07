import React from 'react';
import { FaLock, FaShieldAlt, FaSmile } from 'react-icons/fa'; // Using Font Awesome icons
import '../styles/Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-text">
        <strong>Disclaimer:</strong>
        <p>
          The contents here is for informational purposes only and not intended to be a substitute
          for professional medical advice, diagnosis, or treatment. Please seek the advice of a
          physician or other qualified health provider with any questions you may have regarding a
          medical condition. Medkart on any information and subsequent action or inaction is solely
          at the user’s risk, and we do not assume any responsibility for the same. The content on
          the Platform should not be considered or used as a substitute for professional and
          qualified medical advice. Please consult your doctor for any query pertaining to medicines,
          tests and/or diseases, as we support, and do not replace the doctor-patient relationship.
        </p>
      </div>

      <div className="disclaimer-icons">
        <div className="icon-box">
          <FaLock size={40} color="#4CAF50" />
          <p>Safe and Secured<br />Payment</p>
        </div>
        <div className="icon-box">
          <FaShieldAlt size={40} color="#2196F3" />
          <p>100% Authentic<br />Products</p>
        </div>
        <div className="icon-box">
          <FaSmile size={40} color="#FF9800" />
          <p>6 lac + Happy<br />Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
