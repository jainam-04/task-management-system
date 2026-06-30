import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Organize Your Tasks.
            <br />
            Boost Your Productivity.
          </h1>

          <p>
            Tasky helps you manage your daily tasks, stay focused and achieve
            your goals faster.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="task-card">
            <h3>Today's Tasks</h3>

            <div className="task">✓ Complete project</div>

            <div className="task">✓ Learn React</div>

            <div className="task">✓ Workout</div>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Tasky?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>Easy Management</h3>

            <p>Create and organize your tasks easily.</p>
          </div>

          <div className="feature-card">
            <h3>Stay Productive</h3>

            <p>Track your progress and complete goals.</p>
          </div>

          <div className="feature-card">
            <h3>Secure</h3>

            <p>Your account and tasks stay protected.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
