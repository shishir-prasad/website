import React from "react";

export default function TeamHome() {
	return (
		<div>
			<div className="service-container">
				<h2 className="service-title">
					We are an agile team of <br />
					Passionate
					<span className="primary-color"> Developers</span>
				</h2>
				<div className="flex justify-center flex-wrap">
					<div className="mr-1">
						<p>Deliver your mvp in 4 weeks or less</p>
					</div>
					<div className="mr-1">
						<p>Efficient and scalable infrastructure</p>
					</div>
					<div>
						<p>Affordable cost for startups</p>
					</div>
				</div>
				<p>Image</p>
				<div className="button-container justify-center">
					<div className="btn primary-button mr-1">Contact Us</div>
					<div className="btn secondary-button">Meet our team</div>
				</div>
				<hr className="service-divider" />
			</div>
		</div>
	);
}
