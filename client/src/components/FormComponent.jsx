import React from "react";
import "./styles/FormComponent.css"; // Ensure your styles exist

const FormComponent = ({ title, fields, formData, setFormData, onSubmit, buttonText }) => {
  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{title}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className="form-group" key={field.name}>
            <label className="form-label">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                className="form-input"
                onChange={(e) => handleChange(e, field.name)}
                required={field.required}
                value={formData[field.name] || ""}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="form-input"
                onChange={(e) => handleChange(e, field.name)}
                required={field.required}
                value={formData[field.name] || ""}
              />
            )}
          </div>
        ))}
        <button type="submit" className="form-button">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
