import React from "react";


function Footer() {
    return (
        <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Contact Me</h4>
              <p className="lead mb-0">
                snair306@gmail.com
                <br />
    
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a target="_blank" rel="noreferrer" className="btn btn-outline-light btn-social mx-1" href="https://github.com/ItzBindi"><i
                  className="fab fa-fw fa-github"></i></a>
              <a target="_blank" rel="noreferrer" className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/itzbindi/"><i
                  className="fab fa-fw fa-instagram"></i></a>
            </div>
    
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">THANK YOU!</h4>
              <p className="lead mb-0">
                Thank you for visting hope to hear from you soon!
              </p>
            </div>
          </div>
        </div>
      </footer>

      
    );
  }
  
  export default Footer;
  