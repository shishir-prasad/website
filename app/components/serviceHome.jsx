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

export default function ServiceHome() {
	return (
		<div className="service-container">
			<h2 className="service-title">
				We are development experts on all <br />
				<span className="primary-color">technologies</span> &{" "}
				<span className="primary-color">platfroms</span>{" "}
			</h2>
			<div className="card-container">
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</div>
			<div className="button-container justify-center">
				<div className="btn primary-button mr-1">Contact Us</div>
				<div className="btn secondary-button">Browse all our services</div>
			</div>
			<hr className="service-divider" />
		</div>
	);
}
