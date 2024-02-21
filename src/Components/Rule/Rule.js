import React, { useEffect, useState } from "react";
import "./Rule.css";

function Rule() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fade-in-text");
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-fluid mt-5 p-0 " id="rule">
      <div className="container">
        <div className="fw-bolder text-center rule text-white">RULES</div>
        <p className="text-white text-center para mt-2">
          There are some rules you need to follow..!!!
        </p>
        <div className="row justify-content-center d-flex mt-3">
          <div className="col justify-content-center d-flex mt-2">
            <div
              className="card text-white"
              style={{ width: "18rem", backgroundColor: "#101318" }}
            >
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/icon/team.png"
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "50%" }}
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col justify-content-center d-flex mt-2">
            {" "}
            <div
              className="card text-white"
              style={{ width: "18rem", backgroundColor: "#101318" }}
            >
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/icon/team.png"
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "50%" }}
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col justify-content-center d-flex mt-2">
            {" "}
            <div
              className="card text-white"
              style={{ width: "18rem", backgroundColor: "#101318" }}
            >
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/icon/team.png"
                className="card-img-top mx-auto "
                alt="..."
                style={{ width: "50%" }}
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center d-flex mt-4">
          <img src="" />
          <h1 className="text-center text-white p-3">
            Registration Guidelines
          </h1>
          <div className="row-sm p-5">
            <ul className="text-white">
              <li>
                The participants are expected to complete the registration
                process for the event through the registration link after
                getting a notification mail from VNPS committee. Registration
                link is available in the brochure as well as rule book.
              </li>
              <li>
                Registration fee for Internal(VCET Students) Major Project (BE
                project) is ₹ 200/- and for Minor Project (SE,TE project) is ₹
                150/- and for External(NON-VCET Students) Major Project (BE
                project) is ₹ 200/- and for Minor Project (SE,TE project) is ₹
                200/- which has to be paid through Google Pay or Paytm on the
                given phone numbers or upi id.
              </li>
              <li>
                Complete the registration procedure by updating project details
                and payment details.
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center d-flex mt-4 gap-5">
          <div className="col text-white">
            <div className="row">
              <img />
              <h3 className="text-center">Payment details</h3>
            </div>
            <div className="row p-5">
              <ul>
                <li>Payment should be done by 04th April 2023 itself.</li>
                <li>
                  Track 1:
                  <p>
                    Raj Sanghrajka -
                    <a
                      href="tel:9653278209"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      9653278209
                    </a>
                  </p>
                </li>
                <li>
                  Track 2:
                  <p>
                    Nilesh Jangid -
                    <a
                      href="tel:8454913316"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      8454913316{" "}
                    </a>
                  </p>
                </li>
                <li>
                  Track 3:
                  <p>
                    Abhinav Vishwakarma -
                    <a
                      href="tel:8237177660"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      8237177660
                    </a>
                  </p>
                </li>
                <li>
                  Track 4:
                  <p>
                    Harsh Sawant -
                    <a
                      href="tel: 7798963544"
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      7798963544
                    </a>
                  </p>
                </li>
                <li>
                  Track 5:
                  <p>
                    Hardik Vora -
                    <a
                      href="tel:8600578184 "
                      className="link-offset-2 link-underline link-underline-opacity-0 link-light"
                    >
                      8600578184{" "}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col text-white">
            <div className="row">
              <img />
              <h3 className="text-center">Contacts</h3>
            </div>
            <div className="row p-5">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Track 1{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center">Aditya Hendre:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 996919962"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 996919962
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Chintan Patel:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 9112355745"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9112355745
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Track 2{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center">Shikhar Mehta:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 8080080780"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8080080780
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Nikhil Kargatia:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:   +91 7875856630"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 7875856630
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Track 3{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-5 text-center"> Varun Tatkare :</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 8928008848"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 8928008848
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center"> Siddhant Lokare:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel: +91 9594370381
                          "
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9594370381
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Track 4{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-4 text-center"> Aditi Sawant -</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91  9623265606"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9623265606
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-4 text-center">Vedant Golap:</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 +91 9623265606"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 9623265606
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseFive"
                    >
                      Track 5{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <dt class="col-sm-5 text-center">Deeksha Shetty: </dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:  +91 80974 70510"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 80974 70510
                          </a>
                        </dd>
                      </div>
                      <div className="row">
                        <dt class="col-sm-5 text-center">Gaurang Thakur :</dt>
                        <dd class="col-sm-4 text-center ">
                          <a
                            href="tel:   +91 88052 73185"
                            className="link-offset-2 link-underline link-underline-opacity-0 link-dark "
                          >
                            {" "}
                            +91 88052 73185{" "}
                          </a>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary">
        <div
          id="fade-in-text"
          className={`fade-in-text fw-bolder mt-2 text-center text-white intro ${
            isVisible ? "visible" : ""
          } ${!isScrollingUp ? "scroll-down" : ""}`}
        >
          Prize Pool
        </div>
        <div
          id="fade-in-text"
          className={`fade-in-text fw-bolder mt-2 text-center text-white intro ${
            isVisible ? "visible" : ""
          } ${!isScrollingUp ? "scroll-down" : ""}`}
        >
          ₹2,00,000
        </div>
      </div>
    </div>
  );
}

export default Rule;
