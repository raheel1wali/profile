import React from "react";
import { PROFILE_DATA } from "../data/index";
import RaheelCV from "../assets/images/RaheelUpdatedCv2021.pdf";

const About = () => {
    return (
        // <!-- section about -->
		<section id="about" class="shadow-blue white-bg padding">
			<h3 class="section-title">About Me</h3>
			<div class="spacer" data-height="80"></div>

			<div class="row">
				<div class="col-md-3">
					<img src={PROFILE_DATA[0].image} alt={PROFILE_DATA[0].name}  />
				</div>
				<div class="col-md-9">
					<h2 class="mt-4 mt-md-0 mb-4">Hello,</h2>
					<p class="mb-0">My name is Raheel Wali, I'm a Full-stack developer and holds five years of working experience in web development. I can proficiently work at Single page applications, Javascript libraries and frameworks, Node, WordPress, Django, and building Restful API. I'm also passionate about suggesting creative ideas, design application, and support cloud hostings services such as Google Cloud, Digital Ocean, and Heroku.</p>
					<div class="row my-4">
						<div class="col-md-6">
							<p class="mb-2">Name: <span class="text-dark">Raheel Wali</span></p>
							<p class="mb-2">Birthday: <span class="text-dark">22 April, 1995</span></p>
							<p class="mb-2">Phone: <span class="text-dark">+92 0301-9133388 / 0312-3380821</span></p>
						</div>
						<div class="col-md-6 mt-2 mt-md-0 mt-sm-2">
							<p class="mb-2">Location: <span class="text-dark">Karachi, Pakistan</span></p>
							<p class="mb-0">Email: <span class="text-dark">raheel1wali@gmail.com</span></p>
						</div>
					</div>
					<a href={RaheelCV} download class="btn btn-default mr-3"><i class="icon-cloud-download"></i>Download CV</a>
					<a href="mailto:raheel1wali@gmail.com" class="btn btn-alt mt-2 mt-md-0 mt-xs-2"><i class="icon-envelope"></i>Hire me</a>
				</div>
			</div>
		</section>
    );
};

export default About;