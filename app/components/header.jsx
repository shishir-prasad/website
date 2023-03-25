import { NavLink } from "@remix-run/react";
import Logo from "../assets/images/logo.png";
import HeaderStyles from "~/styles/header.css";

export function links() {
	return [
		{
			rel: "stylesheet",
			href: HeaderStyles,
		},
	];
}

export default function Header() {
	return (
		<div className="flex justify-between align-center mv-1">
			<img src={Logo} />
			<div className="flex gap-1">
				<NavLink to="/">
					{({ isActive }) => (
						<span className={isActive ? "activeClass" : "inActiveClass"}>
							Home
						</span>
					)}
				</NavLink>
				<NavLink to="/about">
					{({ isActive }) => (
						<span className={isActive ? "activeClass" : "inActiveClass"}>
							About
						</span>
					)}
				</NavLink>
				<NavLink to="/services">
					{({ isActive }) => (
						<span className={isActive ? "activeClass" : "inActiveClass"}>
							Services
						</span>
					)}
				</NavLink>
				<NavLink to="/blogs">
					{({ isActive }) => (
						<span className={isActive ? "activeClass" : "inActiveClass"}>
							Blogs
						</span>
					)}
				</NavLink>
				<NavLink to="/works">
					{({ isActive }) => (
						<span className={isActive ? "activeClass" : "inActiveClass"}>
							Works
						</span>
					)}
				</NavLink>
			</div>
			<div>
				<p className="headerButton">Contact Us</p>
			</div>
		</div>
	);
}
