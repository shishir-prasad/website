import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import globalStyles from "~/styles/root.css";
import Header from "./components/header";

export const meta = () => ({
	charset: "utf-8",
	title: "iBrew-Hub Technologies",
	viewport: "width=device-width,initial-scale=1",
});

export function links() {
	return [
		{
			rel: "stylesheet",
			href: globalStyles,
		},
	];
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="mainContainer ph-2">
				<Header />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
