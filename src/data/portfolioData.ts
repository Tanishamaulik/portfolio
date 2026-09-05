export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Cybersecurity' | 'Software Development' | 'AI / Tools' | 'UI / UX';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  macTitle?: string;
  highlights: string[];
  datePeriod?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  type: 'Education' | 'Internship' | 'Freelance';
  liveLinks?: { title: string; url: string }[];
  cgpa?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: 'EC-Council' | 'Cisco' | 'IBM' | 'Amazon Web Services (AWS)' | 'SkillUp' | 'NPTEL' | 'DY PATIL' | 'IELTS Official';
  issueDate: string;
  credentialId?: string;
  category: 'Cisco' | 'IBM' | 'AWS' | 'Security & IT';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; tag: 'Core Competency' | 'Hands-on' | 'Cert Concepts'; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Tanisha Maulik",
    handle: "@Tanishamaulik",
    pronouns: "She/Her",
    title: "MSc Cybersecurity Risk Management & Software Developer",
    tagline: "MSc Cybersecurity Risk Management | B.Tech IT | Aspiring SOC Analyst & Software Developer specializing in threat detection, risk management, network security, and full-stack applications.",
    bioShort: "Cybersecurity & Risk Management post-graduate with hands-on experience in security analysis, networking, and software development. Skilled in CCNA & CEH concepts, risk mitigation, and threat detection.",
    bioFull: "Cybersecurity enthusiast with hands-on experience in networking, security analysis, and software development. Currently pursuing MSc in Cybersecurity Risk Management alongside a B.Tech in IT. Skilled in CCNA and CEH concepts, network troubleshooting, and cybersecurity tools. Experienced through internships in Software Development and Cybersecurity Analysis, as well as freelance CRM and website development projects. Eager to apply and grow my skills in cybersecurity, risk management, and IT. Passionate about threat detection, network security, and incident response, with a long-term goal of becoming a Security Operations Center (SOC) Analyst.",
    location: "Galway, County Galway, Ireland",
    email: "tanishamaulik@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanisha-maulik-172808377/",
    github: "https://github.com/Tanishamaulik",
    availabilityStatus: "#OPENTOWORK — Open to SOC Analyst, Risk Management & Software Roles in Ireland / Remote",
    institutionMSc: "University of Galway (NUIG)",
    institutionBTech: "DY Patil University",
    cgpaBTech: "8.52 / 10 (1:1)",
    exInternship: "DOT POWER PVT LTD",
    nowStatus: {
      currentlyBuilding: "MITM Attack Defense Engine & Dynamic ARP Inspection Lab",
      currentlyLearning: "Enterprise Cyber Risk Frameworks, SIEM Analytics & ISO 27001",
      favoriteStack: "Python + Wireshark + Snort IDS + Next.js + React",
      currentVibe: "Packet analysis, threat mitigation & shipping secure code",
    },
    bentoStats: [
      { number: "18", label: "Certifications", detail: "EC-Council, Cisco & IBM" },
      { number: "8.52", label: "Final B.Tech CGPA", detail: "DY Patil Graduate" },
      { number: "MSc (NUIG)", label: "Cyber Risk Mgmt", detail: "University of Galway" },
      { number: "3 Live", label: "Freelance Sites", detail: "Production Deployed" },
    ],
  },

  terminalCommands: {
    whoami: "Tanisha Maulik — MSc Cybersecurity Risk Management (NUIG) | B.Tech IT (CGPA 8.52) | Aspiring SOC Analyst based in Galway, Ireland.",
    experience: "Freelance Full Stack Developer | Junior Cybersecurity Analyst & Software Developer Intern at DOT POWER PVT LTD | Internshala Student Partner",
    certifications: "18 Certs: C|EH (EC-Council, Ongoing), Cisco (6 Certs), IBM (4 Certs), AWS (Cloud Architecting & Solutions Architecture), IELTS Official, SkillUp, NPTEL, DY PATIL.",
    skills: "Cybersecurity: Risk Management, CCNA & CEH concepts, Security Analysis, Threat Mitigation, Snort IDS, Wireshark DPI.\nSoftware Dev: React, Next.js, TypeScript, HTML/CSS, CRM Systems, Python, Flutter, Unity AR.",
    contact: "Email: tanishamaulik@gmail.com\nWhatsApp: +353 85 172 2445\nLocation: Galway, County Galway, Ireland\nGitHub: github.com/Tanishamaulik\nLinkedIn: linkedin.com/in/tanisha-maulik-172808377/",
    status: "🟢 #OPENTOWORK: Seeking SOC Analyst, Cybersecurity Risk Management & Software Engineering Roles.",
  },

  certifications: [
    {
      id: "cert-ceh",
      title: "C|EH – Certified Ethical Hacker",
      issuer: "EC-Council",
      issueDate: "Ongoing",
      category: "Security & IT",
    },
    {
      id: "cert-ccna-wireless",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      issueDate: "Jun 2026",
      category: "Cisco",
    },
    {
      id: "cert-ccna-enterprise",
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco",
      issueDate: "Jun 2026",
      category: "Cisco",
    },
    {
      id: "cert-python-2",
      title: "Python Essentials 2",
      issuer: "Cisco",
      issueDate: "Jun 2026",
      category: "Cisco",
    },
    {
      id: "cert-python-1",
      title: "Python Essentials 1",
      issuer: "Cisco",
      issueDate: "Jun 2026",
      category: "Cisco",
    },
    {
      id: "cert-modern-ai",
      title: "Introduction to Modern AI",
      issuer: "Cisco",
      issueDate: "Jun 2026",
      category: "Cisco",
    },
    {
      id: "cert-ccna-intro",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      issueDate: "May 2026",
      category: "Cisco",
    },
    {
      id: "cert-aws-cloud-arch",
      title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Apr 2025",
      category: "AWS",
    },
    {
      id: "cert-ielts",
      title: "IELTS Official Certification",
      issuer: "IELTS Official",
      issueDate: "Mar 2025",
      credentialId: "241A528153MAUT007A",
      category: "Security & IT",
    },
    {
      id: "cert-ibm-openvas",
      title: "Incident Response and Defense with OpenVAS",
      issuer: "IBM",
      issueDate: "Jan 2026",
      credentialId: "FC8QN0062VGQ",
      category: "IBM",
    },
    {
      id: "cert-wireshark-skillup",
      title: "Network Traffic Analysis with Wireshark",
      issuer: "SkillUp",
      issueDate: "Jan 2026",
      credentialId: "HRPS3L21UD0V",
      category: "Security & IT",
    },
    {
      id: "cert-ibm-ethical-hacking",
      title: "Introduction to Ethical Hacking Principles",
      issuer: "IBM",
      issueDate: "Dec 2025",
      credentialId: "QOYO8RZV06FJ",
      category: "IBM",
    },
    {
      id: "cert-ibm-metasploit",
      title: "Exploitation and Penetration Testing with Metasploit",
      issuer: "IBM",
      issueDate: "Dec 2025",
      credentialId: "ZH5O4BTM229L",
      category: "IBM",
    },
    {
      id: "cert-ibm-kali",
      title: "Ethical Hacking with Kali Linux",
      issuer: "IBM",
      issueDate: "Dec 2025",
      credentialId: "77UMOP9EELVV",
      category: "IBM",
    },
    {
      id: "cert-nptel-privacy",
      title: "Cyber Security and Privacy",
      issuer: "NPTEL",
      issueDate: "Nov 2025",
      category: "Security & IT",
    },
    {
      id: "cert-aws-arch",
      title: "Solutions Architecture Job Simulation",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Aug 2025",
      credentialId: "Nv6kP9TP4x3euyDuc",
      category: "AWS",
    },
    {
      id: "cert-sankalp",
      title: "Certificate of Participation for Sankalp",
      issuer: "DY PATIL",
      issueDate: "Oct 2025",
      category: "Security & IT",
    },
    {
      id: "cert-technovate",
      title: "TechnoVate 2025 Engineering Certificate",
      issuer: "DY PATIL",
      issueDate: "Apr 2025",
      category: "Security & IT",
    },
  ] as CertificationItem[],

  projects: [
    {
      id: "project-mitm",
      title: "Threat Mitigation for MITM Attacks",
      subtitle: "Automated Dynamic ARP Inspection & Packet Defense Lab",
      macTitle: "mitm-defense-engine.py",
      description: "Simulates a Man-in-the-Middle (MITM) attack using ARP Spoofing in an isolated virtual lab and implements a robust, automated Python-based Dynamic ARP Inspection (DAI)-style defense mechanism to mitigate threat vectors in real-time.",
      longDescription: "Demonstrates successful execution of ARP spoofing attacks, real-time detection via packet analysis, and automated host-based mitigation enforcement using Windows system commands and custom Python alert scripts.",
      category: "Cybersecurity",
      technologies: ["Python", "Dynamic ARP Inspection", "Packet Analysis", "ARP Spoofing Mitigation", "Windows System CLI"],
      githubUrl: "https://github.com/Tanishamaulik/Threat-mitigation-for-MITM-Attacks",
      featured: true,
      datePeriod: "Nov 2025 – Dec 2025",
      highlights: [
        "Automated Python DAI-style packet inspection detecting ARP cache poisoning",
        "Host-based real-time mitigation executing dynamic Windows CLI firewall rules",
        "Complete virtual lab simulation mapping attack vectors and defense logs",
      ],
    },
    {
      id: "project-secondhand",
      title: "Second Hand Marketplace with Image Moderation",
      subtitle: "Serverless AI Image Moderation & NSFW Content Detection",
      macTitle: "image-moderator.py",
      description: "Automated cloud function triggered upon image upload that uses AI vision APIs to detect inappropriate content (NSFW) and automatically deletes flagged images or alerts moderators.",
      longDescription: "Built for e-commerce security and content safety. Listens to file upload events, routes images through computer vision classification models, and enforces immediate database sanitation for policy violations.",
      category: "AI / Tools",
      technologies: ["Python", "AI Image Moderation", "NSFW Detection API", "Serverless Functions", "REST APIs"],
      githubUrl: "https://github.com/Tanishamaulik/Second-Hand-Marketplace-with-Image-Moderation",
      featured: true,
      datePeriod: "Jan 2026",
      highlights: [
        "Automated cloud trigger executing zero-latency image analysis on upload",
        "AI computer vision model integration flagging NSFW & inappropriate content",
        "Automated sanitization workflow deleting flagged assets from storage buckets",
      ],
    },
    {
      id: "project-ids",
      title: "Secure Network IDS Project",
      subtitle: "Mininet Network Architecture & Snort Threat Detection",
      macTitle: "snort-ids-policy.rules",
      description: "Mininet-based network security project demonstrating secured network architecture, policy enforcement via virtual firewalls, and active threat detection using Snort IDS.",
      longDescription: "Showcases expertise in enterprise security architecture, virtual firewall policy enforcement, packet logging, and Snort intrusion detection rule configuration under simulated network loads.",
      category: "Cybersecurity",
      technologies: ["Snort IDS", "Mininet", "Virtual Firewalls", "Network Architecture", "Policy Enforcement"],
      githubUrl: "https://github.com/Tanishamaulik/Secure-Network-IDS-Project",
      featured: true,
      datePeriod: "Nov 2025",
      highlights: [
        "Custom Snort IDS rule engine detecting malformed packets and scan probes",
        "Virtual firewall policy enforcement blocking unauthorized VLAN traffic",
        "Simulated Mininet topology testing network throughput and security limits",
      ],
    },
    {
      id: "project-wireshark",
      title: "Network Traffic Analysis (Wireshark Forensics)",
      subtitle: "Deep Packet Inspection (DPI) & Protocol Exploitation",
      macTitle: "wireshark-dpi-analysis.pcap",
      description: "Performed Deep Packet Inspection (DPI) on captured network traffic to analyze unencrypted HTTP protocols and extract plaintext login credentials from HTML Form URL Encoded layers.",
      longDescription: "Deployed an insecure HTTP server to demonstrate the vulnerability of unencrypted transport protocols against passive network sniffing. Captured PCAP traffic and parsed application layer payloads.",
      category: "Cybersecurity",
      technologies: ["Wireshark", "Deep Packet Inspection (DPI)", "Network Forensics", "HTTP Protocol Analysis", "PCAP Mining"],
      githubUrl: "https://github.com/Tanishamaulik/Wireshark-Analysis",
      featured: false,
      datePeriod: "Oct 2025",
      highlights: [
        "Captured and parsed application-layer PCAP streams using Wireshark filters",
        "Extracted plaintext HTML form credentials demonstrating unencrypted transport risks",
        "Documented mitigation guidelines enforcing HTTPS and TLS encryption standards",
      ],
    },
    {
      id: "project-argon2",
      title: "Secure Password Hashing Demonstrator",
      subtitle: "Memory-Hard Argon2id KDF & Cryptography Engine",
      macTitle: "argon2-hasher.py",
      description: "Developed a Python application implementing Argon2id (industry-standard Key Derivation Function) for secure password storage, defending against GPU brute-force and dictionary attacks.",
      longDescription: "Configured memory-cost, time-cost, and parallelism parameters of Argon2id. Benchmarked hashing performance against legacy MD5 and SHA-256 algorithms to prove resistance against offline cracking.",
      category: "Cybersecurity",
      technologies: ["Python", "Argon2id KDF", "Cryptography", "Password Hashing", "Security Engineering"],
      githubUrl: "https://github.com/Tanishamaulik/argon2-hashing-project",
      featured: false,
      datePeriod: "Oct 2025",
      highlights: [
        "Implemented memory-hard Argon2id KDF resisting GPU/ASIC brute-force attacks",
        "Configured salt generation and parameter tuning for optimal security tradeoffs",
        "Benchmarked cryptographic performance against rainbow table threats",
      ],
    },
    {
      id: "project-entropy",
      title: "Web Password Strength Analyzer",
      subtitle: "Shannon Entropy Bit-Based Security Evaluator",
      macTitle: "entropy-checker.js",
      description: "A client-side web application implementing the Shannon Entropy mathematical formula to provide quantitative, bit-based password security ratings beyond simple complexity rules.",
      longDescription: "Calculates mathematical entropy bits based on character set variance and length. Built with HTML, Tailwind CSS, and JavaScript to deliver instant visual feedback to users.",
      category: "Software Development",
      technologies: ["JavaScript", "Shannon Entropy", "Tailwind CSS", "HTML5", "Authentication Requirements"],
      githubUrl: "https://github.com/Tanishamaulik/password-strength-checker",
      featured: false,
      datePeriod: "Sep 2025",
      highlights: [
        "Mathematical Shannon Entropy calculation quantifying password strength in bits",
        "Zero-dependency client-side script protecting user credential privacy",
        "Real-time visual strength meter built with Tailwind CSS animations",
      ],
    },
    {
      id: "project-iceback",
      title: "Ice-Back UI/UX Financial Platform Design",
      subtitle: "Web & Mobile App Design System for Cashback Rewards",
      macTitle: "iceback-figma-system",
      description: "Designed a comprehensive web landing page and mobile application UI/UX for Ice-Back, a financial technology platform rewarding users with cashback on transactions.",
      longDescription: "Created high-fidelity Figma interactive wireframes, component design systems, typography hierarchy, and transaction history screens tailored for seamless financial management.",
      category: "UI / UX",
      technologies: ["Figma", "UI/UX Design", "Mobile App Design", "Web Wireframing", "Design System"],
      liveUrl: "https://www.figma.com/proto/Mqju3qXwMJGvwv8HDzfymm/Iceback?node-id=7113-2955&p=f&t=Zf3IJ2tAySFFEPiN-1&scaling=min-zoom&content-scaling=fixed&page-id=7020%3A3430&starting-point-node-id=7113%3A2955&show-proto-sidebar=1",
      featured: false,
      datePeriod: "Aug 2025",
      highlights: [
        "High-fidelity interactive mobile and web prototypes designed in Figma",
        "Tailored financial design system with dark/light component variants",
      ],
    },
    {
      id: "project-movie",
      title: "Movie Recommender App (Flutter)",
      subtitle: "Cross-Platform Dynamic Content Discovery Engine",
      macTitle: "movie-recommender-flutter",
      description: "A modern Flutter application helping users discover trending movies and personalized TV recommendations using API data and viewing history.",
      longDescription: "Cross-platform mobile application built with Dart & Flutter. Connects to external media APIs, caches search history, and presents dynamic trending recommendations.",
      category: "Software Development",
      technologies: ["Flutter", "Dart", "REST APIs", "Mobile App Engineering", "JSON Parsing"],
      githubUrl: "https://github.com/Tanishamaulik/Movie-Recommender",
      featured: false,
      datePeriod: "Mar 2025",
      highlights: [
        "Cross-platform Flutter application with smooth 60fps list scrolling",
        "Integrated TMDB REST API for dynamic trending movies & search filtering",
      ],
    },
    {
      id: "project-ar",
      title: "AR Interior Design App",
      subtitle: "Augmented Reality Virtual Room & Furniture Placement",
      macTitle: "ar-room-scanner.cs",
      description: "A Unity-based mobile application that scans physical rooms, detects walls and floor surfaces, and allows users to place 3D virtual furniture in real time using AR.",
      longDescription: "Developed at DY Patil University using C# and Unity AR Foundation. Implements spatial plane detection, raycasting surface alignment, and 3D furniture scaling.",
      category: "Software Development",
      technologies: ["Augmented Reality (AR)", "C#", "Unity", "Plane Detection", "3D Raycasting"],
      githubUrl: "https://github.com/Tanishamaulik/AR-Interior-Design-App-",
      featured: false,
      datePeriod: "Feb 2024 – May 2024",
      highlights: [
        "Real-time surface and plane detection using Unity AR Foundation",
        "Interactive 3D furniture raycast placement and rotation controls",
        "Developed as part of B.Tech IT capstone engineering at DY Patil University",
      ],
    },
  ] as Project[],

  experiences: [
    {
      id: "exp-freelance",
      period: "Dec 2025 – Present",
      role: "Freelance Full Stack Developer",
      company: "Freelance (Self-employed)",
      location: "Navi Mumbai, Maharashtra, India / Remote",
      summary: "Freelance Full Stack Developer specializing in modern websites, mobile applications, and custom business management systems. Building responsive, secure, and scalable solutions with a strong focus on user experience, performance, and reliability.",
      bulletPoints: [
        "Designed and deployed custom client websites and business dashboards streamlining operations.",
        "Built responsive customer interfaces with modern frameworks, high Lighthouse speed scores, and mobile optimization.",
        "Delivered notable live platforms including an HR consultancy website, a hospital management portal, and a business enterprise web suite.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Web Applications"],
      type: "Freelance",
      liveLinks: [
        { title: "Career Point HR Consultancy", url: "https://www.careerpoint.online/" },
        { title: "Dr. Dokes Hospital", url: "https://www.drdokeshospital.com/" },
        { title: "SK Enterprises", url: "https://www.theskenterprises.in/" },
      ],
    },
    {
      id: "exp-dotpower-analyst",
      period: "Apr 2026 – Jun 2026",
      role: "Junior Cybersecurity Analyst",
      company: "DOT POWER PVT LTD",
      location: "Navi Mumbai, Maharashtra, India (On-site)",
      summary: "Assisted in monitoring and analyzing network and system security to identify potential threats and vulnerabilities.",
      bulletPoints: [
        "Conducted vulnerability assessments, analyzed security logs, and supported incident investigation and response activities.",
        "Performed network traffic analysis and security testing using tools such as Wireshark and Nmap, documented findings, and recommended remediation measures.",
        "Collaborated with team members to strengthen security controls, maintain technical documentation, and stay updated on emerging cybersecurity threats.",
      ],
      technologies: ["Web Application Security", "Nmap", "Wireshark", "Incident Response", "Vulnerability Assessment"],
      type: "Internship",
    },
    {
      id: "exp-dotpower-dev",
      period: "Dec 2025 – Apr 2026",
      role: "Software Developer Intern",
      company: "DOT POWER PVT LTD",
      location: "Navi Mumbai, Maharashtra, India (On-site)",
      summary: "Assisted in building and optimizing applications using modern programming languages and frameworks.",
      bulletPoints: [
        "Focused on performance, code scalability, and user interface usability.",
        "Built responsive user interfaces using modern frontend technologies.",
        "Collaborated with engineering teams to optimize software execution efficiency.",
      ],
      technologies: ["Software Development", "React", "Web Application Engineering", "Git", "Frontend"],
      type: "Internship",
    },
    {
      id: "exp-internshala",
      period: "Aug 2025 – Oct 2025",
      role: "Internshala Student Partner",
      company: "Internshala (Internship)",
      location: "Remote",
      summary: "Served as a Brand Ambassador for Internshala, actively promoting internship and training programs on campus.",
      bulletPoints: [
        "Engaged with peers to highlight the benefits of using Internshala for career development.",
        "Organized workshops and information sessions that boosted student awareness of internship opportunities by around 30%.",
        "Formulated campus outreach strategies and presented public speaking sessions.",
      ],
      technologies: ["Marketing Strategy", "Public Speaking", "Community Leadership", "Event Planning"],
      type: "Internship",
    },
    {
      id: "exp-msc-galway",
      period: "Sep 2026 – Aug 2027",
      role: "MSc in Cybersecurity Risk Management",
      company: "University of Galway (NUIG)",
      location: "Galway, Ireland",
      summary: "Postgraduate degree at NUIG specializing in Cyber Risk Management, Information Security Governance, and Threat Mitigation.",
      bulletPoints: [
        "Studying risk assessment frameworks (NIST, ISO 27001) and security policy formulation.",
        "Conducting threat vulnerability research and strategic risk mitigation analysis.",
        "Applying security risk analysis to enterprise IT environments.",
      ],
      technologies: ["Cybersecurity Risk Management", "NIST", "ISO 27001", "Threat Analysis", "Security Governance"],
      type: "Education",
    },
    {
      id: "exp-btech-rait",
      period: "Sep 2022 – Jun 2026",
      role: "Bachelor of Technology in Information Technology",
      company: "DY Patil University",
      location: "India",
      summary: "Undergraduate degree in Information Technology with specialized coursework in Security, Networks, and Software Engineering.",
      cgpa: "Final CGPA: 8.52 / 10 (1:1)",
      bulletPoints: [
        "Graduated with Final CGPA of 8.52/10 (1:1) in Information Technology.",
        "Completed comprehensive coursework in Data Communication, Computer Networks, and Operating Systems.",
        "Studied CCNA and CEH security concepts, threat analysis, and cryptography.",
        "Developed AR Interior Design App using Unity & C# as capstone project.",
      ],
      technologies: ["Information Technology", "Computer Networks", "Cybersecurity", "Software Engineering"],
      type: "Education",
    },
    {
      id: "exp-dav-public",
      period: "2019 – 2022",
      role: "HSC & SSC Secondary Education",
      company: "Dayanand Anglo Vedic (DAV) Public School",
      location: "India",
      summary: "HSC Science & Computer Science (2021 – 2022) | SSC Class 10 (2019 – 2020)",
      bulletPoints: [
        "HSC (Higher Secondary Certificate) in Science & Computer Science (2021 – 2022).",
        "SSC (Secondary School Certificate Class 10) (2019 – 2020).",
      ],
      technologies: ["Computer Science", "Mathematics", "Physics"],
      type: "Education",
    },
  ] as ExperienceItem[],

  skillGroups: [
    {
      category: "Cybersecurity & Risk Management",
      description: "Security operations, risk assessment, network defense, and governance.",
      skills: [
        { name: "MSc Cybersecurity Risk Management (NUIG)", tag: "Core Competency" },
        { name: "Vulnerability Assessment & Threat Analysis", tag: "Core Competency" },
        { name: "Nmap & Wireshark DPI Analysis", tag: "Hands-on" },
        { name: "Dynamic ARP Inspection & MITM Defense", tag: "Hands-on" },
        { name: "Snort IDS & Mininet Architecture", tag: "Hands-on" },
        { name: "CCNA & CEH Concepts", tag: "Cert Concepts" },
      ],
    },
    {
      category: "Software Development",
      description: "Building responsive frontends, CRM portals, and reliable software systems.",
      skills: [
        { name: "React.js / Next.js", tag: "Core Competency" },
        { name: "JavaScript / TypeScript", tag: "Core Competency" },
        { name: "Python for Security & Automation", tag: "Core Competency" },
        { name: "Custom Business CRM Systems", tag: "Hands-on" },
        { name: "Flutter & AR Unity Development", tag: "Hands-on" },
        { name: "HTML5 / Tailwind CSS / Web App Sec", tag: "Core Competency" },
      ],
    },
    {
      category: "IT Operations & Workflows",
      description: "Tools, leadership, and public speaking practices.",
      skills: [
        { name: "Git & GitHub (@Tanishamaulik)", tag: "Core Competency" },
        { name: "Figma UI/UX Design (Ice-Back)", tag: "Core Competency" },
        { name: "Linux / Unix Administration", tag: "Hands-on" },
        { name: "Internshala Student Partner / Leadership", tag: "Hands-on" },
        { name: "System Hardening & Governance", tag: "Cert Concepts" },
      ],
    },
  ] as SkillGroup[],
};
