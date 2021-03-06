import React from "react";


const Blog = () => {
    return (
        <>
          {/* <!-- section blog --> */}
		<section id="blog" class="shadow-blue white-bg padding">
			<h3 class="section-title">Recent posts</h3>
			<div class="spacer" data-height="80"></div>

			<div class="row">
				
				<div class="col-md-4">
					{/* <!-- blog item --> */}
					<div class="blog-item">
						<div class="thumb">
							<a href="#">
								<span class="category">Thoughts</span>
							</a>
							<a href="#">
								<img src="https://via.placeholder.com/800x600" alt="blog-title" />
							</a>
						</div>
						<h4 class="mt-4 mb-0"><a href="#">The Truth About Design In 3 Minutes</a></h4>
						<ul class="list-inline meta mb-0 mt-3">
							<li class="list-inline-item">13 March, 2019</li>
							<li class="list-inline-item">Bako Doe</li>
						</ul>
					</div>
				</div>

				<div class="col-md-4">
					{/* <!-- blog item --> */}
					<div class="blog-item">
						<div class="thumb">
							<a href="#">
								<span class="category">Blog</span>
							</a>
							<a href="#">
								<img src="https://via.placeholder.com/800x600" alt="blog-title" />
							</a>
						</div>
						<h4 class="mt-4 mb-0"><a href="#">The Ugly Truth About Design</a></h4>
						<ul class="list-inline meta mb-0 mt-3">
							<li class="list-inline-item">13 March, 2019</li>
							<li class="list-inline-item">Bako Doe</li>
						</ul>
					</div>
				</div>

				<div class="col-md-4">
					{/* <!-- blog item --> */}
					<div class="blog-item">
						<div class="thumb">
							<a href="#">
								<span class="category">Tech</span>
							</a>
							<a href="#">
								<img src="https://via.placeholder.com/800x600" alt="blog-title" />
							</a>
						</div>
						<h4 class="mt-4 mb-0"><a href="#">How To Become Better With UI Design</a></h4>
						<ul class="list-inline meta mb-0 mt-3">
							<li class="list-inline-item">13 March, 2019</li>
							<li class="list-inline-item">Bako Doe</li>
						</ul>
					</div>
				</div>

			</div>

		</section>
        </>
    );
};

export default Blog;