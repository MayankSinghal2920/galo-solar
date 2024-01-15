import React from 'react';

const About = ({ aboutData }) => {
  console.log('aboutData:', aboutData);

  return (
    <div>
      <h2>About Us</h2>
      
      <ul>
        {Array.isArray(aboutData) ? (
          aboutData.map(item => (
            <li key={item.id}>{item.title}</li>
          ))
        ) : (
          <p>No data available for About Us.</p>
        )}
      </ul>
    </div>
  );
};

export default About;

