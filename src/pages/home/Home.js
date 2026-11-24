import Header from "../../components/header/Header.jsx";
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="split-container">
        <div className="split-left">
          <h1>Hi, I'm Owen Phillips</h1>
          <p>Undergraduate software engineering student at the University of Nebraska-Lincoln. Interested in web and backend development. You can find my projects and contact information here.</p>
        <div className="hero-buttons mt-4">
          <button className="primary-btn" onClick={() => navigate('/projects')}>Projects</button>
          <button className="secondary-btn" onClick={() => navigate('/contact')}>Contact</button>
        </div>
        </div>
        <div className="split-right">
          <img src="/images/placeholder.jpg" alt="Owen Phillips" />
        </div>
      </div>
    </div>
  );
}

export default Home;