import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/about/img4.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">CEO's note</h6>
                              <h2 className="title">Where Passion Meets Ambition!</h2>
                          </div>
                          <p>Edurific is a global online education platform specialising in the development of kids` specific AI, Robotics and Coding curriculum. After years of research, our team of best IITians, Ph.D.s and Research Scholars globally have crafted the perfect curriculum. Edurific offers best-in-class domain-specific courses in the computer science domain which are an extremely effective and scientific curriculum for each grade i.e 1st to 12th, based on Spaced practice and Bloom's Taxonomy.</p>
                         {/* <p className="m-b30">We are proud to be the first company in the Indian industry to offer AI courses. </p> */}
                          <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">Prabhakar Nadar-CEO</h4>
                         <Link href="/demo-booking"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Book Your Free 1hr Class Now!</a></Link> 
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;