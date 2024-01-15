import React from 'react';

const VideoPosts = ({ videoData }) => {
  return (
    <div>
      <h2>Latest Videos</h2>
      <div className="video-list">
        {videoData.length === 0 ? (
          <p>No videos available</p>
        ) : (
          videoData.map(video => (
            <div key={video.id} className="video-item">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                style={{ width: '100%', maxWidth: '560px', height: 'auto' }}
              />
              <iframe
                width="560"
                height="315"
                src={video.embedUrl}
                title={video.title}
                // frameBorder="10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoPosts;

