import React from "react";


const Skills = () => {
    return (
        <>
          {/* <!-- section skills --> */}
		<section id="skills" class="shadow-blue white-bg padding">
			<h3 class="section-title">My skills</h3>
			<div class="spacer" data-height="80"></div>
			
			<p class="mb-0">I also have experience in the following areas:</p>

			<div class="row mt-5">

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">React</h4>
							<span class="float-right">80%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="85">
							</div>
						</div>
						{/* <div class="spacer" data-height="50"></div> */}
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">MERN</h4>
							<span class="float-right">70%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90">
							</div>
						</div>
						{/* <div class="spacer" data-height="50"></div> */}
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">Flutter</h4>
							<span class="float-right">50%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90">
							</div>
						</div>
						{/* <div class="spacer" data-height="50"></div> */}
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">MySql / Mongodb</h4>
							<span class="float-right">60%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">
							</div>
						</div>
						{/* <div class="spacer d-md-none d-lg-none" data-height="50"></div> */}
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">Python / Django</h4>
							<span class="float-right">70%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">WordPress</h4>
							<span class="float-right">70%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">Php / Laravel</h4>
							<span class="float-right">60%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					{/* <!-- skill item --> */}
					<div class="skill-item">
						<div class="skill-info clearfix">
							<h4 class="float-left mb-3 mt-0">Data Science / Data Analysis</h4>
							<span class="float-right">20%</span>
						</div>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70">
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
        </>
    );
};

export default Skills;