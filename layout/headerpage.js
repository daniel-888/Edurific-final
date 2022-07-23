
import Link from 'next/link';
import { useState } from 'react';
function Header3() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent mo-left" id="fix-header">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/">
								<a>
									<img className="custom-logo-white" src="images/logo-white.png" alt="" />
									<img className="custom-logo" src="images/logo.png" alt="" />
								</a>
							</Link>
							
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="/demo-booking"><a className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m-r10"></i>Book Your Free 1hr Class Now!</a></Link>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
								<li><Link href="/"><a>Home</a></Link></li>     
								<li><Link href="/about-us"><a>About Us</a></Link></li>
								

                              <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Courses</span><i className="fa fa-chevron-down"></i></a>
                                <ul className="sub-menu">					
                                <li><Link href="/courses"><a>All Courses</a></Link></li>
										<li><Link href="artificial-intelligence"><a>Artificial Intelligence</a></Link></li>
                                        <li><Link href="blockchain"><a>Blockchain</a></Link></li>
                                        <li><Link href="coding"><a>Coding</a></Link></li>
                                        <li><Link href="data-science"><a>Data Science</a></Link></li>
                                        <li><Link href="robotics"><a>Robotics</a></Link></li>
                                    </ul>
                                </li>
    
                                <li><Link href="/"><a>Blog</a></Link></li>
                                <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    <Link href="https://www.facebook.com/edurific"><a className="fa fa-facebook"></a></Link>
                                    <Link href="https://www.twitter.com/edurific"><a className="fa fa-twitter"></a></Link>
                                    <Link href="https://www.linkedin.com/edurific"><a className="fa fa-linkedin"></a></Link>
                                    <Link href="https://www.instagram.com/edurific"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header3;

  