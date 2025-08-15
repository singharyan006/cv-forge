// Achievements Form Component
import React from 'react';

const Achievements = ({ data, onChange }) => {
  const handleAddAchievement = () => {
    onChange([...data, { id: Date.now(), title: '', date: '', description: '' }]);
  };

  const handleAchievementChange = (id, field, value) => {
    const updatedAchievements = data.map(achievement => 
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    );
    onChange(updatedAchievements);
  };

  const handleRemoveAchievement = (id) => {
    onChange(data.filter(achievement => achievement.id !== id));
  };

  return (
    <div className="form-section">
      <h3>Achievements & Certifications</h3>
      
      {data.map(achievement => (
        <div key={achievement.id} className="achievement-item">
          <div className="form-group">
            <label htmlFor={`achievement-title-${achievement.id}`}>Title</label>
            <input
              id={`achievement-title-${achievement.id}`}
              type="text"
              placeholder="Achievement or Certification Name"
              value={achievement.title}
              onChange={(e) => handleAchievementChange(achievement.id, 'title', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`achievement-date-${achievement.id}`}>Date</label>
            <input
              id={`achievement-date-${achievement.id}`}
              type="date"
              value={achievement.date}
              onChange={(e) => handleAchievementChange(achievement.id, 'date', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`achievement-desc-${achievement.id}`}>Description</label>
            <textarea
              id={`achievement-desc-${achievement.id}`}
              placeholder="Brief description of the achievement"
              value={achievement.description}
              onChange={(e) => handleAchievementChange(achievement.id, 'description', e.target.value)}
              rows="3"
            ></textarea>
          </div>
          
          <button 
            type="button" 
            className="remove-btn"
            onClick={() => handleRemoveAchievement(achievement.id)}
          >
            Remove Achievement
          </button>
        </div>
      ))}
      
      <button 
        type="button" 
        className="add-btn"
        onClick={handleAddAchievement}
      >
        Add Achievement
      </button>
    </div>
  );
};

export default Achievements;
