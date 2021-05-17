import React from "react";


const Clients = () => {
    return (
        <>
          {/* <!-- section clients --> */}
		<section id="clients" class="shadow-dark background-blue color-white padding-50">

			{/* <!-- hidden heading for validation --> */}
			<h2 class="d-none">Clients</h2>

			{/* <!-- clients wrapper --> */}
			<div class="clients-wrapper row">
				
				<div class="col-md-3">
					{/* <!-- client item --> */}
					<div class="client-item">
						<div class="inner">
							<img src="https://via.placeholder.com/143x20" alt="client-name" />
						</div>
					</div>
				</div>

				<div class="col-md-3">
					{/* <!-- client item --> */}
					<div class="client-item">
						<div class="inner">
							<img src="https://via.placeholder.com/143x20" alt="client-name" />
						</div>
					</div>
				</div>

				<div class="col-md-3">
					{/* <!-- client item --> */}
					<div class="client-item">
						<div class="inner">
							<img src="https://via.placeholder.com/143x20" alt="client-name" />
						</div>
					</div>
				</div>
				
				<div class="col-md-3">
					{/* <!-- client item --> */}
					<div class="client-item">
						<div class="inner">
							<img src="https://via.placeholder.com/143x20" alt="client-name" />
						</div>
					</div>
				</div>

				<div class="col-md-3">
					{/* <!-- client item --> */}
					<div class="client-item">
						<div class="inner">
							<img src="https://via.placeholder.com/143x20" alt="client-name" />
						</div>
					</div>
				</div>

			</div>

		</section>
        </>
    );
};

export default Clients;