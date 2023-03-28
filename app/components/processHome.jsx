import React from "react";

const ServiceCard = () => {
	return (
		<div className="service-card">
			<img src="https://picsum.photos/200/200" className="image" />
			<div className="service-card-title">Title</div>
			<div className="service-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi
				sunt nisi voluptates, consequatur ipsam nesciunt esse atque, expedita
				fugit reprehenderit reiciendis quis architecto et consequuntur eaque
				sapiente totam error?
			</div>
		</div>
	);
};

const CaseStudyCard = () => {
	return (
		<div className="case-study-card p-2">
			<p>Logo of company</p>

			<div className="service-text">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi
			</div>
		</div>
	);
};

export default function ProcessHome() {
	return (
		<div className="service-container">
			<h2 className="service-title">
				We have a simple,yet <span className="primary-color">bulletproof</span>
				<br />
				and
				<span className="primary-color"> effective</span> process
			</h2>
			<div className="card-container">
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</div>
			<div className="button-container justify-center">
				<div className="btn primary-button mr-1">Contact Us</div>
			</div>
			{/* Start working with our team section */}
			<div className="work-card p-2 mv-4">
				<div className="flex align-center justify-between m-2 mv-4">
					<h2 className="service-title">
						Ready to start working
						<br />
						<span className="primary-color">together</span> with our team?
					</h2>
					<div className="flex  justify-center mr-1">
						<div className="btn primary-button mr-1">Contact Us</div>
						<div className="btn secondary-button">Our services</div>
					</div>
				</div>
			</div>

			{/* Case Studies */}

			<h2 className="service-title text-center">
				Discover how we had helped
				<br />
				<span className="primary-color">world class companies </span> in the
				past
			</h2>
			<div className="card-container">
				<CaseStudyCard />
				<CaseStudyCard />
			</div>
			<div className="flex  justify-center ">
				<div className="btn primary-button mr-1">Contact Us</div>
				<div className="btn secondary-button">Browse case studies</div>
			</div>
			<hr className="service-divider" />
		</div>
	);
}
