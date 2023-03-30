import AboutStyles from "~/styles/about.css";
export function links() {
	return [
		{
			rel: "stylesheet",
			href: AboutStyles,
		},
	];
}

export default function About() {
	return <div>About Page</div>;
}
