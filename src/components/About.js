import React from "react";

function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center"> {/* Added text-center class */}
            <p className="lead">
              Hey, my name is Suraj Nair but I go by Bindi! I was born, raised and still live in the suburbs of Chicago
              I have successfully completed Northwestern University's intensive coding bootcamp, equipping me with the
              necessary skills to thrive in the development field. My dedication, reliability, and adeptness at both
              independent and team-oriented work make me a valuable asset. I approach challenges with enthusiasm,
              continuously seeking opportunities for growth and improvement.
            </p>
            <h3>Education:</h3>
            <p className="lead">
              - Certificate in Full Stack Web Development, Northwestern University
            </p>
            <h3>Technical Skills:</h3>
            <p className="lead">
              - Front-End Development: HTML5, CSS3, JavaScript, jQuery, Bootstrap
              <br />
              - Front-End Frameworks: React.js
              <br />
              - Progressive Web Apps Development
              <br />
              - Back-End Development: Express.js, Node.js
              <br />
              - MERN Stack: MongoDB, Express.js, React.js, Node.js
              <br />
              - Database Management: Database Theory, MySQL
              <br />
              - Version Control: Git
              <br />
              - Agile Methodology
              <br />
              - Command Line Proficiency
            </p>
            <p className="lead">
              Having completed the bootcamp, I am excited to apply my expertise as a developer, especially within the Front 
              End Areas , to drive innovation in diverse projects. For more details, please review my resume by clicking <a href='https://drive.google.com/file/d/1gsZBzKR0JN7qfUclamBzJ5N0lnH1dcX-/view?usp=sharing' rel="noreferrer" target="_blank" style={{ color: 'white' }}>here</a>!
            </p>
            {/* Insert your resume button here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
