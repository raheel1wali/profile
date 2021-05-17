import React from "react";
import WorkCard from './WorksCard'
import { PROTFOLIO_DATA } from "../data/index";

const Works = () => {
    return (
        <>
          {/* <!-- section works --> */}
		<section id="works" class="shadow-blue white-bg padding">
			<h3 class="section-title">Portfolio</h3>
			<div class="spacer" data-height="80"></div>

			{/* <!-- portfolio filter (desktop) --> */}
			<ul class="portfolio-filter list-inline">
				<li class="current list-inline-item" data-filter="*">All Projects</li>
				{/* <li class="list-inline-item" data-filter=".branding">Branding</li>
				<li class="list-inline-item" data-filter=".creative">Creative</li>
				<li class="list-inline-item" data-filter=".design">Design</li>
				<li class="list-inline-item" data-filter=".video">Video</li> */}
			</ul>

			{/* <!-- portfolio filter (mobile) --> */}
			{/* <div class="pf-filter-wrapper mb-4">
				<select class="portfolio-filter-mobile">
					<option value="*">Everything</option>
					<option value=".creative">Creative</option>
					<option value=".video">Video</option>
					<option value=".design">Design</option>
					<option value=".branding">Branding</option>
				</select>
			</div> */}

			{/* <!-- portolio wrapper --> */}
			<div class="row portfolio-wrapper">
				
			{PROTFOLIO_DATA.map((work, index) => (
            <WorkCard key={index} data={work} />
          	))}

			</div>
			
			{/* <!-- more button --> */}
			{/* <div class="load-more text-center mt-4">
				<a href="javascript:" class="btn btn-default"><i class="fas fa-circle-notch"></i> Load more</a>
			
				<ul class="portfolio-pagination list-inline d-none">
					<li class="list-inline-item">1</li>
					<li class="list-inline-item"><a href="works-2.html">2</a></li>
				</ul>
			</div> */}
		</section>
        </>
    );
};

export default Works;