import { useEffect, useState } from 'react';
import moment from 'moment';
import Header from "../layout/headerpage";
import Footer from "../layout/footer";


function thankyou() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showSemicolon, setShowSemicolon] = useState(false);
	

	useEffect(() => {
		setInterval(() => {
			const now = moment();
			const then = moment('2021-10-27 12:12:12', 'YYYY-MM-DD hh:mm:ss');
			const countdown = moment(then - now);
			setDays(countdown.format('D'));
			setHours(countdown.format('HH'));
			setMinutes(countdown.format('mm'));
			setSeconds(countdown.format('ss'));
		}, 1000);
	}, []);

  return (
    <>
        <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner END --> */}
		<div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white coming-soon overlay-black-dark" style={{"backgroundImage":"url(images/background/bg2.jpg)","backgroundSize":"cover"}}>
                <div className="container">
					<div className="text-center">
						<div className="cs-logo">
							<div className="logo"><img src="images/logo-white.png" alt=""/></div>
						</div>
						<div className="cs-title">Thank you!</div>
						<div className="cs-title"><h2 style={{color:"white"}}>Your Masterclass has been booked successfully!</h2></div>
						
						<ul className="countdown-social">
							<li className="mr-2"><a href="https://en-gb.facebook.com/edurific" className="fa fa-facebook"></a></li>
							<li className="mr-2"><a href="https://twitter.com/edurific" className="fa fa-twitter"></a></li>
							<li className="mr-2"><a href="https://www.linkedin.com/edurific" className="fa fa-linkedin"></a></li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- About Us End --> */}
        </div>
		{/* <!-- contact area END --> */}
    </div>
	<Footer/>
    </>
  )
}

export default thankyou;