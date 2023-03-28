import React from "react";
import HomeStyles from "~/styles/home.css";
import HeroSection from "../components/hero";
import ProcessHome from "../components/processHome";
import ServiceHome from "../components/serviceHome";
import TeamHome from "../components/teamHome";

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
			<TeamHome />
			<ProcessHome />
		</React.Fragment>
	);
}
