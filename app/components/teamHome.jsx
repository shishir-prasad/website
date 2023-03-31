import React from "react";
import { Fade } from "react-awesome-reveal";

export default function TeamHome() {
	return (
		<div>
			<div className="service-container">
				<Fade delay={3} cascade damping={0.5} triggerOnce>
					<h2 className="service-title">
						We are an agile team of <br />
						Passionate
						<span className="primary-color"> Developers</span>
					</h2>
				</Fade>
				<Fade delay={3} cascade damping={0.5} triggerOnce>
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
				</Fade>
				<Fade delay={3} cascade damping={0.5} triggerOnce>
					<p>Image</p>
				</Fade>
				<Fade delay={3} cascade damping={0.5} triggerOnce>
					<div className="button-container justify-center">
						<div className="btn primary-button mr-1">Contact Us</div>
						<div className="btn secondary-button">Meet our team</div>
					</div>
				</Fade>
				<Fade delay={3} cascade damping={0.5} triggerOnce>
					<hr className="service-divider" />
				</Fade>
			</div>
		</div>
	);
}
