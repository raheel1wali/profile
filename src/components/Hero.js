import React from "react";
import RaheelCV from "../assets/images/RaheelUpdatedCv2021.pdf";

const Hero = () => {
    return (
        // <!-- section hero -->
		<section class="hero background parallax shadow-dark d-flex align-items-center" id="home" data-image-src="https://via.placeholder.com/900x600">
			<div class="cta mx-auto mt-2">
				<h1 class="mt-0 mb-4">I’m Raheel Wali<span class="dot"></span></h1>
				<p class="mb-4">I'm full stack developer, passionate about Javascript (React, NodeJS, MERN stack development...) and with a mid experience (django and cloud).</p>
				<a href="#works" class="btn btn-default btn-lg mr-3"><i class="icon-grid"></i>View Portfolio</a>
				<div class="spacer d-md-none d-lg-none d-sm-none" data-height="10"></div>
				<a href={RaheelCV} download  class="btn btn-border-light btn-lg"><i class="icon-cloud-download"></i>Download CV</a>
				{/* <a href="mailto:raheel1wali@gmail.com" class="btn btn-border-light btn-lg"><i class="icon-envelope"></i>Hire me</a> */}
			</div>
			<div class="overlay"></div>
		</section>
    );
};

export default Hero;