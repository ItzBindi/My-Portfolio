import React from "react";


function Modal3() {
    return (
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
                aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Weather Dashboard</h2>
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="./images/weather-icon.webp" alt="..." />
                    <p class="mb-4">Explore the world with our Weather Dashboard! Enter any city, and instantly get the current weather and a 5-day forecast at your fingertips. Stay informed and plan ahead with ease. Simple, quick, and accurate weather updates for you. Click <a target="_blank" href="https://itzbindi.github.io/Weather-Dashboard/">here</a> to see it for yourself!
                    </p>
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-xmark fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal3;
  