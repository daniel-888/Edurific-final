import AllServices3 from '../element/all-services';
import SEO from '../element/seo';
import Footer3 from '../layout/footer';
import Header3 from '../layout/headerpage';
import Link from 'next/link';


function CourseDetails() {
  return (
    <>
	<SEO
          title="Robotics"
          description="Edurific is a trend setter of Edtech Industry, we launched World's first Artificial Intelligence course for kids. We are pioneer and well known for shaping the future-tech for kids."
        />
    <Header3/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/courses/robotics.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Robotics</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Robotics</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 m-b30">
						<aside className="side-bar sticky-top">
                            <div className="widget_nav_menu m-b40">
							<ul>
									<li><Link href="courses"><a>ALL Courses</a></Link></li>
									<li><Link href="artificial-intelligence"><a>Artificial Intelligence</a></Link></li>
									<li><Link href="coding"><a>Coding (Web)</a></Link> </li>
									<li className="active"><Link href="robotics"><a>Robotics</a></Link></li>
									<li><Link href="blockchain"><a>Blockchain</a></Link></li>
									<li><Link href="datascience"><a>Data Science</a></Link> </li>
								</ul>
							</div>
							<div className="widget widget_bunch_brochures">      		
								<div className="download-file">
								<h4 className="title">Get your brochures</h4>
									<ul>
										<li>
											<a href="https://www.edurific.com/curriculum.pdf" target='_blank'>
												<div className="text">Detailed Curriculum</div>
												<i className="fa fa-download"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
                        </aside>
					</div>
					<div className="col-xl-9 col-lg-8">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/courses/robotics.jpg" alt="robotics"/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Robotics</h3>
								<p>Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans.</p>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<h3>How to make your First Robot ?</h3>
									<p>Edurific's Scientific Curriculum will help you to understand the most complex concepts of Robotics in the most easiest way</p>
									<ul className="list-check style-1 primary">
										<li>Book a free class today</li>
										<li>Join your free class and your instructor will guide you through basics</li>
										<li>Enroll yourself for a Robotics course and get a Robotics Kit of worth $300</li>
										<li>Learn with fun and make your own fully functional Robot and earn the Robotics Developer Certificate!</li>
										<li>Explore even more with Arduino and it's components and play with LEDs</li>
										<li>Awaken the Genius Within!</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<AllServices3/>
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
     <Footer3/>
    </>
  )
}

export default CourseDetails;