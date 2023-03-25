import React from "react";
import HomeStyles from "~/styles/home.css";
import HeroSection from "../components/hero";
import ServiceHome from "../components/serviceHome";

export function links() {
	return [
		{
			rel: "stylesheet",
			href: HomeStyles,
		},
	];
}

export default function Index() {
	return (
		<React.Fragment>
			<HeroSection />
			<ServiceHome />
		</React.Fragment>
	);
}
