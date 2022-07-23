import Accordion1 from "../element/accordion";
import Footer from "../layout/footer";
import Header from "../layout/headerpage";
import Link from 'next/link';


function FAQ1() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Frequently Asked Questions</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">FAQs</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Faq --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 m-auto wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<Accordion1/>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Call To action --> */}
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"100%"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary"></h6>
							<h2 className="title">Book a Free Class to experience the wonders of Coding World</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30">
						<a href="/demo-booking" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Book Now</a>
					</div>
				</div>
			</div>
		</section>
		
	</div>
	<Footer/>
    </>
  )
}

export default FAQ1;