// Experience Form Component
import React from 'react';

const Experience = ({ data, onChange }) => {
  const handleAddExperience = () => {
    onChange([...data, {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    }]);
  };

  const handleExperienceChange = (id, field, value) => {
    const updatedExperience = data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onChange(updatedExperience);
  };

  const handleRemoveExperience = (id) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  return (
    <div className="form-section">
      <h3>Professional Experience</h3>
      
      {data.map(exp => (
        <div key={exp.id} className="experience-item">
          <div className="form-group">
            <label htmlFor={`company-${exp.id}`}>Company</label>
            <input
              id={`company-${exp.id}`}
              type="text"
              value={exp.company || ''}
              onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
              placeholder="Umbrella Inc"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`position-${exp.id}`}>Position</label>
            <input
              id={`position-${exp.id}`}
              type="text"
              value={exp.position || ''}
              onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
              placeholder="UX & UI Designer"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`exp-start-${exp.id}`}>Start Date</label>
              <input
                id={`exp-start-${exp.id}`}
                type="date"
                value={exp.startDate || ''}
                onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor={`exp-end-${exp.id}`}>End Date</label>
              <input
                id={`exp-end-${exp.id}`}
                type="date"
                value={exp.endDate || ''}
                onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                placeholder="Present (leave blank for current job)"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor={`exp-location-${exp.id}`}>Location</label>
            <input
              id={`exp-location-${exp.id}`}
              type="text"
              value={exp.location || ''}
              onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
              placeholder="New York City, US"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`exp-desc-${exp.id}`}>Job Description</label>
            <textarea
              id={`exp-desc-${exp.id}`}
              value={exp.description || ''}
              onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
              placeholder="Describe your responsibilities and achievements..."
              rows="4"
            ></textarea>
          </div>
          
          <button 
            type="button"
            className="remove-btn"
            onClick={() => handleRemoveExperience(exp.id)}
          >
            Remove Experience
          </button>
        </div>
      ))}
      
      <button 
        type="button"
        className="add-btn"
        onClick={handleAddExperience}
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
