function About() {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">Hey my name is Suraj Nair but I go by Bindi! I was born and raised in the suburbs of chicago.
                I grew up a huge football and basketball fan! My favorite teams are the Bears and the Suns! I also have a
                love for music with my top artists being J Cole, Drake, and Lil wayne. I also am an avid gamer!
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">Currently I am pursuing becoming a developer and am studying at Northwestern University! I am
                enrolled in their coding bootcamp with hopes of at the end being able to land a career in the development
                field that I can thrive in! I am a realy hard worker, reliable, can work very well independently or with a
                team, and I am very friendly. I am always looking to improve and am always willing to learn new things!
                Check out my resume by hitting the button below!
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a id="resume" className="btn btn-xl btn-outline-light"
              href="https://drive.google.com/file/d/1y7YLCupWDODn7GgWMB5-jDFC9ZRk6A4V/view?usp=sharing" target="_blank">
              <i className="fas fa-download me-2"></i>
              Download My Resume!
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  