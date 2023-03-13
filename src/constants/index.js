import { createTheme } from "@mui/material";

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1436,
		},
	},
});

theme.typography.h1 = {
	fontSize: "24px",
	"@media (min-width:600px)": {
		fontSize: "40px",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "64px",
		fontWeight: "700",
	},
};
theme.typography.h2 = {
	fontSize: "16px",
	"@media (min-width:600px)": {
		fontSize: "20px",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "30px",
		fontWeight: "700",
	},
};
theme.typography.h3 = {
	fontSize: "16px",
	fontWeight: "700",
	marginBottom: "20px",
	"@media (min-width:600px)": {
		fontSize: "18px",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "20px",
		fontWeight: "700",
	},
};
