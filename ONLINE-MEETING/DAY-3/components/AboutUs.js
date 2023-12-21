import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>MEETOPIA</h1>
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <h2>Passion and Innovation:</h2>
        <p>
          Meetopia is the result of a blend of passion and innovation. As the sole creator behind this platform,
          I am committed to delivering a user-friendly and effective solution for scheduling and managing online meetings.
          Innovation is at the core of Meetopia's design, aiming to simplify the coordination of meetings for busy professionals
          and remote teams.
        </p>
        <h2>Dedication to User-Friendly Experience:</h2>
        <p>
          At Meetopia, our dedication is to streamline the process of coordinating meetings, catering to the needs of both busy
          professionals and remote teams. As the sole creator, my goal is to enhance your productivity by making the scheduling
          of meetings a straightforward and enjoyable task.
        </p>
      </section>
      <section className="contact-section">
        <h1>Contact Me</h1>
        <p>
          I'm always here to assist you. If you have any questions, feedback, or suggestions, please feel free to
          reach out.
        </p>
        <p>
          Email: <a href="mailto:meetopia@gmail.com">meetopia@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
