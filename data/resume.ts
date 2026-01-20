export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  linkedin: string
  website: string
  location: string
  birthDate: string
  birthPlace: string
  nationality: string
}

export interface Education {
  year: string
  degree: string
  institution: string
  location: string
  thesis?: string
  supervisor?: string
}

export interface Experience {
  title: string
  organization: string
  location: string
  period: string
  description: string[]
}

export interface Publication {
  authors: string
  title: string
  journal: string
  year: string
  doi: string
}

export interface Conference {
  name: string
  location: string
  year: string
  presentationTitle: string
  note?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Language {
  name: string
  proficiency: string
}

export interface Reference {
  name: string
  title: string
  institution: string
  address: string
  phone: string
  email: string
  relationship: string
}

export const personalInfo: PersonalInfo = {
  name: 'Afshin Shafei',
  title: 'Research Fellow @ Sapienza Università di Roma | Ph.D. in Environmental Engineering',
  email: 'afshin.shafei@gmail.com',
  phone: '+39-324-742-8571',
  linkedin: 'www.linkedin.com/in/afshin-shafei-ph-d-a92425117',
  website: 'afshinshafei.com',
  location: 'Rome, Latium, Italy',
  birthDate: 'March 27, 1991',
  birthPlace: 'Tabriz, Iran',
  nationality: 'Iranian',
}

export const summary = `I am an Environmental Engineer and Ph.D. Researcher specialized in developing next-generation Early-Warning Systems for extreme climate conditions. Currently a Research Fellow at Sapienza Università di Roma, my work focuses on integrating data-driven approaches, specifically Machine Learning and Deep Learning, to enhance climate downscaling and flood risk management.

Beyond academia, I serve as a Technical Adviser (AI & Emerging Technologies) for AquaNRG. In this role, I bridge the gap between technical innovation and business strategy, guiding executive teams on AI integration for the energy sector, including CCUS, hydrogen, and geothermal markets. I specialize in translating complex data into actionable insights for operational efficiency and risk assessment.

With a strong foundation in Python, Cloud Computing (GCP), and Hydrologic Modeling, I am passionate about leveraging technology to solve critical environmental challenges.`

export const fieldsOfInterest = [
  'Weather Forecasting',
  'AI',
  'Environmental Sciences/Engineering',
  'Flood Risk Management',
  'Climate Change',
  'Remote Sensing',
  'Machine Learning',
]

export const education: Education[] = [
  {
    year: '2015',
    degree: 'Bachelor of Science in Civil Engineering',
    institution: 'Azad University of Shabestar',
    location: 'Tabriz, Iran',
  },
  {
    year: '2018',
    degree: 'Master of Science in Civil Engineering and Architecture',
    institution: 'Istanbul Technical University',
    location: 'Istanbul, Turkey',
  },
  {
    year: '2021',
    degree: 'Master of Science in Environmental Engineering',
    institution: 'University of Bologna',
    location: 'Bologna, Italy',
    thesis: 'Geomorphological characterization of fluvial flood hazard across the island of Oahu, Hawaii',
    supervisor: 'Professor Attilio Castellarin',
  },
  {
    year: '2024',
    degree: 'Ph.D. in Environmental and Hydraulic Engineering',
    institution: 'Sapienza University of Rome',
    location: 'Rome, Italy',
    thesis: 'Designing an Early-Warning System to Forecast Extreme Climate Conditions Using Data-Driven Approaches with Machine-Learning and Deep-Learning Methods',
    supervisor: 'Professor Francesco Cioffi',
  },
  {
    year: '2025',
    degree: 'Research Fellow',
    institution: 'Sapienza University of Rome',
    location: 'Rome, Italy',
  },
]

export const experience: Experience[] = [
  {
    title: 'Research Fellow',
    organization: 'Sapienza Università di Roma',
    location: 'Rome, Latium, Italy',
    period: 'January 2025 - Present',
    description: [
      'Conducting advanced research in environmental and hydraulic engineering',
      'Developing early warning systems for extreme climate conditions',
      'Publishing research findings in international journals',
    ],
  },
  {
    title: 'Technical Adviser (AI & Emerging Technologies)',
    organization: 'AquaNRG: Environmental and Energy Tech Company',
    location: 'Remote',
    period: 'January 2017 - Present',
    description: [
      'Provide expert guidance to CEO and executive team on AI, machine learning, and emerging technologies shaping the energy and environmental sectors',
      'Advise on data-driven decision-making for business strategy, operations, and technology investments',
      'Identify market opportunities for AI-driven solutions in oil and gas, CCUS (carbon capture, utilization, and storage), hydrogen, and geothermal energy',
      'Continuously monitor and assess breakthroughs in AI, geospatial analytics, and energy transition technologies',
      'Evaluate the impact of AI-driven automation, digital twin technology, and predictive analytics on core business areas',
      'Guide the development and integration of AI models to enhance subsurface analytics, risk assessments, and operational efficiency',
      'Advise on AI applications for predictive maintenance, geologic storage optimization, and carbon credit modeling',
      'Ensure scalability, accuracy, and regulatory compliance in AI-driven solutions',
    ],
  },
]

export const phdResearch = `An advanced early warning system was developed during my PhD research, integrating the E-TEPS model, which utilizes a Super-Resolution Generative Adversarial Network to enhance climate downscaling for temperature and precipitation with elevation data, and the FourCastNet global forecasting model. The accuracy and spatial resolution of high-resolution climate predictions were significantly improved, allowing for rapid and precise forecasts of extreme weather events in Italy. This system supports more effective climate-related decision-making and disaster preparedness by providing timely and detailed insights into critical climate variables.`

export const publications: Publication[] = [
  {
    authors: 'Shafei, A.; Cioffi, F.',
    title: 'High-Resolution Early Warning Systems Using DL: Part I - Elevation-Integrated Temperature and Precipitation SRGAN Downscaling (E-TePS)',
    journal: 'Preprints',
    year: '2024',
    doi: 'https://doi.org/10.20944/preprints202408.1420.v1',
  },
  {
    authors: 'Shafei, A.; Cioffi, F.',
    title: 'High-Resolution Early Warning Systems Using DL: Part II - Combining FourCastNet and E-TePS for High-Resolution Climate Forecasting',
    journal: 'Preprints',
    year: '2024',
    doi: 'https://doi.org/10.20944/preprints202408.1322.v1',
  },
]

export const conferences: Conference[] = [
  {
    name: 'IDRA24',
    location: 'Parma, Italy',
    year: '2024',
    presentationTitle: 'Developing an Early-Warning System for Predicting Extreme Climate Conditions Using Data-Driven Machine Learning and Deep Learning Techniques',
  },
  {
    name: 'EGU2024',
    location: 'Vienna, Austria',
    year: '2024',
    presentationTitle: 'Designing an Early-Warning System to Forecast Extreme Climate Conditions Using Data-Driven Approaches with Machine-Learning and Deep-Learning Methods',
  },
  {
    name: 'PhD Days 2023',
    location: 'Matera, Italy',
    year: '2023',
    presentationTitle: 'Introducing an Enhanced Early-Warning System Focused on Downscaling Models Using Deep Learning Methods',
  },
  {
    name: 'AGU2024',
    location: 'Washington DC, USA',
    year: '2024',
    presentationTitle: 'Enhancing Early-Warning Systems for Climate Extremes in Developing Countries Using Machine Learning Models and High-Resolution Datasets',
    note: 'Abstract accepted for oral presentation, Visa denied',
  },
  {
    name: 'EGU Leonardo 2025 Conference on Earth\'s Hydrological Cycle',
    location: 'Bologna, Italy',
    year: '2025',
    presentationTitle: 'Integrating HPC, AI, and Big Data for Enhanced Early-Warning Systems in Hydrological Extremes: Insights from Ghana\'s Tree Crop Sector',
  },
  {
    name: 'SISC2025',
    location: 'Salerno, Italy',
    year: '2025',
    presentationTitle: 'Enhancing Early-Warning Systems for Climate Extremes in Developing Countries Using Machine Learning Models and High-Resolution Datasets',
  },
]

export const skills: Skill[] = [
  {
    category: 'Software',
    items: ['LaTeX', 'QGIS', 'AQUASIM', 'WordPress', 'SWMM', 'EPANET', 'Adobe Perimeter Pro', 'Microsoft Office'],
  },
  {
    category: 'Cloud Computing',
    items: ['Google Cloud Platform (GCP)', 'Google Colab'],
  },
  {
    category: 'Programming Language',
    items: ['Python'],
  },
  {
    category: 'Operating Systems',
    items: ['Linux', 'Windows'],
  },
]

export const languages: Language[] = [
  { name: 'Azerbaijani', proficiency: 'Native or Bilingual' },
  { name: 'Farsi (Persian)', proficiency: 'Native or Bilingual' },
  { name: 'English', proficiency: 'Fluent (IELTS 7.5: Listening 9, Reading 7.5, Writing 6, Speaking 6.5)' },
  { name: 'Turkish', proficiency: 'Professional Working' },
  { name: 'Italian', proficiency: 'Basic' },
  { name: 'Arabic', proficiency: 'Elementary' },
]

export const extracurricular = [
  'Web design',
  'Logo design',
  'Video editing',
  'Music mixing',
]

export const references: Reference[] = [
  {
    name: 'Francesco Cioffi',
    title: 'Professor of Hydraulics and Environmental Hydraulics',
    institution: 'Università di Roma \'La Sapienza\'',
    address: 'Via Eudossiana 18, 00184 Roma',
    phone: '+39-06-44585523',
    email: 'francesco.cioffi@uniroma1.it',
    relationship: 'Ph.D. Supervisor',
  },
  {
    name: 'Attilio Castellarin',
    title: 'Professor of Hydraulic Infrastructures, Hydrological Modeling, and Flood and Drought Risk Management',
    institution: 'University of Bologna',
    address: 'Viale del Risorgimento 2, Bologna',
    phone: '+39-051-209-3365',
    email: 'attilio.castellarin@unibo.it',
    relationship: 'Master\'s Thesis Supervisor',
  },
]
