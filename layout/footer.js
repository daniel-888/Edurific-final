import Link from 'next/link';
function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="footer-logo">
								<a href="https://www.edurific.com"><img src="images/logo-white.png" alt=""/></a> 
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-email"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p><span className="fa fa-flag"> +91 8037097097</span><br/><span className="fa fa-flag"> +44 1522458957</span><br/><span className="fa fa-envelope"> hello@edurific.com</span></p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-location"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>Bunglow 36, Madha Bldg SVP Park, Andheri(W) Mumbai, Maharastra</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">About Us</h5>
							<p>Edurific is a global online platform specializing in the development of kids` specific AI, Robotics and Coding curriculum.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://www.facebook.com/edurific/"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/edurific"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/edurific"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><Link href="/"><a href="/">Home</a></Link></li>
								<li><Link href="/about-us"><a>About Us</a></Link></li>
								<li><Link href="/courses"><a>Courses</a></Link></li>
								<li><Link href="/our-team"><a>Team</a></Link></li>
								<li><Link href="/"><a>Blog</a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Domain</h5>
							<ul>
								<li><Link href="/artificial-intelligence"><a>Artificial Intelligence</a></Link></li>
								<li><Link href="/coding"><a>Web Development</a></Link></li>
								<li><Link href="/robotics"><a>Robotics</a></Link></li>
								<li><Link href="/blockchain"><a>Blockchain</a></Link></li>
								<li><Link href="/data-science"><a>Data Science</a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
						   <ul>
								<li><Link href="/faq"><a>FAQs</a></Link></li>
								<li><Link href="/"><a>Projects</a></Link></li>
								<li><Link href="https://privacypolicy.edurific.com/"><a>Privacy Policy</a></Link></li>
								<li><Link href="https://terms.edurific.com/"><a>Terms & Conditions</a></Link></li>
								<li><Link href="/contact-us"><a>Support </a></Link></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-left"> 
						<span className="copyright-text">Copyright © 2022 <a href="https://www.edurific.com/" target="_blank">Edurific Edutech Pvt. Ltd.</a>. All rights reserved.</span> 
					</div>
					<div className="col-sm-6 text-right"> 
						<span className="copyright-text">Made with <i style={{color:"red", fontSize:"18px"}} className="fa fa-heart"></i> in<span style={{fontWeight:"bold"}}> भारत</span> for the world</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;