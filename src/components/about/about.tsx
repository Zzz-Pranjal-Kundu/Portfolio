import React, { useState, useEffect } from 'react';
import './about.scss';


import bitmoji1 from '../../assets/me/jpg/bitmoji1.jpg';
import bitmoji2 from '../../assets/me/jpg/bitmoji2.jpg';

const photos = [bitmoji1, bitmoji2];

const About: React.FC = () => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
    <div className="about-container" id="about">
      <section className="about-intro">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            Hi! I’m <span className="purple-text">Pranjal Kundu</span>, a passionate developer currently pursuing my 
            <span className="purple-text"> B.Tech in Computer Science </span> at 
            <span className="purple-text"> Graphic Era Hill University, Dehradun</span>, now in my 
            <span className="purple-text"> third year</span>.
          </p>
          <p>
            I’ve built impactful projects like 
            <span className="purple-text"> syncIDE</span> (a real-time collaborative IDE), 
            <span className="purple-text"> ScheduloViz</span> (a scheduling visualizer), a 
            <span className="purple-text"> smart email assistant using Gemini API</span>, and 
            <span className="purple-text"> Moshi Moshi</span> (a secure real-time chat app). I also created a 
            <span className="purple-text"> Dehradun-based Tourist & Food Guide</span> using Google Maps API.
          </p>
          <p>
            My interests include <span className="purple-text">AI/ML, ethical hacking, healthtech, fintech,</span> and 
            <span className="purple-text"> tech for good</span>. I enjoy solving real-world problems with modern tools.
          </p>
          <p>
            I choose the <span className="purple-text">best tech for the task</span> and thrive in fast-paced environments where I can learn quickly and deliver efficiently.
          </p>
          <p>
            Outside academics, I love hackathons and tech events. I’m actively looking for 
            <span className="purple-text"> SDE/SWE internships and full-time roles</span> to grow and contribute meaningfully.
          </p>
          <p>
            When I'm not coding, you’ll find me <span className="purple-text">trying to learn languages</span>, discovering 
            <span className="purple-text"> new music</span>, or planning my next <span className="purple-text"> travel adventure</span>.
          </p>
          <p>
            Check out my work on 
            <a href="https://github.com/Zzz-Pranjal-Kundu" target="_blank" rel="noopener noreferrer"> GitHub</a>, connect on 
            <a href="https://www.linkedin.com/in/pranjal-kundu-48606b2b3/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>, and stay tuned for blog updates on Medium and Dev.to.
          </p>
        </div>
        <div className="about-photo">
          <img src={photo} alt="Pranjal Kundu" />
        </div>
      </section>
    </div>
  );
}

export default About;
