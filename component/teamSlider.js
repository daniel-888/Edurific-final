import Slider from "react-slick";
import Link from "next/link";

function TeamSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1	,
          autoplay: true,
          infinite: true,
          dots: true,
        },
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic1.png" alt="founder and CEO" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h5 className="dlab-name">
                <Link href="our-team"><a>Prabhakar Nadar</a></Link>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/pic2.png" alt="Head of AI & ROBOTICS" /> 
            </div>
            <div className="dlab-content">
              <div className="clearfix">
              <h5 className="dlab-name">
                  <Link href="our-team"><a>Sascha Griffiths</a></Link>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/pic3.png" alt="Head of Data Science" />   
            </div>
            <div className="dlab-content">
              <div className="clearfix">
              <h5 className="dlab-name">
              <Link href="our-team"><a href="team">Bhavna Bhaisare</a></Link>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src="images/team/pic7.png" alt="Co-founder and COO" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h5 className="dlab-name">
                <Link href="our-team"><a>Yogesh Mishra</a></Link>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src="images/team/pic5.png" alt="CIO" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
              <h5 className="dlab-name">
              <Link href="our-team"><a href="team">Pathik Muni</a></Link>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src="images/team/pic4.png" alt="Music Curriculum Designer" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
              <h5 className="dlab-name">
              <Link href="our-team"><a href="team">Sneha D. Singh</a></Link>
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
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">            
                <img src="images/team/pic6.png" alt="Director of Curriculum" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
              <h5 className="dlab-name">
              <Link href="our-team"><a href="team">Basant Pathak</a></Link>
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
        
      </Slider>
    </>
  );
}

export default TeamSlider;
