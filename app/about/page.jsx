import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function page() {
  return (
    <>
      <Header/>
      <div
        className="breadcrumb-area bg-cover shadow dark text-center text-light"
        style={{ backgroundImage: "url(assets/img/banner/10.jpg)" }}
      >
        <div className="breadcrum-shape">
          <img src="assets/img/shape/50.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>About Us</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Start About 
        ============================================= */}
      <div className="about-style-one-area default-padding">
        <div className="shape-animated-left">
          <img src="assets/img/shape/anim-1.png" alt="Image Not Found" />
          <img src="assets/img/shape/anim-2.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="about-style-one col-xl-6 col-lg-5">
              <div className="h4 sub-heading">Empowering Your Digital Presence</div>
              <h2 className="title mb-25">
                About Tricone Digital
              </h2>
              <p>
                At Tricone Digital, we are committed to providing top-notch digital solutions that help businesses thrive in the modern world. Our team of experienced professionals specializes in Web Development, Digital Marketing, Software Development, Mobile Development, and Graphic Design. We work closely with our clients to understand their unique needs and deliver customized solutions that drive results.
              </p>
            </div>
            <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
              <div className="about-thumb">
                <img
                  className="wow fadeInRight"
                  src="assets/img/about/1.jpg"
                  alt="Image Not Found"
                />
                <div className="about-card wow fadeInUp" data-wow-delay="500ms">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-license" />
                      </div>
                      <div className="fun-fact">
                        <div className="counter">
                          <div className="timer" data-to={98} data-speed={2000}>
                            98
                          </div>
                          <div className="operator">%</div>
                        </div>
                        <span className="medium">Client Satisfaction</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-global" />
                      </div>
                      <div className="fun-fact">
                        <div className="counter">
                          <div className="timer" data-to={120} data-speed={2000}>
                            120
                          </div>
                          <div className="operator">+</div>
                        </div>
                        <span className="medium">Projects Completed</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="thumb-shape-bottom wow fadeInDown"
                  data-wow-delay="300ms"
                >
                  <img src="assets/img/shape/anim-3.png" alt="Image Not Found" />
                  <img src="assets/img/shape/anim-4.png" alt="Image Not Found" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="mission-vision">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to empower businesses by delivering innovative and effective digital solutions. We strive to be the trusted partner for our clients, helping them navigate the complexities of the digital landscape and achieve their goals.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-vision">
                <h3>Our Vision</h3>
                <p>
                  We envision a world where businesses of all sizes can leverage the power of digital technologies to grow and succeed. Our goal is to be at the forefront of this transformation, providing our clients with the tools and expertise they need to stay ahead of the competition.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="why-choose-us">
                <h3>Why Choose Us</h3>
                <ul className="check-list">
                  <li>
                    <h4>Expertise</h4>
                    <p>
                      Our team has years of experience and a proven track record of success in the digital space.
                    </p>
                  </li>
                  <li>
                    <h4>Customization</h4>
                    <p>
                      We tailor our services to meet the specific needs of each client, ensuring the best possible outcomes.
                    </p>
                  </li>
                  <li>
                    <h4>Innovation</h4>
                    <p>
                      We stay up-to-date with the latest trends and technologies to provide cutting-edge solutions.
                    </p>
                  </li>
                  <li>
                    <h4>Results</h4>
                    <p>
                      Our focus is on delivering measurable results that help our clients achieve their business objectives.
                    </p>
                  </li>
                  <li>
                    <h4>Customer Service</h4>
                    <p>
                      We pride ourselves on providing exceptional customer service and support throughout every project.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
      {/* Start Process
        ============================================= */}
      <div className="process-style-one-area bg-gray text-center default-padding">
        <div className="large-shape">
          <img src="assets/img/shape/11.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-heading">Our Process</h4>
                <h2 className="title">
                  How We Deliver Excellence
                </h2>
                <div className="devider" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Single Item */}
            <div className="col-lg-4">
              <div className="process-style-one active">
                <div className="thumb">
                  <img src="assets/img/about/3.jpg" alt="Thumb" />
                  <span>01</span>
                </div>
                <h4>Discovery and Planning</h4>
                <p>
                  We begin by understanding your unique needs and goals, ensuring we deliver the best solution for your business.
                </p>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="col-lg-4">
              <div className="process-style-one">
                <div className="thumb">
                  <img src="assets/img/about/6.jpg" alt="Thumb" />
                  <span>02</span>
                </div>
                <h4>Design and Development</h4>
                <p>
                  Our team creates innovative designs and develops robust solutions tailored to your requirements.
                </p>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="col-lg-4">
              <div className="process-style-one">
                <div className="thumb">
                  <img src="assets/img/about/5.jpg" alt="Thumb" />
                  <span>03</span>
                </div>
                <h4>Testing and Deployment</h4>
                <p>
                  We rigorously test our solutions to ensure they meet the highest standards before deployment.
                </p>
              </div>
            </div>
            {/* End Single Item */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
