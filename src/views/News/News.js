import React from 'react';
import './News.css'; 
import Display from '../../components/News/newscards'; 
import Sidebar from "./../../components/Sidebar/Sidebar"
import { Trends } from '../../components/News/newscards';


const newsData = [{
  url: 'https://img.freepik.com/free-photo/hiring-career-employment-human-resources-concept_53876-121273.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid',
  headline: "Recent development in recruiting agencies",                                         //Major Recruitment Drives Ahead!!!
  caption: 'Hays nudges profit forecast lower as recruitment slows',                     //Check Now to grab best oppurtunity
 // url2:"https://economictimes.indiatimes.com/jobs/hr-policies-trends/indian-job-market-likely-to-get-busy-and-bustling/articleshow/111295088.cms?from=mdr"
 url2: "https://www.thetimes.com/business-money/companies/article/hays-warns-on-profit-as-recruitment-slows-zv2s5xx7z?utm_source=chatgpt.com&region=global"
  
},{
  url :'https://cdn.prod.website-files.com/628250e5184b9d641a770e66/66be0772f07c48b32508bba3_6617da59db2ab319316739e2_data-literacy-competencies.webp',
  headline : 'Growing demand for Data Literacy',
  caption :'Data literacy is becoming increasingly important across various industries' ,      //The Mate XT combines a 10-inch tablet and a smartphone in one
  //url2:"https://www.bloomberg.com/news/articles/2024-09-10/huawei-trifold-phone-versus-iphone-16-specs-price-release-date"
  url2: "https://www.thetimes.com/business-money/technology/article/times-recruitment-pays-to-work-in-data-zpfqt7mwn?utm_source=chatgpt.com&region=global"

},{
  url: 'https://www.solulab.com/wp-content/uploads/2020/08/AI-and-Big-Data-for-Blockchain-1-1024x576.jpg',
  headline: "Rising of Blockchain in Employment",                         //Google's AI Breakthrough in Automation
  caption: 'Blockchian Technology is set to transform the future of Employemnt in profound ways',    //Learn about the latest advancements in AI-powered business solutions.
  //url2:"https://research.google/pubs/ai-powered-patching-the-future-of-automated-vulnerability-fixes/"
  url2: "https://jkcp.com/5-ways-blockchain-may-impact-the-future-of-employment/"
},{
  url: 'https://content.kumospace.com/hubfs/Navigating%20the%20Future%20of%20Remote%20Work%20in%20a%20Post-Pandemic%20World/Communicate%20online%20concept%20stock%20illustration.jpg',
  headline: "Current and future trends in remote work",
  caption: 'One of the most helpful technologies for remote work is video conferencing',
  //url2:"https://economictimes.indiatimes.com/tech/startups/economic-survey-india-saw-tech-startup-surge-post-covid-pandemic/articleshow/111931855.cms?from=mdr"
   url2: "https://www.businessnewsdaily.com/8156-future-of-remote-work.html",
},{
  url: 'https://www.state.gov/wp-content/uploads/2021/07/Artificial-Intelligence-AI-scaled.jpg',
  headline: "AI's advancement in today's  technology",
  caption: "AI rapid progress in capturing true human intelligence",
  //url2 :" https://news.microsoft.com/apac/2024/04/10/microsoft-to-invest-us2-9-billion-in-ai-and-cloud-infrastructure-in-japan-while-boosting-the-nations-skills-research-and-cybersecurity/"
  url2: "https://economictimes.indiatimes.com/tech/artificial-intelligence/when-ai-passes-this-test-look-out/articleshow/117494267.cms",
},{
  url:"https://www.manufacturingtodayindia.com/cloud/2024/02/16/Automation-Skill-1536x864.jpg",
  headline :"Debunking automation myths in manufacturing",
  caption:"Automation does not eliminate jobs; it transforms them",
  //url2:"https://www.businesstoday.in/latest/corporate/story/tata-sons-sees-74-surge-in-consolidated-net-profit-at-rs-49000-crore-aviation-business-narrows-loss-in-fy24-444884-2024-09-07"
   url2: "https://www.manufacturingtodayindia.com/debunking-automation-myths-in-manufacturing",
}];
const trends=[{
  name : "Autonomous AI ",
  imgurl : "https://cdn-icons-png.flaticon.com/128/8055/8055576.png",
  info :"AI will become more autonomous, evolving beyond assistance to fully independent systems. These AI solutions will make decisions, perform tasks, and optimize processes across various sectors, from healthcare to logistics. Their growing capabilities will lead to more intelligent and self-managing systems."
},{
  name:"Spatial Computing",
  imgurl:"https://cdn-icons-png.flaticon.com/128/9118/9118415.png",
  info :"Spatial computing will blend physical and digital worlds, creating immersive environments. This includes virtual, augmented, and mixed reality experiences that allow users to interact with 3D digital objects in real-world settings."
},{
  name :"Post-Quantum Cryptography",
  imgurl:"https://cdn-icons-png.flaticon.com/128/9454/9454011.png",
  info:"Need for post-quantum cryptography will increase. Quantum computers will potentially solve complex problems too large for traditional systems, and post-quantum cryptography will protect data from future threats."
},{
  name:"AI Ethics and Governance",
  imgurl:"https://cdn-icons-png.flaticon.com/128/877/877628.png",
  info:"As AI becomes more pervasive, there will be an increased focus on regulating its ethical use. AI governance platforms will be established to ensure transparency, accountability, and fairness in AI decision-making processes. This will include safeguarding against bias, ensuring privacy, and maintaining ethical standards for automated systems."
},{
  name:"Energy-Efficient Technologies",
  imgurl:"https://cdn-icons-png.flaticon.com/128/15758/15758613.png",
  info:"With the global push toward sustainability, energy-efficient computing will gain significant traction. As AI and computing power grow, so will energy consumption. In response, innovations in hardware will focus on reducing the energy footprint of large-scale computing operations."
},{
  name:"Neurotechnologies and Brain-Computer Interfaces",
  imgurl:"https://cdn-icons-png.flaticon.com/128/6584/6584942.png",
  info:"Breakthroughs in neurotechnologies will make significant strides, enabling direct communication between the brain and machines. Brain-computer interfaces will offer new possibilities for people with disabilities and could lead to cognitive enhancements in healthy individuals."
}]
const skills=[
  {name :"Blockchain" ,logo:"https://cdn-icons-png.flaticon.com/128/2152/2152539.png",comp:"IBM,Accenture,Coinbase"},
  { name:"Cloud",logo:"https://img.freepik.com/premium-photo/cloud-computing-technology-concept-futuristic-illustration-isolated-white-background_660230-76062.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"AWS,IBM,Oracle"},
  { name: 'Javascript', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',comp:"Microsoft,Netflix,Amazon" },
  { name: 'React', logo: 'https://t3.ftcdn.net/jpg/03/04/97/12/240_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg',comp:"Airbnb,Facebook,Twitter" },
  { name: 'Python', logo: 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png',comp:"NASA,Google,Uber" },
  {name:"Leadership",logo:"https://img.freepik.com/free-vector/follow-leader-concept-illustration_114360-10886.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"Google,Amazon,Deolitte"},
  {name:"Problem solving",logo:"https://img.freepik.com/free-vector/problem-solving-labyrinth-concept-illustration_114360-2041.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"Microsoft,IBM,Google"},
  {name:"UI/UX",logo:"https://cdn-icons-png.flaticon.com/128/7858/7858975.png",comp:"Apple,Adobe,Spotify"},
  {name :"Communication",logo:"https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149171107.jpg?uid=R160163945&ga=GA1.1.1856927002.1722677193&semt=ais_hybrid",comp:"Google,Salesforce,Deolitte"},
  {name:"Cybersecurity",logo:"https://cdn-icons-png.flaticon.com/128/2092/2092663.png",comp:"Deolitte,Pwc,NSA"},
]


function News() {
  return (
    <div className="maindivn">
       <Sidebar/>
      <h1 className="headingn">Future Skills & Technology</h1>
      <h4 className='headcap'> Latest Insights on Careers and Technology</h4>
      <div className='maincn'>
      <div className='containern'>
      {newsData.map((item, index) => (
        <Display
          key={index}
          headline={item.headline}
          caption={item.caption}
          url={item.url}
          url2={item.url2}
        />
      ))}
      </div>
      <div className='trends'>
      <h3 className='headtrends'>Technology trends for 2025</h3>
      <div className='trendcardcontainer'>
      { trends.map((trend, ind) => (
        <Trends
          key={ind}
          name={trend.name}
          imgurl={trend.imgurl}
          info={trend.info}
          />
      ))}
      </div>
      </div>
      <div>
        <h3 className='heading-skills'>Skills in demand</h3>
        <div className='tech-grid'>
            {skills.map((skill, index) => (
              <div key={index} className='tech-card'>
                <img src={skill.logo} alt={`${skill.name} logo`} className='tech-logo' />
                <p className='tech-name'>{skill.name}</p>
                <p className='techemp'>Employers:{skill.comp}</p>
              </div>
               ))}
          </div>
          </div>
          </div>
          <br/>
          <h3 className='heading-skills'>Voices of Innovation</h3>
          <h4 className='headcap'>"The stars align for those who dare to dream beyond limits and work tirelessly to achieve their vision”</h4>
          <div className='nvideocontainer'>
          <iframe className='youtubev' src="https://www.youtube.com/embed/7m4zQpf3Ouo?si=W5xOwTTyaeiANcs8&amp;start=23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className='youtubev'  src="https://www.youtube.com/embed/vacGRuHDtO0?si=rayQXcnliSG71I1F&amp;start=23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe  className='youtubev'  src="https://www.youtube.com/embed/srn5jgr9TZo?si=-kttQ9S9G2fS5-a3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className='youtubev'  src="https://www.youtube.com/embed/i5WYp4wMXfc?si=4PViRopPOJnlqwyW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className='youtubev'   src="https://www.youtube.com/embed/UUheH1seQuE?si=4mbLuIhWGfEb-cDS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe  className='youtubev'  src="https://www.youtube.com/embed/5MgBikgcWnY?si=t9N1DXSEa41N6Jk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='Show'></div>
    </div>
  );                                         //https://www.youtube.com/results?search_query=sundar+pichai+motivational+speech
}                           
                             
export default News;
   