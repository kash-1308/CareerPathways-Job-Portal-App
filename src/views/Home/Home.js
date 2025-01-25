import React, { useEffect } from 'react';
import "./Home.css";
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import job from './hlo-img.png';
import { toast } from 'react-hot-toast';
import { highDemandJobs, topCompanies, newsArticles, feedbacks} from '../../config/homeData';

function Home() {
  useEffect(() => {
    toast.loading('Loading content...');
    setTimeout(() => {
      toast.dismiss();
      toast.success('Content loaded successfully!');
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar /><br/>
      <div className='box'>
        <div className='content-container'>
          <div className='content'>
            <h1 className='liner-text'>Shape Your Career Path</h1>
            <h4>Discover Opportunities, Learn, and Grow</h4>
            <p className='intro-paragraph'>
              Uncover a world of career opportunities and resources designed to propel you towards success. Whether you're seekiing a new challenge or looking to upgrade your skills, we provide the tools and support you need to thrive. Begin your journey today and pave the way to a brighter tomorrow.
            </p>
          </div>

          <div className='content-img'>
            <img src={job} alt='Content-Img' />
          </div>
        </div>

        <div>
          <h3>Trending Job Roles</h3>
          <div className='job-list'>
            {highDemandJobs.map((job, index) => (
              <div key={index} className='job-item'>
                <img src={job.imgSrc} alt={job.alt} className='job-img' />
                <h4 className='job-title'>{job.title} </h4>
                <p className='job-des'>{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3>Premier Organizations</h3>
          <div className='company-list'>
            {topCompanies.map((company, index) => (
              <div key={index} className='company-item'>
                <img src={company.logoSrc} alt={company.alt} className='company-img' />
                <h4 className='company-title'>{company.name}</h4>
                <p className='company-des'>{company.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='news-section'>
          <h3>Trending Updates</h3>
          <div className='news-list'>
            {newsArticles.map((news, index) => (
              <article key={index} className='news-item'>
                <img src={news.img} alt={news.alt} className='news-img' />
                <h4 className='news-title'>{news.title}</h4>
                <p className='news-des'>{news.description}</p>
                <span className='news-date'>{news.date}</span>
              </article>
            ))}
          </div>
        </div>

        <div className='feedback-section'>
          <h3>Hear From Our Community</h3>
          <div className='feedback-list'>
            {feedbacks.map((feedback, index) => (
              <div key={index} className='feedback-item'>
                <img src={feedback.img} alt={feedback.alt} className='feedback-img' />
                <h4 fb-name>{feedback.name}</h4>
                <p fb-des>{feedback.comment}</p>
                <div className='rating'>
                  {feedback.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='Show'></div>

      <Footer />
    </div>
  );
}

export default Home;