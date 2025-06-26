import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaGlobe, FaMedium, FaDev } from 'react-icons/fa';
import { SiCodeforces, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

// Container for the entire social section
const ProfileContainer = styled.div`
  width: 30%; /* Set the container width */
  margin: 20px auto; /* Center the container with auto margins */
  padding: 20px 20px 30px 20px; /* Padding around the container */
  background-color: #2e2e2e; /* Dark background color */
  border-radius: 10px; /* Rounded corners */
  text-align: center; /* Center the text inside the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  font-family: 'RobotoMono', sans-serif; /* Use the RobotoMono font */

  /* Adjust container width on smaller screens */
  @media (max-width: 768px) {
    width: 80%; /* Increase width on mobile screens */
  }
`;

// Styled title for the social section
const ProfileTitle = styled.h3`
  color: #fff; /* White text color */
  font-size: 1.5em; /* Font size for the title */
  margin-bottom: 10px; /* Space below the title */
  background: linear-gradient(90deg, #8a2be2, #d4a1ff); /* Gradient effect on text */
  -webkit-background-clip: text; /* Clip background to the text */
  -webkit-text-fill-color: transparent; /* Make text transparent to reveal gradient */
`;

// Styled description text
const ProfileDescription = styled.p`
  color: #d3d3d3; /* Light gray text color */
  margin-bottom: 20px; /* Space below the description */

  .highlight {
    color: #8a2be2; /* Highlighted purple color for important words */
  }
`;

// Container for the social icons
const ProfileIcons = styled.div`
  display: flex; /* Use flexbox to layout the icons */
  justify-content: center; /* Center the icons horizontally */
  gap: 20px; /* Space between the icons */

  a {
    color: #d3d3d3; /* Default icon color (light gray) */
    font-size: 2em; /* Size of the icons */
    transition: color 0.3s; /* Smooth color transition on hover */

    &:hover {
      color: #8a2be2; /* Change icon color to purple on hover */
    }
  }
`;

// Main React component
const ProfileLinks: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileTitle>MY DSA & DEVELOPMENT PROFILES</ProfileTitle>
      <ProfileDescription>
        Feel free to <span className="highlight">check</span> with me
      </ProfileDescription>
      <ProfileIcons>
        {/* Social media links with icons */}
        <a href="https://github.com/Zzz-Pranjal-Kundu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://leetcode.com/pranjalkundu1149" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/user/pranjalkuvnmv/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
        <a href="https://codeforces.com/profile/ZhoZhoPzzZ" target="_blank" rel="noopener noreferrer"><SiCodeforces /></a>
      </ProfileIcons>
    </ProfileContainer>
  );
};

export default ProfileLinks;
