import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/headerpage";
import Alumni from "../element/alumni"

function Team1() {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Team</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
            
          </div>
        </div>
        <Alumni/> 
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-1 m-b30">
                    <div className="dlab-media dlab-img-effect zoom zoom-slow">
                        <img src="images/team/pic1.png" alt="Prabhakar Nadar CEO" />
                    </div>
                    <div className="dlab-content">
                    <div className="clearfix">
                        <h5 className="dlab-name">
                            <a href="">Prabhakar Nadar</a>
                        </h5>
                        <h6 className="dlab-name">Founder & CEO</h6>
                        <span className="dlab-position"><strong>Warwick Business School</strong></span>
                    </div>
                    <ul className="dlab-social-icon primary-light">
                      <li>
                         <a href="https://www.facebook.com/edurific/" className="fa fa-facebook"></a>
                      </li>
                      <li>
                       <a href="https://www.instagram.com/edurific" className="fa fa-instagram"></a>
                      </li>
                      <li>
                       <a href="https://twitter.com/edurific" className="fa fa-twitter"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="images/team/pic2.png" alt="Head of AI & ROBOTICS" /> 
                </div>
                <div className="dlab-content">
                    <div className="clearfix">
                    <h5 className="dlab-name">
                      <a href="">Sascha Griffiths</a>
                    </h5>
                    <h6 className="dlab-name">Head of AI & ROBOTICS</h6>
                       <span className="dlab-position"> <strong>University of Kent</strong>, Bielefeld University</span>
                    </div>
                    <ul className="dlab-social-icon primary-light">
                    <li>
                         <a href="https://www.facebook.com/edurific/" className="fa fa-facebook"></a>
                     </li>
                     <li>
                       <a href="https://www.instagram.com/edurific" className="fa fa-instagram"></a>
                     </li>
                     <li>
                       <a href="https://twitter.com/edurific" className="fa fa-twitter"></a>
                     </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="images/team/pic3.png" alt="Head of Data Science" />   
                </div>
                <div className="dlab-content">
                <div className="clearfix">
                <h5 className="dlab-name">
                  <a href="">Bhavna Bhaisare</a>
                </h5>
                <h6 className="dlab-name">Head of Data Science</h6>
                <span className="dlab-position"><strong>IIT-Bombay</strong>, Indian School of Business</span>
                </div>
                    <ul className="dlab-social-icon primary-light">
                    <li>
                         <a href="https://www.facebook.com/edurific/" className="fa fa-facebook"></a>
                     </li>
                     <li>
                       <a href="https://www.instagram.com/edurific" className="fa fa-instagram"></a>
                     </li>
                     <li>
                       <a href="https://twitter.com/edurific" className="fa fa-twitter"></a>
                     </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <div className="dlab-team style-1 m-b30">
                    <div className="dlab-media dlab-img-effect zoom zoom-slow">
                        <img src="images/team/pic7.png" alt="Prabhakar Nadar CEO" />
                    </div>
                    <div className="dlab-content">
                    <div className="clearfix">
                        <h5 className="dlab-name">
                            <a href="">Yogesh Mishra</a>
                        </h5>
                        <h6 className="dlab-name">Co-Founder & COO</h6>
                        <span className="dlab-position"><strong>IT Education Specialist</strong></span>
                    </div>
                    <ul className="dlab-social-icon primary-light">
                      <li>
                         <a href="https://www.facebook.com/edurific/" className="fa fa-facebook"></a>
                      </li>
                      <li>
                       <a href="https://www.instagram.com/edurific" className="fa fa-instagram"></a>
                      </li>
                      <li>
                       <a href="https://twitter.com/edurific" className="fa fa-twitter"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="images/team/pic5.png" alt="CIO" />
                </div>
                <div className="dlab-content">
                <div className="clearfix">
                <h5 className="dlab-name">
                  <a href="">Pathik Muni</a>
                </h5>
                <h6 className="dlab-name">CIO</h6>
                <span className="dlab-position"><strong>Stanford University</strong>, William C. University</span>
                </div>
                    <ul className="dlab-social-icon primary-light">
                    <li>
                         <a href="https://www.facebook.com/edurific/" className="fa fa-facebook"></a>
                     </li>
                     <li>
                       <a href="https://www.instagram.com/edurific" className="fa fa-instagram"></a>
                     </li>
                     <li>
                       <a href="https://twitter.com/edurific" className="fa fa-twitter"></a>
                     </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="images/team/pic4.png" alt="Music Curriculum Designer" />
                  </div>
                  <div className="dlab-content">
                  <div className="clearfix">
                  <h5 className="dlab-name">
                    <a href="">Sneha D. Singh</a>
                  </h5>
                  <h6 className="dlab-name">Music Curriculum Designer</h6>
                  <span className="dlab-position"><strong>KM M. Conservatory</strong></span>
                  </div>
                    <ul className="dlab-social-icon primary-light">
                    <li>
                         <a href="https://www.facebook.com/edurific/" className="fa fa-facebook"></a>
                     </li>
                     <li>
                       <a href="https://www.instagram.com/edurific" className="fa fa-instagram"></a>
                     </li>
                     <li>
                       <a href="https://twitter.com/edurific" className="fa fa-twitter"></a>
                     </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="dlab-team style-1 m-b30">
                  <div className="dlab-media dlab-img-effect zoom zoom-slow">
                  <img src="images/team/pic6.png" alt="Director of Curriculum" />
                </div>
                  <div className="dlab-content">
                <div className="clearfix">
                <h5 className="dlab-name">
                    <a href="">Basant Pathak</a>
                </h5>
                  <h6 className="dlab-name">Director of Curriculum</h6>
                  <span className="dlab-position">PhD Research Scholar at<strong> UChicago</strong></span>
                </div>
                    <ul className="dlab-social-icon primary-light">
                    <li>
                         <a href="https://www.facebook.com/edurific/" className="fa fa-facebook"></a>
                     </li>
                     <li>
                       <a href="https://www.instagram.com/edurific" className="fa fa-instagram"></a>
                     </li>
                     <li>
                       <a href="https://twitter.com/edurific" className="fa fa-twitter"></a>
                     </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
        </section>       
      </div>
      <Footer />
    </>
  );
}

export default Team1;
