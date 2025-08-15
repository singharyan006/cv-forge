// Links Form Component
import React from 'react';

const Links = ({ data, onChange }) => {
  const handleAddLink = () => {
    onChange([...data, { id: Date.now(), name: '', url: '' }]);
  };

  const handleLinkChange = (id, field, value) => {
    const updatedLinks = data.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    );
    onChange(updatedLinks);
  };

  const handleRemoveLink = (id) => {
    onChange(data.filter(link => link.id !== id));
  };

  return (
    <div className="form-section">
      <h3>Links & Profiles</h3>
      
      {data.map(link => (
        <div key={link.id} className="form-row link-row">
          <div className="form-group link-name">
            <select
              value={link.name}
              onChange={(e) => handleLinkChange(link.id, 'name', e.target.value)}
            >
              <option value="">Select platform</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="GitHub">GitHub</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Twitter">Twitter</option>
              <option value="Medium">Medium</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="form-group link-url">
            <input
              type="url"
              placeholder="https://"
              value={link.url}
              onChange={(e) => handleLinkChange(link.id, 'url', e.target.value)}
            />
          </div>
          
          <button 
            type="button" 
            className="remove-btn"
            onClick={() => handleRemoveLink(link.id)}
          >
            Remove
          </button>
        </div>
      ))}
      
      <button 
        type="button" 
        className="add-btn"
        onClick={handleAddLink}
      >
        Add Link
      </button>
    </div>
  );
};

export default Links;
