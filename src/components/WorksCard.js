import React from "react";


const WorksCard = ({data}) => {
	const { image, title, technology ,link} = data;
    return (
        <>
				
				{/* <!-- portfolio item --> */}
				<div class="col-md-4 col-sm-6 grid-item video">
					<a href={link} target="_blank">
						<div class="portfolio-item">
							<div class="details">
								<h4 class="title">{title}</h4>
								<span class="term">{technology}</span>
							</div>
							<a href={link} target="_blank"><span class="plus-icon">+</span></a>
							<div class="thumb">
								<img src={image} alt={title} />
								<div class="mask"></div>
							</div>
						</div>
					</a>
				</div>

        </>
    );
};

export default WorksCard;