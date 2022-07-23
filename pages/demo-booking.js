import Link from "next/link";
import SEO from "../element/seo";
import Quote from "../element/booking";
import Footer from "../layout/footer";
import Header from "../layout/headerpage";


function ContactUs1() {
  return (
    <>
	<SEO
          title="Book a Free Demo Class"
          description="Edurific is a trend setter of Edtech Industry, we launched World's first Artificial Intelligence course for kids. We are pioneer and well known for shaping the future-tech for kids."
        />
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Scheduler</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Booking</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Get A Quote --> */}
		<Quote/>
		
		{/* <!-- Teacher Hiring --> */}
	{/*	<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
					</div>
				</div>
			</div>
		</section>
  */}
		
	</div>
	<Footer/>
    </>
  )
}

export default ContactUs1;