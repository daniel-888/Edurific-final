import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from "../layout/headerpage";
import SEO from "../element/seo";
import Footer from "../layout/footer";
import Counter from "../element/counter";
import TeamSlider from '../component/teamSlider';
import Testimonial from '../element/testimonial';
import Blog from '../element/blog';
import Link from 'next/link';
import Quote from '../element/quote';

function AboutUs1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
		<SEO
          title="About Us"
          description="Edurific is a trend setter of Edtech Industry, we launched World's first Artificial Intelligence course for kids. We are pioneer and well known for shaping the future-tech for kids."
        />
            <Header />
            <div className="page-content bg-white">
            {/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>About Edurific</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">About us</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- About Us --> */}
		<section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/about/img4.png" className="move-3" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 mb-4">
							<h6 className="sub-title bgl-primary m-b20 text-primary">About Edurific</h6>
							<h2 className="title">Where Passion Meets Ambition!</h2>
						</div>
						<p>"Edurific is on a mission to ensure that every child becomes future ready, and they do not become passive consumers of technology, instead become active participants in the creation process of technology. We help your child with the early building blocks of their personality development by teaching them concepts like "logicial-thinking, problem-solving & creativity" which acts as a confidence booster for them, and it eventually helps them in fully-developed and well-rounded personality"</p>
						<p className="m-b30">We are proud to be the first company in the Indian industry to offer AI courses.</p>
						<h4>Why Choose Us?</h4>
						<div className="row">
							<div className="col-lg-10">
								<ul className="list-arrow primary">
									<li>World's most Scientific Curriculum</li>
									<li>Crafted by IITians, Ph.D.s and Research Scholars</li>
									<li>Lifetime access to learning material</li>
									<li>Multiple Packages</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Counter --> */}
		<Counter/>

		{/* <!-- About Us --> 
		<section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Text</h6>
							<h2 className="title m-b15">Lorem Ipsum Suspendisse euismod eget lacus quis mattis.</h2>
							<p>Suspendisse euismod eget lacus quis mattis. Nunc ut auctor justo, et pulvinar lorem nteger tempor nisi venenatis</p>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
									<div className="icon-bx-sm bg-white"> 
										<a href="javascript:void(0);" className="icon-cell text-primary">
											<i className="flaticon-chat"></i>
										</a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">Lorem Ipsum</h4>
										<p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
									<div className="icon-bx-sm bg-white"> 
										<a href="javascript:void(0);" className="icon-cell text-primary">
											<i className="flaticon-bullhorn"></i>
										</a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">Lorem Ipsum</h4>
										<p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="video-bx style-3">
							<img src="images/video/pic3.jpg" alt=""/>
							<div className="video-btn">
								<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
								
							</div>
						</div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
					</div>
				</div>
			</div>
		</section>
		*/}
		
		{/* <!-- Team --> */}
		<section className="content-inner">
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
					<h2 className="title">Our Best Expertise</h2>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TeamSlider/>
					</div>
				</div>
			</div>
		</section>	
	
		
			
		
		{/*<!-- Request to book demo -->*/ }
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							
							<h2 className="title">Book a free class and experience the wonders of Coding-World</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<a href="/demo-booking" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Book Now</a>
					</div>
				</div>
			</div>
		</section>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs1;
