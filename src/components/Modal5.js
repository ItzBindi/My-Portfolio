import React from "react";


function Modal5() {
    return (
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
                aria-label="Close"></button></div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Password Generator</h2>
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <img class="img-fluid rounded mb-5" src="./images/lock-icon-29056.png" alt="..." />
                    <p class="mb-4">This project is a password generator designed to enhance account security by creating strong and random passwords. Motivated by concerns about password vulnerability, the application generates passwords that are difficult to crack. By using a combination of lower and upper case letters, numbers, and special characters, the passwords become highly secure. The process of generating passwords involves implementing if statements and loops in JavaScript, utilizing variables, arrays, and functions to ensure the randomness and complexity of the passwords. With this tool, users can confidently safeguard their accounts, as the passwords generated have no personal association, making them highly resilient to unauthorized access.  Click <a target="_blank" href="https://itzbindi.github.io/Password-Generator/">here</a> to see it for yourself!
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
  
  export default Modal5;
  