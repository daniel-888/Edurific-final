
import TeamSlider from './../component/teamSlider';

function Team() {
  return (
    <>
      <section className="content-inner">
			<div className="container">
				<div className="section-head style-1 text-center">
					<h2 className="title">Our Team</h2>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TeamSlider/>
					</div>
				</div>
			</div>
		</section>	
    </>
  )
}

export default Team;