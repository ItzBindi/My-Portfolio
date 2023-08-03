import React from "react";


function Modal6() {
    return (
        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
                aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Fintrackr</h2>
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="./images/58889546bc2fc2ef3a1860b8.png" alt="..." />
                    <p class="mb-4">Fintrackr is a budget tracking app that allows users to keep track of their subscriptions, utilities, and leisure expenses. Users can create their own personal logins that will assign authentication tokens. Upon logging in, the user will be presented with a dashboard that outlines the purpose of the app, and will pull in your subscription, utilities, and leisure expenses in and a corresponding graph to show how much the user is spending on each category.

                                    Users can then navigate to each specific tab through the navbar on the left by clicking the accordion next to the FinTrackr logo. Each respective tab allows you to add, update, delete subscriptions/utilities/leisure’s and populate the expenses into their own graph below.

                                    Future updates will include: a monthly budget at the top of the dashboard that will deduct money for easy expense from the three respective categories to ensure the user is staying within their budget for that month.   Click <a target="_blank" rel="noreferrer" href="https://dry-citadel-57402-014123fe6f9a.herokuapp.com/">here</a> to see it for yourself!
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
  
  export default Modal6;
  