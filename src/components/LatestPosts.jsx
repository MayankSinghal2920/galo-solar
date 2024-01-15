// components/LatestPosts.js

import React from 'react';

function LatestPosts({ posts }) {
  return (
    <div>
      <h2>Latest Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default LatestPosts;
