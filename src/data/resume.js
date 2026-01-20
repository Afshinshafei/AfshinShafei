// Resume data structure - Update with your information from CV_noprivateinfo.pdf and Profile.pdf
export const resumeData = {
  personal: {
    name: "YOUR NAME",
    title: "YOUR TITLE",
    tagline: "PLAYER 1 READY",
    location: "Your Location",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },
  
  summary: "Your professional summary goes here. This should be extracted from your CV. Describe your expertise, experience, and what makes you unique as a professional.",
  
  skills: {
    technical: [
      "Programming Language 1",
      "Programming Language 2",
      "Framework 1",
      "Framework 2",
      "Tool 1",
      "Tool 2",
    ],
    tools: [
      "Development Tool 1",
      "Development Tool 2",
      "Platform 1",
      "Platform 2",
    ],
    soft: [
      "Soft Skill 1",
      "Soft Skill 2",
      "Soft Skill 3",
    ],
  },
  
  experience: [
    {
      title: "Job Title 1",
      company: "Company Name",
      location: "Location",
      period: "Month Year - Present",
      responsibilities: [
        "Key responsibility or achievement 1",
        "Key responsibility or achievement 2",
        "Key responsibility or achievement 3",
      ],
    },
    {
      title: "Job Title 2",
      company: "Company Name",
      location: "Location",
      period: "Month Year - Month Year",
      responsibilities: [
        "Key responsibility or achievement 1",
        "Key responsibility or achievement 2",
        "Key responsibility or achievement 3",
      ],
    },
  ],
  
  education: [
    {
      degree: "Degree Name",
      institution: "University/College Name",
      location: "Location",
      period: "Year - Year",
      details: "Additional details, GPA, honors, etc.",
    },
  ],
  
  certifications: [
    {
      name: "Certification Name 1",
      issuer: "Issuing Organization",
      year: "Year",
    },
    {
      name: "Certification Name 2",
      issuer: "Issuing Organization",
      year: "Year",
    },
  ],
};
