import React from "react";


const Experience = () => {
    return (
        <>
          {/* <!-- section experience --> */}
		<section id="resume" class="shadow-blue white-bg padding">
			<h3 class="section-title">Academic</h3>
			<div class="spacer" data-height="80"></div>

			{/* <!-- timeline --> */}
			<div class="timeline">
			<div class="entry">
					<div class="title">
						<span>2021 - Present</span>
					</div>
					<div class="body">
						<h4 class="mt-0">IBM Data Science Professional Certificate</h4>
						<p>With COURSERA.com</p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>2021</span>
					</div>
					<div class="body">
						<h4 class="mt-0">Python Advance Certification</h4>
						<p>Aptech Garden Center Karachi </p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>2014 - 2017</span>
					</div>
					<div class="body">
						<h4 class="mt-0">ACCP PRO Diploma</h4>
						<p>Aptech Garden Center Karachi </p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>2014</span>
					</div>
					<div class="body">
						<h4 class="mt-0">Matriculation/O-Level</h4>
						<p>German Model School , Karachi</p>
					</div>
				</div>
				
				<span class="timeline-line"></span>
			</div>

			{/* Experience */}

			<h3 class="section-title">Experience</h3>
			<div class="spacer" data-height="80"></div>

			{/* <!-- timeline --> */}
			<div class="timeline">
				<div class="entry">
					<div class="title">
						<span>2019 - Present</span>
					</div>
					<div class="body">
						<h4 class="mt-0">Full-Stack developer</h4>
						<p>Innovocrete (Pvt.) Ltd.</p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>2016 - 2019</span>
					</div>
					<div class="body">
						<h4 class="mt-0">Web developer</h4>
						<p>WebSol Experts</p>
					</div>
				</div>
				<div class="entry">
					<div class="title">
						<span>2015</span>
					</div>
					<div class="body">
						<h4 class="mt-0">Junior Developer</h4>
						<p>IMAK Solution Freelancer</p>
					</div>
				</div>
				<span class="timeline-line"></span>
			</div>
		</section>
        </>
    );
};

export default Experience;