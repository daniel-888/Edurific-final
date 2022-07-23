import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Quote() {

	const [startdate, setStartDate] = useState(new Date());


	return (
		<>
			<section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div className="section-head style-1">
								<h4 className="sub-title bgl-primary m-b20 text-primary">Free Trail Class</h4>
								<h1 className="title">Book Your Slot!</h1>
							</div>
							<form className="dlab-form dzForm" method="POST" action="script/contact.php">
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzName" type="text" required className="form-control" placeholder="Parent's Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzOther[last_name]" type="text" className="form-control" required placeholder="Kid's Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope"></i></span>
											</div>
											<input name="dzEmail" type="text" required className="form-control" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-phone"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone No." />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											
											<DatePicker name="dzOther[choose_service]" className="form-control" placeholderText="Date"  onChange={(date) => setStartDate(date)} />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											
											<select name="dzOther[choose_service]" className="form-control" required>
												<option selected>Timings</option>
												<option value="1">3-4 PM</option>
												<option value="2">4-5 PM</option>
												<option value="3">5-6 PM</option>
												<option value="3">6-7 PM</option>
												<option value="3">7-8 PM</option>
												<option value="3">8-9 PM</option>
											</select>
										</div>
									</div>
									
									<div className="col-sm-12 mt-2">
										{/*<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Submit Now</button>*/}
										<button className="btn btn-corner gradient btn-primary d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10" aria-disabled></i>Book Now</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
								<img className="move-1" src="images/move/pic1.png" alt=""/>
								<img className="move-2" src="images/move/pic2.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Quote;