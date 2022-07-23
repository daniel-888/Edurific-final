import Accordion1 from "./accordion";
import Footer from "../layout/footer";
import Header from "../layout/headerpage";
import Link from 'next/link';


function FAQ1() {
  return (
    <>
      <div className="page-content bg-white">
	
		{/* <!-- Faq --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
			<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Frequently Asked Questions</h6>
					<h2 className="title">Have doubts? Let's clear them!</h2>
				</div>
		
				<div className="row">
					<div className="col-lg-8 m-auto wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<Accordion1/>
					</div>
				</div>
			</div>
		</section>
		
		
		
	</div>

    </>
  )
}

export default FAQ1;