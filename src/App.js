import * as React from "react";
import "./style.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<About />
			<Resume/>
			<Portfolio/>
			<Contact/>
		</ThemeProvider>
	);
}
