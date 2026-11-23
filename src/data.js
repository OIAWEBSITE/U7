// Source: The U7+ 2027 challenge 1.docx, shared November 2026.
// All venue placeholders (TBC) are intentionally omitted from the public agenda.
// IMPORTANT: Some times in the original file are ambiguous; shown as "Time to be confirmed".
export const navigation = [
  { label: 'About', id: 'about' }, { label: 'The challenge', id: 'challenge' },
  { label: 'Timeline', id: 'timeline' }, { label: 'Agenda', id: 'agenda' },
  { label: 'Practical info', id: 'information' },
];
export const pillars = [
  'Transparency & Explainability', 'Fairness & Impartiality',
  'Technical Robustness & Reliability', 'Safety & Security',
  'Privacy & Data Governance', 'Accountability & Responsibility',
];
export const tracks = [
  { number: '01', title: 'Secure & Safe Usage', tag: 'Human-centered intelligence', sdgs: 'SDG 3 + SDG 4', color: 'mint', summary: 'AI should elevate human intelligence, never replace it.', description: 'Explore safeguards against cognitive atrophy, overreliance on automated outputs, algorithmic manipulation and harm to academic communities. Build AI that supports learning without compromising intellectual autonomy.', focus: ['Critical thinking', 'Learner autonomy', 'Safe learning environments'] },
  { number: '02', title: 'Accessible & Inclusive AI', tag: 'Opportunity for everyone', sdgs: 'SDG 10 + SDG 17', color: 'lavender', summary: 'Make excellent education more accessible to everyone.', description: 'Design AI-powered educational experiences that bridge gaps for displaced persons, non-traditional learners, and people with permanent, temporary or situational disabilities.', focus: ['Universal & inclusive design', 'Equal access', 'Removing barriers'] },
  { number: '03', title: 'Fairness & Transparency', tag: 'AI we can understand', sdgs: 'SDG 5 + SDG 16', color: 'peach', summary: 'Help people understand and trust AI-assisted decisions.', description: 'Address algorithmic bias and opaque decision-making. Make AI answers, recommendations and evaluations understandable, traceable to verified sources and responsible in their use of human data.', focus: ['Explainable outcomes', 'Bias prevention', 'Verified sources'] },
];
export const milestones = [
  { date:'DEC 2026', title:'University expression of interest', description:'Interested universities register their commitment through the online application form. Deadline: December 2026, 23:59 GMT; exact day not specified in the source document.' },
  { date:'FEB 19, 2027', title:'Participation confirmation', description:'Participating institutions will be notified of their confirmed status by email no later than this date.' },
  { date:'FEB 22–26', title:'Student selection & team formation', description:'Universities nominate two to three students. Ten international teams of three are formed, choose a track and are matched with mentors.' },
  { date:'MAR 2027', title:'Virtual masterclasses & development', description:'Expert-led sessions, research, team introductions and initial presentations. Teams prepare a briefing deck of up to four slides.' },
  { date:'APR 2, 2027', title:'Final project submission', description:'Submit final deliverables in English for preliminary review using standard formats such as PDF, DOCX, PPTX or MP4.' },
  { date:'MAY 24–29', title:'In-person experience in Bogotá', description:'The in-person challenge takes place May 24–28, with participant departure on May 29.' },
];
export const agenda = [
  { short:'MON', date:'24', label:'Monday, May 24', theme:'Arrival & welcome', items:[{time:'Throughout the day',name:'Arrival and participant check-in', type:'travel'},{time:'19:00',name:'Welcome dinner',type:'social'}]},
  { short:'TUE', date:'25', label:'Tuesday, May 25', theme:'Connect, learn & create', items:[{time:'07:00–07:45',name:'Breakfast',type:'break'},{time:'08:00–08:20',name:'Welcome remarks',type:'event'},{time:'08:30–08:50',name:'Opening remarks — U7+',type:'event'},{time:'09:00–09:50',name:'Keynote: Artificial Intelligence',type:'highlight'},{time:'10:00–10:50',name:'Participant introductions',type:'event'},{time:'11:00–12:00',name:'Ice-breaking activity',type:'event'},{time:'12:00–12:50',name:'Lunch',type:'break'},{time:'13:00 · 00:00',name:'Mentor sessions & teamwork',type:'highlight'},{time:'19:00–20:00',name:'Dinner',type:'social'}]},
  { short:'WED', date:'26', label:'Wednesday, May 26', theme:'Pitch & celebrate', items:[{time:'07:00–07:45',name:'Breakfast',type:'break'},{time:'08:00–13:00',name:'Mentor sessions & teamwork',type:'highlight'},{time:'12:00–12:50',name:'Lunch',type:'break'},{time:'14:00–16:00',name:'Student presentations',type:'highlight'},{time:'16:00–18:00',name:'Award ceremony',type:'highlight'},{time:'18:10',name:'Group photo',type:'event'},{time:'19:00–20:30',name:'Dinner',type:'social'}]},
  { short:'THU', date:'27', label:'Thursday, May 27', theme:'Discover Bogotá', items:[{time:'07:00–08:00',name:'Breakfast',type:'break'},{time:'08:30–13:00',name:'Cultural excursion',type:'highlight'},{time:'13:00–14:00',name:'Lunch',type:'break'},{time:'14:00 onwards',name:'Free time',type:'social'}]},
  { short:'FRI', date:'28', label:'Friday, May 28', theme:'Reflect & look ahead', items:[{time:'07:00–08:00',name:'Breakfast',type:'break'},{time:'09:00–10:50',name:'Working session: planning the next U7+ Challenge',type:'highlight'},{time:'11:00–11:20',name:'Closing remarks',type:'event'},{time:'12:00–13:00',name:'Lunch',type:'break'},{time:'13:00–19:00',name:'Free afternoon',type:'social'},{time:'19:00–20:30',name:'Farewell dinner',type:'social'}]},
  { short:'SAT', date:'29', label:'Saturday, May 29', theme:'Until next time', items:[{time:'Throughout the day',name:'Participant departure & check-out',type:'travel'}]},
];
export const evaluation = [
  {number:'01', title:'Practical utility',description:'Does the proposal solve a documented real-world problem for a defined educational community?'},
  {number:'02', title:'Scalability & transferability',description:'Can the solution be adapted and deployed across other U7+ Alliance universities?'},
  {number:'03', title:'Global collaboration',description:'How did international perspectives, research and peer feedback shape the solution?'},
];
