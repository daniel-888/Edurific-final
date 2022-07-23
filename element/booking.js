import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
import $ from "jquery";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

function Quote() {
	// const [startDate, setStartDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	/* Spreedsheet Starts */
	// Config variables
	const SPREADSHEET_ID = "1D-2-ufnkoEDKsQ7rxh43p4n6NOkvXSRQi4DdMhvVvoE";
	const SHEET_ID = "0";
	const CLIENT_EMAIL = "edurific@numeric-region-265214.iam.gserviceaccount.com";
	const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCd6wjHLSSYOXNK\n4rWOK/jXPHyMefzgiDJYjHUKxKPMEXuScdO0AEPx4dJXVawh3I9KlT6BScUOZvmH\nECpt9CzSbTBM+HWA7ng49ulh37WOdC21lZ9NBUlpl6nNGeBQE8aHeozCUCuMmOIh\nwUv87vHZDLkhySoT6/UzCzC3clDa8Ceom8pie0R4m2DqRbL7g79gGqLiqAXY/sgl\n2p73aPO2j6vz7zJrnytz8XvRYKDurv1OygS8zf9V8sw5+gv3JmJFJE1BuGbFlNmh\nbI/3R+DFk308qUJxaPzvafPG9PF+uEXQCHazsYypU/zBYz+lFpDpmfmVpo/9xmkw\nzhb1F+mrAgMBAAECggEADOFqVmCivv3UnxONznpcsiWfXQ/oJeJGBP3z3/x5BcCZ\nTTEWnPR2lkiekPwObbahQ2qX7hC3z3xrtu4FH/HOJB2+1lBfuTP6P184WwDVvLhS\nMCDznOMlAUVbFr0ZFD8ArvU6fPDwFGg17Z3oFknhFRyaDxzq3zQcTF0JzLS4zpqu\nEL4J3kXZv6/Y1EHHyoNbFyACqWnOuXGe54IbaMGmdc+4mo0dYM6q+o0Ay9W77OW9\ntOvIYQKsqagpO/MQP5Y0+ah2UGWjRc92c91vsjUpiXxIea8weQqEsNYhmVrA5T2C\n+sy1X2u7FYn0T4H39BmZ0Xw/8bvk341SwGG0OxcyeQKBgQDeskChmpYogeBKy0k3\n0QICitCED7VFdTTW8Mz0zcdoADsntVOPx/swFwPvMYNIXD2pcLC/KwNqvkVT094H\nIbi7ZZw0MVpFweIH4PCkTA1tCZgRUbAFrq2GeQyAyz84MfoK2uqWMoTQ/PDEO1Ja\nPqbuC3Thi+gWZ4SEzMuhMDKXaQKBgQC1iM0P6R7jbU3ARZragKGanbs/ogFgJCxj\nkG2qaJrCQvoB0zPV4tSHh1wpCx1QyJNA0r/GBbt2beziBEEf7sPBpottemZuDJhM\nmZQBtzUyQrUYiqhLYVjL9E1iiJBJBSzAagJOvi6+iK7lODTKxQSITuaBChAlwbuX\nikbFU1OJ8wKBgHnEqBh1SaPumDDthSSTEXFIbAm5+Rl4pCLfWoKFPoK8lZv5xy44\nYD4EZ69TuIBJh6Htr4doQp8MWSYkFCR8KOG3Brl3PvAjuq8qLQr5VuIHO/JEY2ZI\nBDQiXlbSS8gzc5CZ8WmdSAhqNlBmS3pzBZ3l/8wQTyBpDAn9XV7O1ur5AoGAWRcJ\nJEzRNuX2qWy/gYptRPcx5Rm5uRgnnLlNyLrLcJj0Hx8qqkZG7Th190KYIYQ+GCsV\nqLY5ePabsZRK7cP82DXG6XSPfmS5/aXFaE4kUkVAoQmzbEMbFAUSUVAaF2vtuYSN\nG13kjOeBhcbeycCE5+xo3V017YG1cbqP3tl0/xcCgYBnbE3t1fEITCrGEPlAZ+4s\nV5jBnUqd8OMQbg6pKtGuOR2fJIWbxjVtLM9kPKKUxKGNn2bVHTQgvyNrRJJQG5CF\nKrtRCX2Ue5nTJ67lOl3pcost2jzcXxNnKo+B/9X6z5CYNCtZSSXhZh3Bpyv93r2o\nYmQz1P+luN1dELKrroa10Q==\n-----END PRIVATE KEY-----\n";

	const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

	const appendSpreadsheet = async (row) => {
	try {
		await doc.useServiceAccountAuth({
		client_email: CLIENT_EMAIL,
		private_key: PRIVATE_KEY,
		});
		// loads document properties and worksheets
		await doc.loadInfo();

		const sheet = doc.sheetsById[SHEET_ID];
		const result = await sheet.addRow(row);
	} catch (e) {
		console.error('Error: ', e);
	}
	}; 
	const router = useRouter();
	const route = "thankyou";
	function bookNow(e) {
		e.preventDefault();
		const course = $('select[name=course]').val();
		const parent_name = $('input[name=dzName]').val();
		const kid_name = $('input[name=dzKidName]').val();
		const email = $('input[name=dzEmail]').val();
		const phone_number = $('input[name=phone]').val();
		const date = $('input[name=date]').val();
		const timing = $('select[name=timing]').val();
		const newRow = { "Course": course, "Parent's Name": parent_name, "Kid's Name": kid_name, "Email": email, "Phone Number": '"'+phone_number+'"', "Date": date,"Timings": timing };
		appendSpreadsheet(newRow);
		// alert("We've received your request and we'll get back to you shortly.");
		router.push("/" + route)
	}
	/* Spreedsheet Ends */

	return (
		<>
			<section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div className="section-head style-1">
								<h4 className="sub-title bgl-primary m-b20 text-primary">Free Trial Class</h4>
								<h1 className="title">Book Your Slot!</h1>
							</div>
							<form className="dlab-form dzForm" /* method="POST" */ action="#" onSubmit={bookNow}>
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
								<div className="col-sm-12">
										<div className="input-group">
											
											<select name="course"/* name="dzOther[choose_service]" */ className="form-control" required>
												<option>Select Course</option>
												<option value="Coding">Coding</option>
												<option value="AI">Artificial Intelligence</option>
												<option value="Robotics">Robotics</option>
												<option value="Vocals">Vocals</option>
												<option value="Guitar">Guitar</option>
											</select>
										</div>
									</div>
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
											<input name="dzKidName"/* name="dzOther[last_name]" */ type="text" className="form-control" required placeholder="Kid's Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope"></i></span>
											</div>
											<input name="dzEmail" type="email" required className="form-control" placeholder="Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-phone"></i></span>
											</div>
											<input name="phone"/* name="dzOther[phone]" */ type="text" required className="form-control" placeholder="Phone No." pattern="[0-9]{1}[0-9]{9,10}"/>
										</div>
									</div>
									
									<div className="col-sm-6">
										<div className="input-group">
											
											<DatePicker name="date"/* name="dzOther[choose_service]" */ className="form-control" dateFormat="yyyy-MM-dd" placeholderText="Date" selected={startDate} onChange={(date) => setStartDate(date)} />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											
											<select name="timing"/* name="dzOther[choose_service]" */ className="form-control" required>
												<option>Timings</option>
												<option value="3-4 PM">3-4 PM</option>
												<option value="4-5 PM">4-5 PM</option>
												<option value="5-6 PM">5-6 PM</option>
												<option value="6-7 PM">6-7 PM</option>
												<option value="7-8 PM">7-8 PM</option>
												<option value="8-9 PM">8-9 PM</option>
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