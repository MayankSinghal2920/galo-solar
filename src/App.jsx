import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import FeedbackForm from './components/FeedbackForm';
import SubscribeButton from './components/SubscribeButton';
import VideoPosts from './components/VideoPosts';
import LatestPosts from './components/LatestPosts';

function App() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch posts related to user with ID 5 for the About Us section
    fetch('https://dummyjson.com/posts/user/5')
      .then(response => response.json())
      .then(data => {
        setAboutData(data);
      })
      .catch(error => console.error('Error fetching about us data:', error));

    // Fetch posts related to "love" for the Home section
    fetch('https://dummyjson.com/posts/search?q=love')
      .then(response => response.json())
      .then(data => {
        setHomeData(data);
      })
      .catch(error => console.error('Error fetching home data:', error));

    // Fetch one post from the provided API for Latest Posts
    fetch('https://dummyjson.com/posts/1')
      .then(response => response.json())
      .then(data => {
        const onePost = Array.isArray(data) ? data[0] : data;
        setLatestPosts([onePost]);
      })
      .catch(error => console.error('Error fetching latest posts:', error));

    // Fetch one post from the provided API for Featured Posts
    fetch('https://dummyjson.com/posts/2')
      .then(response => response.json())
      .then(data => {
        const onePost = Array.isArray(data) ? data[0] : data;
        setFeaturedPosts([onePost]);
      })
      .catch(error => console.error('Error fetching featured posts:', error));

    
    fetch('https://dummyjson.com/posts/3')
      .then(response => response.json())
      .then(data => {
        const onePost = Array.isArray(data) ? data[0] : data;
        setTrendingPosts([onePost]);
      })
      .catch(error => console.error('Error fetching trending posts:', error));

    // Fetch dummy video data
    fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/videos.json')
      .then(response => response.json())
      .then(data => {
        setVideoData(data);
      })
      .catch(error => console.error('Error fetching video data:', error));
  }, []);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Galo Solar Energy</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li
                className="dropdown"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <span className="dropdown-toggle">Categories</span>
                {isDropdownOpen && (
                  <div className="dropdown-menu" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                    <Link to="/latest">Latest Posts</Link>
                    <Link to="/featured">Featured Posts</Link>
                    <Link to="/trending">Trending Posts</Link>
                  </div>
                )}
              </li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/videos">Videos</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home homeData={homeData} />} />
          <Route path="/featured" element={<LatestPosts posts={featuredPosts} />} />
          <Route path="/trending" element={<LatestPosts posts={trendingPosts} />} />
          <Route path="/about" element={<About aboutData={aboutData} />} />
          <Route path="/latest" element={<LatestPosts posts={latestPosts} />} />
          <Route path="/videos" element={<VideoPosts videoData={videoData} />} />
        </Routes>

        <section id="social-icons">
          {/* Social media icons with hyperlinks */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size="2em" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size="2em" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size="2em" />
          </a>
        </section>

        <section id="feedback-form">
          <FeedbackForm />
        </section>

        <section id="subscribe">
          <SubscribeButton />
        </section>

        <section id="video-posts">
          <VideoPosts videoData={videoData} />
        </section>

        <footer>
          {/* Footer content goes here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
