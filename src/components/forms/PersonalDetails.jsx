// Personal Details Form Component
import React from 'react';

const PersonalDetails = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="form-section">
      <h3>Personal Details</h3>
      
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Josephine Meyers"
          value={data.fullName || ''}
          onChange={(e) => handleChange('fullName', e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="title">Professional Title</label>
        <input
          id="title"
          type="text"
          placeholder="UX & UI Designer"
          value={data.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
