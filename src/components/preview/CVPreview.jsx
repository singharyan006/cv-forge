// CV Preview Component
import React, { forwardRef } from 'react';
import { useCVSettings } from '../../utils/settingsContext';

const CVPreview = forwardRef(({ data }, ref) => {
  const { personal, contacts, links, education, experience, skills, achievements } = data;
  const { settings } = useCVSettings();

  // Format date to display as Month Year
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };
  
  // Apply the custom styles based on settings
  const customStyles = {
    fontFamily: settings.font,
    '--primary-color': settings.primaryColor,
    '--secondary-color': settings.secondaryColor
  };

  return (
    <div className="cv-preview" style={customStyles} ref={ref}>
      {/* Header with name and title */}
      <div className="cv-header">
        <h1>{personal?.fullName || 'Josephine Meyers'}</h1>
        <p className="professional-title">{personal?.title || 'UX & UI Designer'}</p>
        
        <div className="contact-info">
          {contacts?.email && <span><i className="icon email-icon"></i>{contacts.email}</span>}
          {contacts?.phone && <span><i className="icon phone-icon"></i>{contacts.phone}</span>}
          {contacts?.location && <span><i className="icon location-icon"></i>{contacts.location}</span>}
        </div>
        
        {links?.length > 0 && (
          <div className="social-links">
            {links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={`icon ${link.name.toLowerCase()}-icon`}></i>{link.name}
              </a>
            ))}
          </div>
        )}
      </div>
      
      <div className="cv-content">
        {/* Education Section */}
        {education?.length > 0 && (
          <div className="cv-section">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="cv-item">
                <div className="cv-item-header">
                  <h3>{edu.degree || 'Degree'}</h3>
                  <span className="date">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
                <p className="institution">{edu.school}</p>
                {edu.location && <p className="location">{edu.location}</p>}
              </div>
            ))}
          </div>
        )}
        
        {/* Experience Section */}
        {experience?.length > 0 && (
          <div className="cv-section">
            <h2>Professional Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="cv-item">
                <div className="cv-item-header">
                  <h3>{exp.position || 'Position'}</h3>
                  <span className="date">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="institution">{exp.company}</p>
                {exp.location && <p className="location">{exp.location}</p>}
                {exp.description && <p className="description">{exp.description}</p>}
              </div>
            ))}
          </div>
        )}
        
        {/* Skills Section */}
        {skills?.length > 0 && (
          <div className="cv-section">
            <h2>Skills</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Achievements Section */}
        {achievements?.length > 0 && (
          <div className="cv-section">
            <h2>Achievements & Certifications</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="cv-item">
                <div className="cv-item-header">
                  <h3>{achievement.title}</h3>
                  {achievement.date && <span className="date">{formatDate(achievement.date)}</span>}
                </div>
                {achievement.description && (
                  <p className="description">{achievement.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default CVPreview;
