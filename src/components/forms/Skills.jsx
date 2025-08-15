// Skills Form Component
import React from 'react';

const Skills = ({ data, onChange }) => {
  const handleAddSkill = () => {
    onChange([...data, { id: Date.now(), name: '', level: 'Intermediate' }]);
  };

  const handleSkillChange = (id, field, value) => {
    const updatedSkills = data.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    onChange(updatedSkills);
  };

  const handleRemoveSkill = (id) => {
    onChange(data.filter(skill => skill.id !== id));
  };

  return (
    <div className="form-section">
      <h3>Skills</h3>
      
      {data.map(skill => (
        <div key={skill.id} className="form-row">
          <div className="form-group skill-name">
            <input
              type="text"
              placeholder="Skill name"
              value={skill.name}
              onChange={(e) => handleSkillChange(skill.id, 'name', e.target.value)}
            />
          </div>
          
          <div className="form-group skill-level">
            <select
              value={skill.level}
              onChange={(e) => handleSkillChange(skill.id, 'level', e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          
          <button 
            type="button" 
            className="remove-btn"
            onClick={() => handleRemoveSkill(skill.id)}
          >
            Remove
          </button>
        </div>
      ))}
      
      <button 
        type="button" 
        className="add-btn"
        onClick={handleAddSkill}
      >
        Add Skill
      </button>
    </div>
  );
};

export default Skills;
