/** Central portfolio data based on Shivam Gupta's uploaded resume. */
export type Palette = { from: string; via: string; to: string; accent: string };
export const profile = {
  fullName: 'Shivam Gupta', displayName: 'Shivam Gupta', firstName: 'SHIVAM', seriesTag: 'THE DEVELOPER',
  originalLabel: 'A SHIVAM GUPTA ORIGINAL', role: 'Software Developer',
  tagline: ['Software Developer', 'MERN Stack', 'Problem Solver'],
  intro: 'B.Tech graduate in Computer Science & Engineering (AI & ML), CGPA 8.3. Software developer with internship experience building RESTful APIs, JWT authentication and MERN-stack applications. Solved 200+ DSA problems on LeetCode and enjoy building reliable backend and full-stack products.',
  location: 'Greater Noida, India', email: 'shivamguptaji04062003@gmail.com', phone: '+91-8416802595',
  links: { linkedin: 'https://linkedin.com/in/shivam-shivam-129b32277', github: 'https://github.com/shivamgupta968', leetcode: 'https://leetcode.com/u/shivamguptaji' },
  resumePdf: '/assets/Shivam_Gupta_Resume.pdf',
  portrait: { src: '/assets/portrait-720.webp', srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w', alt: 'Professional portrait of Shivam Gupta' },
  interests: ['Full-Stack Development', 'Backend APIs', 'Data Structures & Algorithms'],
};
export const education = [
  { school: 'KCC Institute of Technology and Management', place: 'Greater Noida, Uttar Pradesh', degree: 'B.Tech — Computer Science & Engineering (AI & ML)', period: '2022 – 2026', score: 'CGPA 8.3' },
  { school: 'UP Board', place: 'Uttar Pradesh', degree: 'Higher Secondary — Class 12', period: '2020 – 2021', score: '80%' },
  { school: 'UP Board', place: 'Uttar Pradesh', degree: 'Secondary — Class 10', period: '2018 – 2019', score: '75%' },
];
export const experience = [{ company: 'PriyaQubit Private Limited', role: 'Software Development Engineer Intern', place: 'India', period: 'May 2025 – Dec 2025', points: [
  'Designed and integrated RESTful APIs with Node.js and Express.js for frontend-backend communication and data processing.',
  'Developed and tested 15+ RESTful API endpoints using Express.js and Postman.',
  'Implemented JWT-based authentication and authorization for secure user access and session management.',
  'Developed full-stack web applications using the MERN stack and built responsive interfaces with React.js and Tailwind CSS.'
]}];
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
export const projects: Project[] = [
 { id:'ai-component-generator', title:'AI Component Generator', year:'2026', genre:'AI • Frontend • API Integration', logline:'An AI-powered UI builder that turns natural-language prompts into ready-to-use React and Tailwind CSS components.', stack:['React.js','Tailwind CSS','REST API Integration'], build:['Designed the prompt-to-component workflow by integrating an AI API and presenting generated results in a responsive interface.','Added an Explanation Mode that explains generated code in simple terms, helping beginners learn while building faster.'], features:['Natural-language prompts to UI components','Generated React and Tailwind CSS code','Explanation Mode for learning','Responsive and easy-to-use interface'], metrics:[{value:'60%',label:'less manual coding time'},{value:'40%',label:'better code understanding efficiency'}], palette:crimson, motif:'flow' },
 { id:'food-ordering-app', title:'Food Ordering App', year:'2026', genre:'React • State Management • Web App', logline:'A fast single-page food ordering experience with search, filters, cart management and protected checkout.', stack:['React.js','Redux Toolkit','Tailwind CSS','Immer'], build:['Built real-time search and filtering plus cart management to add, remove and update item quantities.','Centralized state across 10+ components with Redux Toolkit, used Immer for safe state updates, and implemented protected routing for checkout.'], features:['Browse and search 100+ menu items','Filter dishes instantly','Add, remove and update cart quantities','Centralized Redux Toolkit state','Protected checkout routing'], metrics:[{value:'100+',label:'menu items supported'},{value:'10+',label:'components using centralized state'}], palette:ocean, motif:'tenants' },
];
export type Achievement = { id:string; title:string; org:string; detail:string; laurel:string; link?:string };
export const achievements: Achievement[] = [
 { id:'leetcode', title:'200+ Problems Solved', org:'LeetCode', detail:'Practiced Data Structures & Algorithms including arrays, strings, searching, sorting and linked lists.', laurel:'Problem Solving', link:'https://leetcode.com/u/shivamguptaji' },
 { id:'api-development', title:'15+ API Endpoints', org:'PriyaQubit Private Limited', detail:'Developed and tested RESTful API endpoints using Node.js, Express.js and Postman during internship.', laurel:'Backend Development' },
 { id:'mern-stack', title:'MERN Stack Experience', org:'Software Development Internship', detail:'Worked on frontend-to-backend functionality, JWT authentication and responsive interfaces.', laurel:'Full-Stack Development' },
];
export type Certification = { issuer:string; name:string; link:string };
export const certifications: Certification[] = [];
export type Skill = { name:string; mono:string; note?:string };
export type SkillCategory = { id:string; title:string; subtitle:string; skills:Skill[] };
export const skillCategories: SkillCategory[] = [
 {id:'languages',title:'Languages',subtitle:'Programming and query languages',skills:[{name:'JavaScript (ES6+)',mono:'Js'},{name:'Python',mono:'Py'},{name:'C++',mono:'C+'},{name:'SQL',mono:'Sq'}]},
 {id:'frontend',title:'Frontend',subtitle:'Responsive web interfaces',skills:[{name:'React.js',mono:'Re'},{name:'HTML5',mono:'Ht'},{name:'CSS3',mono:'Cs'},{name:'Tailwind CSS',mono:'Tw'},{name:'Redux Toolkit',mono:'Rx'}]},
 {id:'backend',title:'Backend',subtitle:'APIs, services and authentication',skills:[{name:'Node.js',mono:'No'},{name:'Express.js',mono:'Ex'},{name:'FastAPI',mono:'Fa'},{name:'RESTful APIs',mono:'Ap'},{name:'JWT Authentication',mono:'Jw'}]},
 {id:'databases',title:'Databases',subtitle:'Data storage and database concepts',skills:[{name:'SQL',mono:'Sq'},{name:'MongoDB',mono:'Mg'},{name:'DBMS',mono:'Db'}]},
 {id:'tools',title:'Tools & Platforms',subtitle:'Development and API testing tools',skills:[{name:'Git',mono:'Gt'},{name:'GitHub',mono:'Gh'},{name:'Postman',mono:'Pm'},{name:'VS Code',mono:'Vs'}]},
 {id:'fundamentals',title:'Core Concepts',subtitle:'Foundations for software development',skills:[{name:'Data Structures & Algorithms',mono:'Ds'},{name:'OOPs',mono:'Oo'},{name:'Operating Systems',mono:'Os'},{name:'Computer Networks',mono:'Cn'}]},
];
export const skillEvidence: Record<string,string[]> = {
 'JavaScript (ES6+)':['MERN-stack web applications','React.js projects'], Python:['Listed technical skill'], 'C++':['Listed technical skill'], SQL:['SQL and DBMS concepts'], 'React.js':['AI Component Generator','Food Ordering App'], HTML5:['Responsive web interfaces'], CSS3:['Responsive web interfaces'], 'Tailwind CSS':['AI Component Generator','Food Ordering App'], 'Redux Toolkit':['Food Ordering App'], 'Node.js':['PriyaQubit internship','RESTful APIs'], 'Express.js':['15+ API endpoints'], FastAPI:['Listed technical skill'], 'RESTful APIs':['Designed and tested 15+ endpoints'], 'JWT Authentication':['Secure user access and session management'], MongoDB:['MERN stack'], Git:['Development workflow'], GitHub:['Portfolio and project repositories'], Postman:['API testing during internship'], 'VS Code':['Development tool'], 'Data Structures & Algorithms':['200+ LeetCode problems'], OOPs:['Core computer science concepts'], 'Operating Systems':['Core computer science concepts'], 'Computer Networks':['Core computer science concepts']
};
export type Episode = { code:string; title:string; description:string; tags:string[]; runtime:string; palette:Palette };
export type Season = { number:number; title:string; period:string; synopsis:string; episodes:Episode[] };
export const seasons: Season[] = [
 {number:1,title:'The Foundation',period:'2018 – 2021',synopsis:'School education under the UP Board.',episodes:[{code:'S01 E01',title:'School Years',description:'Completed Class 10 in 2018–2019 with 75% and Class 12 in 2020–2021 with 80%.',tags:['UP Board','Class 10','Class 12'],runtime:'2018 – 2021',palette:amber}]},
 {number:2,title:'Computer Science & AI',period:'2022 – 2026',synopsis:'B.Tech in Computer Science & Engineering (AI & ML) at KCC Institute of Technology and Management.',episodes:[{code:'S02 E01',title:'The Graduate',description:'Completed B.Tech in CSE (AI & ML) with CGPA 8.3.',tags:['B.Tech','CSE','AI & ML','CGPA 8.3'],runtime:'2022 – 2026',palette:violet},{code:'S02 E02',title:'The Problem Solver',description:'Solved 200+ Data Structures & Algorithms problems on LeetCode.',tags:['DSA','LeetCode'],runtime:'200+ problems',palette:ocean}]},
 {number:3,title:'Industry Experience',period:'2025',synopsis:'Software Development Engineer Intern at PriyaQubit Private Limited.',episodes:[{code:'S03 E01',title:'Building APIs',description:'Designed and tested 15+ RESTful API endpoints using Node.js, Express.js and Postman.',tags:['Node.js','Express.js','REST APIs'],runtime:'May – Dec 2025',palette:crimson},{code:'S03 E02',title:'Secure Applications',description:'Implemented JWT authentication and authorization and built MERN-stack application functionality.',tags:['JWT','MERN Stack','React.js'],runtime:'May – Dec 2025',palette:ocean}]},
 {number:4,title:'Building Projects',period:'2026',synopsis:'Two portfolio projects focused on AI-assisted UI development and a modern food-ordering experience.',episodes:[{code:'S04 E01',title:'The AI Builder',description:'AI Component Generator turns natural-language prompts into React and Tailwind CSS code.',tags:['React.js','Tailwind CSS','AI API'],runtime:'Project',palette:crimson},{code:'S04 E02',title:'The App Builder',description:'Food Ordering App with search, filters, Redux Toolkit cart management and protected checkout.',tags:['React.js','Redux Toolkit','Immer'],runtime:'Project',palette:ocean}]},
];
export type TopPick = {label:string;title:string;detail:string;palette:Palette};
export const topPicks: TopPick[] = [
 {label:'Education',title:'B.Tech CSE (AI & ML)',detail:'KCC Institute of Technology and Management · CGPA 8.3',palette:violet},
 {label:'Internship',title:'PriyaQubit',detail:'Software Development Engineer Intern · May–Dec 2025',palette:crimson},
 {label:'Project',title:'AI Component Generator',detail:'Natural-language prompts to React and Tailwind UI',palette:amber},
 {label:'Project',title:'Food Ordering App',detail:'Search, filters, cart and protected checkout',palette:ocean},
 {label:'Achievement',title:'200+ DSA Problems',detail:'LeetCode problem solving',palette:violet},
 {label:'Backend',title:'15+ REST API Endpoints',detail:'Built and tested with Express.js and Postman',palette:crimson},
 {label:'Security',title:'JWT Authentication',detail:'Authentication and authorization for user access',palette:amber},
 {label:'Frontend',title:'Responsive Interfaces',detail:'React.js and Tailwind CSS',palette:ocean},
];
export type IntroSlide = {kicker:string;title:string;lines:string[];chips?:string[]};
export const introSlides: IntroSlide[] = [
 {kicker:'Education',title:'B.Tech · CSE AI & ML',lines:['KCC Institute of Technology and Management, Greater Noida','2022 – 2026'],chips:['CGPA 8.3']},
 {kicker:'Skills',title:'Full-stack foundations',lines:['JavaScript · Python · C++ · SQL','React.js · Node.js · Express.js · FastAPI','MongoDB · Git/GitHub · Postman'],chips:['React.js','Node.js','SQL','JWT']},
 {kicker:'Experience',title:'PriyaQubit Internship',lines:['Software Development Engineer Intern','May 2025 – December 2025','Built RESTful APIs and MERN-stack features']},
 {kicker:'Projects',title:'Two Originals',lines:['AI Component Generator — AI-assisted React and Tailwind UI','Food Ordering App — search, filters, cart and protected checkout']},
 {kicker:'Achievement',title:'200+ DSA Problems',lines:['Solved 200+ Data Structures & Algorithms problems on LeetCode','Focus: arrays, strings, searching, sorting and linked lists']},
 {kicker:'Current mission',title:'Build reliable products',lines:['Seeking a Software Developer role','Backend APIs · Full-stack products · Problem solving']},
];
export type ProfileId = 'shivam' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: {id:ProfileId;name:string;blurb:string;color:string;order:SectionId[]}[] = [
 {id:'shivam',name:'Shivam',blurb:'The full series, in order',color:'#e5132b',order:['about','journey','originals','picks','skills','moments','story']},
 {id:'recruiter',name:'Recruiter',blurb:'Resume, experience & skills first',color:'#4cc9ff',order:['story','moments','skills','originals','about','journey','picks']},
 {id:'developer',name:'Developer',blurb:'Projects, stack & GitHub first',color:'#46e3a8',order:['originals','skills','journey','moments','about','picks','story']},
 {id:'creative',name:'Creative',blurb:'The story arc & highlights first',color:'#ffb547',order:['journey','picks','originals','moments','about','skills','story']},
];
export const sectionMeta: Record<SectionId,{nav:string;card:string;meta:string;palette:Palette}> = {
 about:{nav:'About',card:'About Me',meta:'Education & experience',palette:violet},
 journey:{nav:'Journey',card:'My Journey',meta:`${seasons.length} Seasons • ${seasons.reduce((n,s)=>n+s.episodes.length,0)} Episodes`,palette:amber},
 originals:{nav:'Projects',card:'My Projects',meta:`${projects.length} Projects`,palette:crimson},
 picks:{nav:'Highlights',card:'Highlights',meta:'Career highlights from the resume',palette:ocean},
 skills:{nav:'Skills',card:'My Skills',meta:`${skillCategories.length} Categories`,palette:ocean},
 moments:{nav:'Achievements',card:'Achievements',meta:`${achievements.length} Highlights`,palette:crimson},
 story:{nav:'Resume',card:'The Full Story',meta:'Resume • View & download',palette:violet},
};
