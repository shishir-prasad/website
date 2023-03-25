export default function HeroSection() {
	return (
		<>
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
							adipisci deleniti ipsam, incidunt ipsum reiciendis aut omnis
							dolorum saepe rem quis, repellendus molestiae veniam magni
							obcaecati laboriosam qui soluta modi?
						</p>
						<div className="button-container">
							<div className="btn primary-button mr-1">Contact Us</div>
							<div className="btn secondary-button">Our Services</div>
						</div>
					</div>
					<div>Image</div>
				</div>
			</div>
			<div className="client-section justify-between align-center">
				<div>
					<p className="client-title">Trusted by amazing clients</p>
				</div>
				<div className="flex gap-1">
					<p className="client-name">Google</p>
					<p className="client-name">facebook</p>
					<p className="client-name">Youtube</p>
					<p className="client-name">Pinterest</p>
				</div>
			</div>
			<hr />
		</>
	);
}
