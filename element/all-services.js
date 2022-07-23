import { useState } from "react";
import Link from "next/link";

function AllServices() {
	const [open, setOpen] = useState("p2")
	return (
		<>
			{/* <!-- Service --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className={`${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-md radius bg-yellow shadow-yellow"> 
							<Link href="artificial-intelligence">
								 	<a className="icon-cell">
									<i className="flaticon-office"></i>
								</a>
							</Link> 
							</div>
							<div className="icon-content">
							<h4 className="dlab-title">ARTIFICIAL INTELLIGENCE</h4>
                  				<p>
                  				Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans.
                  				</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className={`${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-md radius bg-red shadow-red">
							<Link href="coding">
								<a className="icon-cell">
									<i className="flaticon-website"></i>
								</a> 
								</Link> 
							</div>
							<div className="icon-content">
							<h4 className="dlab-title">CODING (WEB)</h4>
                  				<p>
                  				Coding, sometimes called computer programming, is how we communicate with computers. Writing code is like creating a set of instructions.
                  				</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className={`${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-md radius bg-green shadow-green"> 
							<Link href="robotics">
								<a className="icon-cell">
									<i className="flaticon-pie-charts"></i>
								</a> 
							</Link>
							</div>
							<div className="icon-content">
							<h4 className="dlab-title">ROBOTICS</h4>
                  				<p>
                  				Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots.
                  				</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className={`${open === "p4" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-md radius bg-skyblue shadow-skyblue"> 
							<Link href="blockchain">
								<a href="blockchain" className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a> 
							</Link>
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Blockchain</h4>
								<p>Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
						<div className={`${open === "p5" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-md radius bg-orange shadow-orange"> 
							<Link href="data-science">
								<a className="icon-cell">
									<i className="flaticon-line-graph"></i>
								</a> 
							</Link>
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Data Science</h4>
								<p>The domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className={`${open === "p6" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-md radius bg-maroon shadow-maroon"> 
								<a href="javascript:void(0);" className="icon-cell">
									<i className="flaticon-help"></i>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">Coming Soon</h4>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default AllServices;