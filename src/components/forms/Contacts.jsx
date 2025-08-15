// Contacts Form Component
import React from 'react';

const Contacts = ({ data, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="form-section">
      <h3>Contact Information</h3>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={data.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={data.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="City, Country"
          value={data.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
        />
      </div>
    </div>
  );
};

export default Contacts;
