import React from 'react';
import styled from 'styled-components';
import {
  FaTrophy,
  FaMedal,
  FaGraduationCap,
  FaUserTie,
  FaChartLine,
  FaGithubAlt,
  FaAmazon
} from 'react-icons/fa';


import { BookOpenText } from 'lucide-react'; // For poetry

// Styled container for the whole achievements section
const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'RobotoMono', sans-serif;
  padding: 0 10px;
  overflow-x: hidden;
  width: 80%;
  margin: 0 auto;
`;

// Section title styling
const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
`;

// Main container for achievements
const AchievementsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

// Individual achievement card
const AchievementCard = styled.div`
  width: 45%;
  margin-bottom: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  text-align: center;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1em;
    position: relative;
    z-index: 1;
  }

  .icon {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #f39c12;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto 20px auto;
  }
`;

const Achievements: React.FC = () => {
  return (
    <AchievementsContainer id="achievements">
        <SectionTitle>Achievements</SectionTitle>
        <AchievementsList>

          <AchievementCard>
            <div className="icon"><FaAmazon /></div>
            <h3>🚀 Cracked Amazon SDE Internship (6 Months)</h3>
            <p>
                Successfully cleared Amazon’s highly competitive selection process and secured a
                <strong> 6-month Software Development Engineer (SDE) Internship</strong>, demonstrating strong
                data structures, algorithms, and system design fundamentals.
            </p>
        </AchievementCard>

        <AchievementCard>
            <div className="icon"><FaTrophy /></div>
            <h3>🏆 Finalist – Next Gen Minds, JAGSoM (2025)</h3>
            <p>
            Selected among the <strong>top national finalists</strong> in the prestigious AI innovation challenge by
            <strong> Jagdish Sheth School of Management</strong>, highlighting strategic and analytical thinking and planning.
            </p>
        </AchievementCard>

        <AchievementCard>
            <div className="icon"><FaChartLine /></div>
            <h3>📊 PwC Launchpad 3.0 – AI & Analytics Trainee</h3>
            <p>
            Successfully completed training with <strong>PwC India</strong> in <strong>Data Analytics</strong> and <strong>AI</strong>, 
            part of their elite Launchpad 3.0 program in 2025.
            </p>
        </AchievementCard>

        <AchievementCard>
            <div className="icon"><FaGithubAlt /></div>
            <h3>💻 Open Source Contributor – GSSoC 2024</h3>
            <p>
            Contributed to impactful projects as part of <strong>GirlScript Summer of Code</strong>, 
            building real-world solutions through open-source.
            </p>
        </AchievementCard>

        <AchievementCard>
            <div className="icon"><FaGraduationCap /></div>
            <h3>🏅 Academic Topper – B.Tech 1st Year</h3>
            <p>
            Ranked <strong>1st out of 1200+ students</strong> in the first year of B.Tech (2022–23) at 
            <strong> Graphic Era Hill University</strong> for outstanding academic performance.
            </p>
        </AchievementCard>

        <AchievementCard>
            <div className="icon"><FaUserTie /></div>
            <h3>🎓 Student Council – Grace Academy</h3>
            <p>
            Served as <strong>Captain and Council Member</strong>, demonstrating leadership and 
            organizational excellence in school activities.
            </p>
        </AchievementCard>

        <AchievementCard>
            <div className="icon"><BookOpenText size={28} /></div>
            <h3>📝 Creative Writer & Poet</h3>
            <p>
            Recognized for <strong>poetry and creative writing</strong> in literary circles; 
            passionate about expressing thoughts through verse and storytelling.
            </p>
        </AchievementCard>
        </AchievementsList>
    </AchievementsContainer>
  );
};

export default Achievements;
