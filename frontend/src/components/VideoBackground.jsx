import React, { useState, useEffect, useRef } from 'react';

const videoSources = [
  '/Bg3.mp4',
  '/Bg.mp4',
  '/Bg2.mp4',
];

const VideoBackground = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const videoRef = useRef(null);

  // Function to switch to the next video
  const switchToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  // Automatically switch to the next video after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      switchToNextVideo();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer when the component unmounts or the video changes
    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  // Play the current video when it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  // Countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 5));
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentVideoIndex]);

  return (
    <div style={styles.bannerContainer}>
      <video
        ref={videoRef}
        key={currentVideoIndex}
        autoPlay
        muted
        style={styles.video}
        onError={() => console.error('Failed to load video')}
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Welcome to My Website</h1>
        <p style={styles.subheading}>Explore our amazing features and services.</p>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: '500px', // Adjust the height of the banner
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex: 0, // Ensure the video is behind the overlay
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    color: '#fff',
    zIndex: 1, // Ensure the overlay is above the video
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default VideoBackground;