import computer from "./Images/computer.png";
import dataScience from "./Images/data.png";
import features from "./Images/features.png";
import product from "./Images/product.png";
import digital from "./Images/digital-marketing.png";
import google from "./Images/google.png";
import microsoft from "./Images/microsoft.png";
import social from "./Images/social.png";
import apple from "./Images/apple-logo.png";
import mobile from "./Images/mobile.png";
import arav from "./Images/arav.webp";
import arjun from "./Images/arjun.png";
import isha from "./Images/isha.jpg";
import sneha from "./Images/sneha.jpg";

const highDemandJobs = [
    { imgSrc: features, alt: 'AI Engineer', title: 'AI Engineer', description: 'The AI sector is booming, with engineers developing and implementing AI solutions across various industries. They conduct user research, create wireframes and prototypes, to ensure the product meets user needs and expectations.' },
    { imgSrc: product, alt: 'Product Manager', title: 'Product Manager', description: 'Product Managers oversee the development and lifecycle of products. They work cross-functionally with engineering, marketing, and sales teams to define product features, develop roadmaps, and ensure successful product launches.' },
    { imgSrc: dataScience, alt: 'Data Scientist', title: 'Data Scientist', description: 'Data Scientists analyze complex data sets to help organizations make data-driven decisions. They use statistical methods, machine learning, and data visualization to uncover insights and trends from data.' },
    { imgSrc: computer, alt: 'Software Engineer', title: 'Software Engineer', description: 'Software Engineers design, develop, and maintain software applications and systems. They work on coding, testing, and debugging to ensure software is functional, reliable, and user-friendly.' },
    { imgSrc: digital, alt: 'Digital Marketer', title: 'Digital Marketer', description: 'Digital Marketers develop and implement online marketing strategies to drive traffic and sales. They use various digital channels, including social media, email, and search engine marketing, to reach and engage target audiences.' },
  ];

  const topCompanies = [
    { 
        logoSrc: microsoft, 
        alt: 'Microsoft', 
        name: 'Microsoft', 
        description: 'Microsoft Corporation is a global leader in software, hardware, and technology solutions. Known for its Windows operating system, Office suite, and Azure cloud services, Microsoft offers a broad range of career opportunities in technology, business, and research.',
    },
    
    { 
        logoSrc: social, 
        alt: 'Amazon', 
        name: 'Amazon', 
        description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence. As one of the world\'s largest online retailers, Amazon provides a diverse range of career opportunities in various fields including technology, logistics, and retail.',
    },
    { 
        logoSrc: apple, 
        alt: 'Apple', 
        name: 'Apple', 
        description: 'Apple Inc. is a leading technology company known for its innovative consumer electronics, software, and services. With iconic products like the iPhone, iPad, and Mac, Apple offers exciting career opportunities in design, engineering, retail, and more.',
    },
    { 
        logoSrc: mobile, 
        alt: 'Meta', 
        name: 'Meta (formerly Facebook)', 
        description: 'Meta Platforms, Inc., formerly known as Facebook, Inc., is a multinational technology conglomerate specializing in social media services, virtual reality, and artificial intelligence. Meta focuses on building communities and connecting people around the world, offering diverse career paths in tech and beyond.',
    },
    {
      logoSrc: google, 
      alt: 'Google', 
      name: 'Google', 
      description: 'Google LLC is a multinational technology company specializing in Internet-related services and products. Its most popular services include search, advertising, cloud computing, and software. Google is renowned for its innovative work environment and is a major player in various tech sectors.',
  },
];

  
  const newsArticles = [  
    { img:'https://mycvcreator.com/administrator/postimages/677aa10ab1ee31.87882201.jpg',title:'Emerging Career for 2025', description: 'Discover the most promising career paths and industry changes shaping the job market in 2025.', date: 'January 5, 2024' },
    { img:'https://app.croneri.co.uk/sites/default/files/skills%20not%20degrees.jpeg',title: 'Skills Employers Need Today', description: 'Learn which skills are crucial today for staying ahead in todays evolving job landscape.', date: 'January 20, 2025' },
    { img:'https://www.kindafrugal.com/wp-content/uploads/2024/04/Company-HR-taking-interview.jpg',title: 'Mastering the Job Interview', description: 'Get tips and tricks on how to prepare for and succeed in your next job interview with effective practices.', date: 'February 10, 2025' },
    { img:'https://www.hok.com/wp-content/uploads/2020/05/office-work-1920-x-1280.jpg',title: 'The Rise of Remote Work', description: 'Explore how remote work is transforming industries and creating new opportunities globally.', date: 'February 27, 2025' }
  ];

  //https://img.freepik.com/premium-photo/jobs-with-wooden-colorfull-cubes_488220-3036.jpg?w=996
  //https://img.freepik.com/free-photo/scene-with-business-person-working-futuristic-office-job_23-2151003709.jpg?t=st=1726455187~exp=1726458787~hmac=80224f20675f1608428b36db0592818c62dde06f1dd458394001901c745b30dd&w=996
  //https://img.freepik.com/free-photo/happy-male-candidate-greeting-member-human-resource-team-job-interview-office_637285-6567.jpg?t=st=1726454870~exp=1726458470~hmac=d24929ea66cf7c8a8b37bddd441e667459d992e7d9d5ba8a2703ca34370a8f47&w=996
  //https://img.freepik.com/free-photo/hr-representatives-positively-greeting-female-job-candidate_1163-4702.jpg?t=st=1726455042~exp=1726458642~hmac=a61485c1874ecc4ec874cc1630f7f4a8deeb3cfad09aa171f0b0c3e68f0de047&w=996

  const feedbacks =[
  { 
    img: arav, alt: 'Aarav',
    name: 'Raghav Singh',   //Aarav Sharma
    comment: 'Great platform! The job search features are very helpful and user-friendly.', 
    rating: '⭐⭐⭐⭐⭐'
  },
  { 
    img: isha, alt: 'Isha',
    name: 'Ishani Malhotra',   //Isha Patel
    comment: 'I found my dream job through this site.Application process was smooth and efficient.', 
    rating: '⭐⭐⭐⭐' 
  },
  { 
    img: arjun,
    alt: 'Arjun',
    name: 'Abhimanyu Sinha',  //Arjun Gupta
    comment: 'The resources and articles provided are top-notch. I feel well-prepared for interviews.', 
    rating: '⭐⭐⭐⭐⭐'
  },
  { 
    img: sneha, alt: 'Sneha',
    name: 'Kritika Malik',   //Sneha Joshi
    comment: 'The site is easy to navigate, but I wish there were more job listings in my field.', 
    rating: '⭐⭐⭐' 
  }
]
  
  export {highDemandJobs,topCompanies,newsArticles,feedbacks}