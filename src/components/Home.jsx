import React from 'react';

const Home = ({ homeData }) => {
  console.log('homeData:', homeData);

  return (
    <div>
      <h2>Home</h2>
      
      <ul>
        {Array.isArray(homeData) ? (
          homeData.map(item => (
            <li key={item.id}>{item.title}</li>
          ))
        ) : (
          <p>No data available for Home.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;


