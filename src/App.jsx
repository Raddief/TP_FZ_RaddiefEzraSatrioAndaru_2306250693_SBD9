import React, { useState, useEffect } from 'react';
import './App.css';
import ZZZLogo from './assets/zenlogo.svg'
import TwitterIcon from './assets/twitterlogo.svg'
import InstagramIcon from './assets/instagramlogo.svg'
import YoutubeIcon from './assets/youtubelogo.svg'
import FooterBg from './assets/footer.png'
import anby from './assets/anby.mp4';

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "VIVIAN BANSHEE",
      image: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2025/04/26/98205622/003418fb427e744e39cc2eb75de361c0_5637852736672509162.png?x-oss-process=image%2Fformat%2Cwebp",
    },
    {
      userId: 1,
      id: 2,
      title: "TRIGGER",
      image: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2025/04/26/98205622/f21ec8b5fe4dbddc7972ed6aa2832dea_8520486229445562477.png?x-oss-process=image%2Fformat%2Cwebp",
    },
    {
      userId: 1,
      id: 3,
      title: "PIPER WHEEL",
      image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/07/04/028b005db3713df02fec8d34a7512e47_8807867804189555738.png?x-oss-process=image%2Fformat%2Cwebp",
    },
    {
      userId: 1,
      id: 4,
      title: "ELLEN JOE",
      image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/07/04/a9a9d0aa8c7220885d841c76405e8267_5664538663660541361.png?x-oss-process=image%2Fformat%2Cwebp",
    },
    {
      userId: 1,
      id: 5,
      title: "SOLDIER 0 ANBY",
      image: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2025/03/13/98205622/83ebaae5948e57560985b65f5ba5232c_5062006447402557313.png?x-oss-process=image%2Fformat%2Cwebp",
    },
  ],
};

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      alert(`Count is now ${count} and it's divisible by 10!`);
    }
  }, [count]);

  const increment = () => setCount(count + 1);
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const reset = () => setCount(0);

  return (
    <div className="app-wrapper">
      <video className="background-video" autoPlay loop muted>  
        <source src={anby} type="video/mp4" /> 
      </video>
      
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-menu">
          <h1 className="navbar-brand">(Raddief Ezra Satrio Andaru|SBD9) z · z · z</h1>
          <a href="#" className="navbar-link">Homepage</a>
          <a href="#" className="navbar-link">Characters</a>
          <a href="#" className="navbar-link">News & Info</a>
          <a href="#" className="navbar-link">Background</a>
        </div>
        <a className="logo">
          <img 
            src={ZZZLogo} 
            alt="ZZZ Logo" 
            className="logo-image" 
          /> 
        </a>
      </nav>
      
      <div className="container">
        {/* Card Grid */}
        <div className="card-grid">
          {response.results.map(item => (
            <div key={item.id} className="card-container">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>
              <div className="card-info">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-body">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Demo */}
        <div className="counter-container">
          <h2 className="counter-title">Counter: {count}</h2>
          <div className="counter-buttons">
            <button onClick={increment} className="button button-increase">+</button>
            <button 
              onClick={decrement} 
              className="button button-decrease"
              disabled={count === 0} 
            >
              -
            </button>
            <button onClick={reset} className="button button-reset">Reset</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ backgroundImage: `url(${FooterBg})` }}>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://twitter.com/ZZZ_EN" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/zzz.official.en/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@ZZZ_Official" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={YoutubeIcon} alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;