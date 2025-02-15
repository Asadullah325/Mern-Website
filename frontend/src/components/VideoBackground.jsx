import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const videoSources = ["/Bg3.mp4", "/Bg.mp4", "/Bg2.mp4"];

const textContent = [
  {
    heading: "Welcome to Brand",
    subheading: "Explore our amazing services.",
  },
  {
    heading: "Discover New Products",
    subheading: "Innovative solutions for you.",
  },
  {
    heading: "Join Our Community",
    subheading: "Be part of something great.",
  },
];

const VideoBackground = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const videoRef = useRef(null);

  // Function to switch to the next video
  const switchToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  // Function to switch to the next text content
  const switchToNextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textContent.length);
  };

  // Automatically switch to the next video and text after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      switchToNextVideo();
      switchToNextText();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer when the component unmounts or the video/text changes
    return () => clearTimeout(timer);
  }, [currentVideoIndex, currentTextIndex]);

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
  }, [currentVideoIndex, currentTextIndex]);

  return (
    <div style={styles.bannerContainer} className="mt-17">
      <video
        ref={videoRef}
        key={currentVideoIndex}
        autoPlay
        muted
        style={styles.video}
        onError={() => console.error("Failed to load video")}
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <div className="flex flex-col items-center">
          <h1 style={styles.heading} className="custom-font">
            {textContent[currentTextIndex].heading}
          </h1>
          <p style={styles.subheading}>
            {textContent[currentTextIndex].subheading}
          </p>
          <Link to={"/"} className="bg-red-600 hover:bg-red-700 text-white cursor-pointer z-20 font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </div>
      {/* Navigation Arrows */}
      <div style={styles.navigation}>
        <button
          className="bg-red-600 hover:bg-red-700 text-white cursor-pointer z-20 font-bold py-2 px-4 rounded-full"
          onClick={() => {
            setCurrentTextIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : textContent.length - 1
            );
          }}
        >
          &lt;
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white cursor-pointer z-20 font-bold py-2 px-4 rounded-full"
          onClick={() => {
            setCurrentTextIndex((prevIndex) =>
              prevIndex < textContent.length - 1 ? prevIndex + 1 : 0
            );
          }}
        >
          &gt;
        </button>
      </div>
      {/* Dots Indicator */}
      <div style={styles.dots}>
        {textContent.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: index === currentTextIndex ? "#e7000b" : "#fff",
            }}
            onClick={() => setCurrentTextIndex(index)}
          />
        ))}
      </div>
      <div className="absolute bottom-0 right-0">
        <img src="/shape.png" alt="shape" className="h-15 text-white z-10" />
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    position: "relative",
    width: "100%",
    height: "500px", // Adjust the height of the banner
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0, // Ensure the video is behind the overlay
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    color: "#fff",
    zIndex: 1, // Ensure the overlay is above the video
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "10px",
    fontWeight: "bold",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out", // Add animation for text transition
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out", // Add animation for text transition
  },
  navigation: {
    width: "100%",
    padding: "10px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    zIndex: 2,
  },
  dots: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 2,
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Add CSS animation for text transition
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,
  styleSheet.cssRules.length
);

export default VideoBackground;
