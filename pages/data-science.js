import AllServices3 from '../element/all-services';
import SEO from '../element/seo';
import Footer3 from '../layout/footer';
import Header3 from '../layout/headerpage';
import Link from 'next/link';


function CourseDetails() {
  return (
    <>
	<SEO
          title="Data Science"
          description="Edurific is a trend setter of Edtech Industry, we launched World's first Artificial Intelligence course for kids. We are pioneer and well known for shaping the future-tech for kids."
        />
    <Header3/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/courses/ds.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Data Science</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Data Science</li>
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
									<li><Link href="courses"><a>ALL Courses</a></Link> </li>
									<li><Link href="artificial-intelligence"><a>Artificial Intelligence</a></Link></li>
									<li><Link href="coding"><a>Coding (Web)</a></Link> </li>
									<li><Link href="robotics"><a>Robotics</a></Link> </li>
									<li><Link href="blockchain"><a>Blockchain</a></Link> </li>
									<li className="active"><Link href="data-science"><a>Data Science</a></Link> </li>
								</ul>
							</div>
							<div className="widget widget_bunch_brochures">      		
								<div className="download-file">
								<h4 className="title">Get your brochures</h4>
									<ul>
										<li>
											<a href="https://www.edurific.com/curriculum.pdf" target='_blank' >
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
							<img src="images/courses/ds.jpg" alt="data science"/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Data Science</h3>
								<p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.</p>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<h3>How to be a Data Scientist</h3>
									<p>Don't worry, Edurific's Scientific Curriculum will help you to be a Data-Scientist!</p>
									<ul className="list-check style-1 primary">
										<li>Book a free class today</li>
										<li>Join your free class and your instructor will guide you through basics</li>
										<li>Enroll yourself for our Data Science course</li>
										<li>Learn how to create and analize data and it's attributes</li>
										<li>Be an Edurific Certified Data-Scientist and Earn a Certificate!</li>
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