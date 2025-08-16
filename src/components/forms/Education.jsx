// Education Form Component
import React from 'react';

const Education = ({ data, onChange }) => {
  const handleAddEducation = () => {
    onChange([...data, { 
      id: Date.now(), 
      school: '', 
      degree: '', 
      startDate: '',
      endDate: '',
      location: ''
    }]);
  };

  const handleEducationChange = (id, field, value) => {
    const updatedEducation = data.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onChange(updatedEducation);
  };

  const handleRemoveEducation = (id) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  return (
    <div className="form-section">
      <h3>Education</h3>
      
      {data.map(edu => (
        <div key={edu.id} className="education-item">
          <div className="form-group">
            <label htmlFor={`school-${edu.id}`}>School/University</label>
            <input
              id={`school-${edu.id}`}
              type="text"
              value={edu.school || ''}
              onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)}
              placeholder="London City University"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`degree-${edu.id}`}>Degree</label>
            <input
              id={`degree-${edu.id}`}
              type="text"
              value={edu.degree || ''}
              onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
              placeholder="Bachelor's in Economics"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`edu-start-${edu.id}`}>Start Date</label>
              <input
                id={`edu-start-${edu.id}`}
                type="date"
                value={edu.startDate || ''}
                onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor={`edu-end-${edu.id}`}>End Date</label>
              <input
                id={`edu-end-${edu.id}`}
                type="date"
                value={edu.endDate || ''}
                onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor={`edu-location-${edu.id}`}>Location</label>
            <input
              id={`edu-location-${edu.id}`}
              type="text"
              value={edu.location || ''}
              onChange={(e) => handleEducationChange(edu.id, 'location', e.target.value)}
              placeholder="New York City, US"
            />
          </div>
          
          <button 
            type="button"
            className="remove-btn"
            onClick={() => handleRemoveEducation(edu.id)}
          >
            Remove Education
          </button>
        </div>
      ))}
      
      <button 
        type="button"
        className="add-btn"
        onClick={handleAddEducation}
      >
        Add Education
      </button>
    </div>
  );
};

export default Education;