import HomeStyles from "~/styles/home.css";

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
		<div className="container">
			<div className="hero-section">
				<div className="text-container">
					<h1 className="hero-title">
						We are top-notch <br />
						<span className="primary-color">development </span>
						agency
					</h1>
					<p className="hero-para">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
						adipisci deleniti ipsam, incidunt ipsum reiciendis aut omnis dolorum
						saepe rem quis, repellendus molestiae veniam magni obcaecati
						laboriosam qui soluta modi?
					</p>
				</div>
				<div>Image</div>
			</div>
		</div>
	);
}
