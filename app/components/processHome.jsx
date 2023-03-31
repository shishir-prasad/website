import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";

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
			<p className="pl-1">Logo of company</p>

			<div className="service-title">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi
			</div>
			<Link className="flex pl-1 align-center" to="/about">
				<p className="pr-05">Read case study</p>
				<FiArrowRight color="white" />
			</Link>
		</div>
	);
};

export default function ProcessHome() {
	return (
		<div className="service-container">
			<Fade delay={3} cascade damping={0.5} triggerOnce>
				<h2 className="service-title">
					We have a simple,yet{" "}
					<span className="primary-color">bulletproof</span>
					<br />
					and
					<span className="primary-color"> effective</span> process
				</h2>

				<div className="card-container">
					<ServiceCard />
					<ServiceCard />
					<ServiceCard />
				</div>
			</Fade>
			<Fade delay={3} cascade damping={0.5} triggerOnce>
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
			</Fade>

			{/* Case Studies */}
			<Fade delay={3} cascade damping={0.5} triggerOnce>
				<h2 className="service-title text-center">
					Discover how we had helped
					<br />
					<span className="primary-color">world class companies </span> in the
					past
				</h2>
			</Fade>
			<Fade delay={3} cascade damping={0.5} triggerOnce>
				<div className="card-container">
					<CaseStudyCard />
					<CaseStudyCard />
				</div>
			</Fade>
			<Fade delay={3} cascade damping={0.5} triggerOnce>
				<div className="flex  justify-center ">
					<div className="btn primary-button mr-1">Contact Us</div>
					<div className="btn secondary-button">Browse case studies</div>
				</div>
			</Fade>
			<Fade delay={3} cascade damping={0.5} triggerOnce>
				<hr className="service-divider" />
			</Fade>
		</div>
	);
}
