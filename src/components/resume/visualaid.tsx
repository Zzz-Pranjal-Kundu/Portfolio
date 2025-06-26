// import React from 'react';
// import { ResumeEntry, ResumeSection } from './resumetypes';

// const VisualAid: React.FC<{ section: ResumeSection }> = ({ section }) => {
//   return (
//     <div className="section-container">
//       <h1 className="section-title">{section.title}</h1>
//       <div className="line-container">
//         {section.entries.map((entry) => (
//           <div key={entry.title} className="job-container">
//             <h3 className="job-title">
//               {entry.title} <span className="company">{entry.company}</span>
//             </h3>
//             <p className="job-dates">{entry.dates}</p>
//             {entry.bulletPoints && (
//               <ul>
//                 {entry.bulletPoints.map((bulletPoint) => (
//                   <li key={bulletPoint} className="bullet-point">
//                     {bulletPoint}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VisualAid;




// import React from 'react';
// import { ResumeSection } from './resumetypes';
// import './timeline.scss'; // Make sure to create this file

// const VisualAid: React.FC<{ section: ResumeSection }> = ({ section }) => {
//   return (
//     <div className="timeline-section">
//       <h2 className="timeline-section-title">{section.title}</h2>
//       <div className="timeline">
//         {section.entries.map((entry, index) => (
//           <div
//             key={entry.title}
//             className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
//           >
//             <div className="timeline-content">
//               <h3 className="timeline-title">
//                 {entry.title} <span className="timeline-company">{entry.company}</span>
//               </h3>
//               <p className="timeline-dates">{entry.dates}</p>
//               {entry.bulletPoints && (
//                 <ul>
//                   {entry.bulletPoints.map((point) => (
//                     <li key={point}>{point}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VisualAid;



// import React from 'react';
// import { ResumeSection } from './resumetypes';
// import './timeline.scss';

// const VisualAid: React.FC<{ section: ResumeSection }> = ({ section }) => {
//   return (
//     <div className="timeline-wrapper">
//       <h2 className="timeline-section-title">{section.title}</h2>
//       <div className="timeline-container">
//         {section.entries.map((entry, index) => (
//           <div
//             key={entry.title}
//             className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
//           >
//             <div className="timeline-card">
//               <h3 className="timeline-title">
//                 {entry.title}
//                 <span className="timeline-company"> {entry.company}</span>
//               </h3>
//               <p className="timeline-date">{entry.dates}</p>
//               {entry.bulletPoints && (
//                 <ul className="timeline-list">
//                   {entry.bulletPoints.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VisualAid;



import React from 'react';
import { ResumeSection } from './resumetypes';

const VisualAid: React.FC<{ section: ResumeSection }> = ({ section }) => {
  return (
    <div className="section-container">
      <h1 className="section-title">{section.title}</h1>
      <div className="timeline-line-container">
        {section.entries.map((entry, index) => (
          <div
            key={entry.title}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="job-container">
              <h3 className="job-title">
                {entry.title} <span className="company">{entry.company}</span>
              </h3>
              <p className="job-dates">{entry.dates}</p>
              {entry.bulletPoints && (
                <ul>
                  {entry.bulletPoints.map((point, idx) => (
                    <li key={idx} className="bullet-point">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualAid;
