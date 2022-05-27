import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div>
      <div class="text-center">
        <h2 class="mt-5 mb-5">FAQ</h2>
      </div>
      <section class="container my-5" id="maincontent">
        <section id="accordion">
          <a
            class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
            aria-controls="faq-17"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-17"
            role="button"
          >
            <div class="position-relative">
              <h2 class="h4 m-0 pr-3">How to register?</h2>
              <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i class="fa fa-plus"></i>
              </div>
            </div>
          </a>
          <div class="collapse" id="faq-17">
            <div class="card card-body border-0 p-0">
              <p>
                You can work with us by registering yourself as a tutor or
                student on our website mymegaminds.com.
              </p>
            </div>
          </div>

          <a
            class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
            aria-controls="faq-18"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-18"
            role="button"
          >
            <div class="position-relative">
              <h2 class="h4 m-0 pr-3">How do I know if I am selected?</h2>
              <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i class="fa fa-plus"></i>
              </div>
            </div>
          </a>
          <div class="collapse" id="faq-18">
            <div class="card card-body border-0 p-0">
              <p>
                You will receive a confirmation in 2-3 working days once you
                have successfully submitted the writing test given by Megamind
                team. In case you fail to pass the test you will be notified the
                same through email.
              </p>
              <p></p>
            </div>
          </div>

          <a
            class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
            aria-controls="faq-19"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-19"
            role="button"
          >
            <div class="position-relative">
              <h2 class="h4 m-0 pr-3">How can we give quality education?</h2>
              <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i class="fa fa-plus"></i>
              </div>
            </div>
          </a>

          <div class="collapse" id="faq-19">
            <div class="card card-body border-0 p-0">
              <p>
                We give quality education by knowing the personalised learning
              </p>
              <p></p>
            </div>
          </div>

          <a
            class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
            aria-controls="faq-20"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-20"
            role="button"
          >
            <div class="position-relative">
              <h2 class="h4 m-0 pr-3">
                What is the best email to reach you at?
              </h2>
              <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i class="fa fa-plus"></i>
              </div>
            </div>
          </a>
          <div class="collapse" id="faq-20">
            <div class="card card-body border-0 p-0">
              <p>The best email for any inquiries is email@email.com!</p>
              <p></p>
            </div>
          </div>

          <a
            class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
            aria-controls="faq-21"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-21"
            role="button"
          >
            <div class="position-relative">
              <h2 class="h4 m-0 pr-3">
                Where can I read more about this company?
              </h2>
              <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i class="fa fa-plus"></i>
              </div>
            </div>
          </a>
          <div class="collapse" id="faq-21">
            <div class="card card-body border-0 p-0">
              <p>Lorem ipsum dolor sit!</p>
              <p></p>
            </div>
          </div>

          <a
            class="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
            aria-controls="faq-22"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-22"
            role="button"
          >
            <div class="position-relative">
              <h2 class="h4 m-0 pr-3">What is the best time to call?</h2>
              <div class="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i class="fa fa-plus"></i>
              </div>
            </div>
          </a>
          <div class="collapse" id="faq-22">
            <div class="card card-body border-0 p-0">
              <p>
                The best time to call is 24/7! We are always available to answer
                any questions.
              </p>
              <p></p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Faq;
