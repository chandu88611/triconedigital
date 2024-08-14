import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
   
<Header/>
    <div
      className="banner-style-four-area text-light bg-cover"
      style={{ backgroundImage: "url(assets/img/shape/banner-2.jpg)" }}
    >
      {/* Single Item */}
      <div className="banner-style-four">
        <div className="container">
          <div className="content">
            <div className="row align-center">
              <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                <div className="information">
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="400ms"
                  >
                    Grow business <br />
                    with Our <span className="relative">Service</span>
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="900ms"
                    data-wow-duration="400ms"
                  >
                   Empowering Your Growth with Top-notch Digital Marketing, Web Development, and Software Solutions
                  </p>
                  <div
                    className="button mt-30 wow fadeInUp"
                    data-wow-delay="1200ms"
                    data-wow-duration="400ms"
                  >
                    <a className="btn-animation" href="#">
                      <i className="fas fa-arrow-right" />{" "}
                      <span>Our Services</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <div className="thumb">
                  <img src="assets/img/illustration/7.png" alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Item */}
    </div>
    {/* End Banner */}
    {/* Start Feature
      ============================================= */}
    <div
      className="feature-style-two-area default-padding bottom-less bg-gray"
      style={{ backgroundImage: "url(assets/img/shape/45.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading secondary text-center">
              <h4 className="sub-heading">Our Features</h4>
              <h2 className="title">We Are Better Why</h2>
              <div className="devider" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row relative">
    {/* Single item */}
    <div className="col-lg-4 col-md-6 mb-30">
      <div className="feature-style-two">
        <img src="assets/img/web.webp" alt="Web Development Icon" />
        <h4>
          <a href="#">Web Development</a>
        </h4>
        <p>
          We provide cutting-edge web development services to help your business establish a robust online presence.
        </p>
      </div>
    </div>
    {/* End Single item */}
    {/* Single item */}
    <div className="col-lg-4 col-md-6 mb-30">
      <div className="feature-style-two">
        <img src="assets/img/digital.webp" alt="Digital Marketing Icon" />
        <h4>
          <a href="#">Digital Marketing</a>
        </h4>
        <p>
          Our digital marketing strategies are designed to boost your online visibility and drive targeted traffic to your site.
        </p>
      </div>
    </div>
    {/* End Single item */}
    {/* Single item */}
    <div className="col-lg-4 col-md-6 mb-30">
      <div className="feature-style-two">
        <img src="assets/img/software.webp" alt="Software Development Icon" />
        <h4>
          <a href="#">Software Development</a>
        </h4>
        <p>
          We offer custom software development solutions tailored to meet your specific business requirements.
        </p>
      </div>
    </div>
    {/* End Single item */}
    {/* Single item */}
    <div className="col-lg-4 col-md-6 mb-30">
      <div className="feature-style-two">
        <img src="assets/img/mobile.webp" alt="Mobile Development Icon" />
        <h4>
          <a href="#">Mobile Development</a>
        </h4>
        <p>
          Our mobile development services ensure your business reaches customers on their favorite devices with seamless applications.
        </p>
      </div>
    </div>
    {/* End Single item */}
    {/* Single item */}
    <div className="col-lg-4 col-md-6 mb-30">
      <div className="feature-style-two">
        <img src="assets/img/graphic.webp" alt="Graphic Design Icon" />
        <h4>
          <a href="#">Graphic Design</a>
        </h4>
        <p>
          Our graphic design services create visually appealing and brand-aligned designs that captivate your audience.
        </p>
      </div>
    </div>
    {/* End Single item */}
    <div className="shape-right-bottom">
      <img src="assets/img/shape/40.png" alt="Image Not found" />
    </div>
  </div>
</div>

    </div>
    {/* End Feature */}
    {/* Start About 
      ============================================= */}
    <div className="about-style-three-area default-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-5">
            <div className="about-style-three">
              <div className="thumb">
                <img
                  className="wow fadeInLeft"
                  src="assets/img/illustration/16.png"
                  alt="Image not found"
                />
                <div className="sub-item">
                  <img
                    className="wow fadeInUp"
                    data-wow-delay="500ms"
                    src="assets/img/illustration/v.png"
                    alt="Image not found"
                  />
                  <img
                    className="wow fadeInRight"
                    data-wow-delay="1000ms"
                    src="assets/img/illustration/v2.png"
                    alt="Image not found"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
  <div className="about-style-three">
    <h4 className="sub-heading secondary">Why Choose Us</h4>
    <h2 className="heading">
      Discover the Benefits of Our Expert Services
    </h2>
    <div className="list-item-style-two wow fadeInUp">
      <div className="number">01</div>
      <div className="info">
        <h4>Web Development Excellence</h4>
        <p>
          Our team crafts highly functional, responsive, and visually appealing websites that enhance user experience and drive engagement. With cutting-edge technology and design, we help your business stand out in the digital landscape.
        </p>
      </div>
    </div>
    <div
      className="list-item-style-two wow fadeInUp"
      data-wow-delay="500ms"
    >
      <div className="number">02</div>
      <div className="info">
        <h4>Effective Digital Marketing</h4>
        <p>
          We implement data-driven digital marketing strategies to increase your online visibility, attract more traffic, and convert visitors into loyal customers. Our comprehensive approach ensures maximum ROI for your marketing efforts.
        </p>
      </div>
    </div>
    <div
      className="list-item-style-two wow fadeInUp"
      data-wow-delay="1000ms"
    >
      <div className="number">03</div>
      <div className="info">
        <h4>Custom Software Solutions</h4>
        <p>
          Our custom software development services are tailored to meet your unique business needs, streamline operations, and enhance productivity. We deliver reliable and scalable solutions that drive business growth.
        </p>
      </div>
    </div>
    <div
      className="list-item-style-two wow fadeInUp"
      data-wow-delay="1500ms"
    >
      <div className="number">04</div>
      <div className="info">
        <h4>Mobile Development Mastery</h4>
        <p>
          We create user-friendly mobile applications that offer seamless performance across all devices. Our expertise ensures your app provides a compelling user experience, boosting customer engagement and satisfaction.
        </p>
      </div>
    </div>
    <div
      className="list-item-style-two wow fadeInUp"
      data-wow-delay="2000ms"
    >
      <div className="number">05</div>
      <div className="info">
        <h4>Innovative Graphic Design</h4>
        <p>
          Our creative graphic design services help you establish a strong brand identity. We produce visually stunning designs that communicate your brand message effectively and leave a lasting impression on your audience.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
    {/* End About */}
    {/* Start Partner 
      ============================================= */}
    <div className="partner-style-two-area overflow-hidden bg-gradient-secondary text-light default-padding">
      <div
        className="partner-shape"
        style={{ backgroundImage: "url(assets/img/shape/map-light.png)" }}
      />
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-4">
            <div className="partner-heading">
              <h3>
                Thrustede by <br /> <strong>Multiple</strong> global brands
              </h3>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="clients-style-two-carousel swiper">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Single Item */}
                <div className="swiper-slide">
                  <img src="assets/img/logo/06.png" alt="Thumb" />
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="swiper-slide">
                  <img src="assets/img/logo/07.png" alt="Thumb" />
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="swiper-slide">
                  <img src="assets/img/logo/08.png" alt="Thumb" />
                </div>
                {/* End Single Item */}
                {/* Single Item */}
                <div className="swiper-slide">
                  <img src="assets/img/logo/09.png" alt="Thumb" />
                </div>
                {/* End Single Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Partner */}
    {/* Start Marketing Types
      ============================================= */}
 <div className="marketing-types-area text-center default-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="marketing-types">
          <div className="content">
            <h2>
              <strong>Tricone Digital</strong> is providing a comprehensive range of services.
            </h2>
            <ul className="types-list">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Mobile Development</li>
              <li>Graphic Design</li>
              <li >Software Dev</li>
            </ul>
          </div>
          <div className="icon">
            <i className="fas fa-laptop-code" />
            <i className="fas fa-bullhorn" />
            <i className="fas fa-code" />
            <i className="fas fa-mobile-alt" />
            <i className="fas fa-paint-brush" />
          </div>
          <div className="blur-shape" />
        </div>
      </div>
    </div>
  </div>
</div>


    <div
      className="request-call-back-area secondary text-light default-padding"
      style={{ backgroundImage: "url(assets/img/banner/1.jpg)" }}
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6">
            <h2 className="title">
              Check your website’s <br /> SEO score free!
            </h2>
            <form className="seo-form mt-30" action="#">
              <div className="input">
                <div className="row">
                  <div className="col-lg-5 col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Web URL"
                        type="url"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Email Address"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit">Check</button>
            </form>
          </div>
          <div className="col-lg-6 text-end">
            <div className="achivement-counter">
              <ul>
                <li>
                  <div className="icon">
                    <i className="flaticon-stats" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to={500} data-speed={2000}>
                        500
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">
                      Website rank first over 30 years
                    </span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-group" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to={90} data-speed={2000}>
                        90
                      </div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">
                      Visitor growth within very short time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Check SEO  */}
    {/* Start Project 
      ============================================= */}
    <div className="project-style-three-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading secondary text-center">
              <h4 className="sub-heading">Recent Gallery</h4>
              <h2 className="title">
                Latest &amp; most recent <br /> completed projects
              </h2>
              <div className="devider" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 gallery-content">
              <div className="magnific-mix-gallery gallery-masonary">
                <div id="gallery-masonary" className="gallery-items colums-3">
                  {/* Single Item */}
                  <div className="gallery-item">
                    <div className="gallery-style-three">
                      <div className="thumb">
                        <img src="assets/img/gallery/7.jpg" alt="Thumb" />
                        <a
                          href="assets/img/gallery/7.jpg"
                          className="item popup-gallery"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="overlay">
                        <div className="content">
                          <span>Sales, Web</span>
                          <h4>
                            <a href="#">Lead management Software</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="gallery-item">
                    <div className="gallery-style-three">
                      <div className="thumb">
                        <img src="assets/img/gallery/8.jpg" alt="Thumb" />
                        <a
                          href="assets/img/gallery/8.jpg"
                          className="item popup-gallery"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="overlay">
                        <div className="content">
                          <span>ERP</span>
                          <h4>
                            <a href="#">Ecommerce site</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="gallery-item">
                    <div className="gallery-style-three">
                      <div className="thumb">
                        <img src="assets/img/gallery/9.jpg" alt="Thumb" />
                        <a
                          href="assets/img/gallery/9.jpg"
                          className="item popup-gallery"
                        >
                          <i className="fas fa-plus" />
                        </a>
                      </div>
                      <div className="overlay">
                        <div className="content">
                          <span>School</span>
                          <h4>
                            <a href="#">School Management Software</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                </div>
              </div>
              {/* <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="load-more-info secondary text-center mt-60">
                    <p>
                      Are you interested to show more portfolios?{" "}
                      <a href="#">Load More</a>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Project */}
    {/* Start Testimonials 
      ============================================= */}
    <div className="testimonial-style-one-area secondary bg-gray default-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-4">
            <div className="testimonial-thumb">
              <div className="thumb-item">
                <img src="assets/img/illustration/5.png" alt="illustration" />
                <div className="mini-shape">
                  <img src="assets/img/shape/19-blue.png" alt="illustration" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="testimonial-carousel swiper">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Single item */}
                <div className="swiper-slide">
                  <div className="testimonial-style-one">
                    <div className="item">
                      <div className="content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h2>The best service ever</h2>
                        <p>
                        Tricone Digital transformed our online presence! Their web development team built a stunning and user-friendly website that perfectly represents our brand. The digital marketing strategies they implemented have significantly increased our traffic and conversions. We couldn't be happier with the results and highly recommend their services.
                        </p>
                      </div>
                      <div className="provider">
                        <i className="flaticon-quote" />
                        <div className="info">
                          <h4>Praveen Sompoura</h4>
                          <span>Temple Constructor</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single item */}
                {/* Single item */}
                <div className="swiper-slide">
                  <div className="testimonial-style-one">
                    <div className="item">
                      <div className="content">
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h2>Awesome Business opportunities</h2>
                        <p>
                          “Consultation discover apartments. ndulgence off under
                          folly death wrote cause her way spite. Plan upon yet way
                          get cold spot its week. Almost do am or limits hearts.
                          Resolve parties but why she shewing. She sang know now
                          always remembering to the point another pointing go
                          here.”
                        </p>
                      </div>
                      <div className="provider">
                        <i className="flaticon-quote" />
                        <div className="info">
                          <h4>Anthom Bu Spar</h4>
                          <span>Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

 <Footer/>
  </>
  
  );
}
