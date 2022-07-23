import { useState } from 'react';
import Slider from "react-slick";


function TestimonialSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots:true,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        dots:false,
        infinite:true,
        slidesToScroll:1,
        autoplay:true,
		responsive: [
			
			{
			  breakpoint: 1320,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
		]	
	};
const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div
          className="owl-prev"
          onClick={() => asd.slickPrev()}
        >
          <i className="fa fa-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => asd.slickNext()}
        >
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
    return (
        <>
        <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
            <Slider
                ref={c => setAsd(c)}
                {...settings} 
                
            >
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
					
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “My son is just 7 years old and loves coding these days. He has made his own webpage which was really nice and all thanks goes to Edurific and his Instructor.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic1.png"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Priyanka
                                </strong>
                                <span className="testimonial-position">
                                    Parent{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “Edurific helped me to grow and learn complex concepts in simplest ways. My tutor teaches very well and because of her, I am a champion of coding in my school.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic2.png"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Nirjara Jain
                                </strong>
                                <span className="testimonial-position">
                                    Coding Student{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “I never expected that making a website can be this easy and fun. My instructor explained me the code in the easiest possible way. I just love my tutor.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic3.png"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Jaivanth Munjala
                                </strong>
                                <span className="testimonial-position">
                                    Coding Student{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “The best part about Edurific tutors is the examples they use to explain the concept though my kid is just 9 years old yet he became so fascinated about animations and applications”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic4.png"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Nidhi
                                </strong>
                                <span className="testimonial-position">
                                    Parent{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “My school teachers always scold me for asking questions but My Edurific teacher forced me to ask more and more questions and helped me to find out all the answers.”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic5.png"
                                    alt=""
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Shreyash M Rao
                                </strong>
                                <span className="testimonial-position">
                                    AI Student{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <div
                    className="item wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                >
                    <div className="testimonial-1">
                        <div className="testimonial-text">
                            <p>
                                “I love playing games, but never thought that I could make my own games until I met my Edurific Tutor. He is very kind and intelligent. I wish he could be my school teacher!”
                            </p>
                        </div>
                        <div className="testimonial-detail">
                            <div className="testimonial-pic">
                                <img
                                    src="images/testimonials/pic6.png"
                                    alt="Moulyaa Mohan"
                                />
                            </div>
                            <div className="clearfix">
                                <strong className="testimonial-name">
                                    Moulyaa Mohan 
                                </strong>
                                <span className="testimonial-position">
                                    Game Dev Student{" "}
                                </span>
                                <ul className="star-rating">
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star text-warning"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>        
                    </div>
                </div>
            </Slider>
            {renderArrows()}
            </div>
        </>
    );
}

export default TestimonialSlider;
