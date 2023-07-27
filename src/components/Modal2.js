import React from "react";


function Modal2() {
    return (
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
                aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Workday Scheduler</h2>
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="./images/icons8-schedule.gif" alt="..." />
                    <p class="mb-4">This application functions as a user-friendly daily planner, facilitating effective schedule management. Upon opening the planner, the current day is displayed, and time blocks for standard business hours appear as the user scrolls down. These time blocks are color-coded, distinguishing between past, present, and future events. Users can easily enter events or appointments by clicking into a time block and saving the details with the "save" button, storing them in local storage. This persistence feature ensures that saved events remain intact even after page refreshes, allowing users to review and manage their day seamlessly. By providing such practical features, the daily planner aims to help individuals stay organized, ensuring they can efficiently handle their tasks, meetings, and commitments. Click <a target="_blank" rel="noreferrer" href="https://itzbindi.github.io/Work-Day-Scheduler/">here</a> to see it for yourself!
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
  
  export default Modal2;
  