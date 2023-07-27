import React from "react";


function Modal1() {
    return (
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
                aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Whats That Noise?</h2>
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="./images/hello.png" alt="..." />
                    <p class="mb-4">Welcome to Whats That Noise! Our platform offers a friendly and user-friendly interface for discovering exciting events in various cities. Simply enter a city name in the search bar, and you'll instantly get a list of events scheduled for the current day in that city. On the right-hand side, you'll find detailed information about each event, including the title, date, time, venue, and address. You can save events that interest you, making it easy to revisit them later and plan your activities in advance. Our event filters allow you to refine your search based on event types, such as concerts or sports events. Plus, we provide direct links to ticketing websites, so you can easily purchase tickets for your chosen events. Whether you're a local resident or a traveler seeking memorable experiences, our platform aims to enhance your event discovery and ticket purchasing process, giving you all the necessary details at your fingertips. Click <a target="_blank" rel="noreferrer" href="https://mattchiaro.github.io/whats-that-noise/index.html">here</a> to see it for yourself!</p>
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
  
  export default Modal1;
  