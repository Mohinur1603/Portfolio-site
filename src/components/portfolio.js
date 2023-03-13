import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import photo1 from "../assets/img/photo1.png";
import photo2 from "../assets/img/photo2.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Portfolio() {
	return (
		<Container maxWidth='lg'>
			<section id='portfolio'>
				<Typography
					variant='h2'
					textAlign={"center"}>
					My Works
				</Typography>
				<Grid
					container
					spacing={3}>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}>
						<div className='portfolio-box'>
							<img
								src={photo1}
								alt='/'
							/>
							<a href='http://mui-template-first.netlify.app'>
								<OpenInNewIcon />
							</a>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}>
						<div className='portfolio-box'>
							<img
								src={photo2}
								alt='/'
							/>
							<a href='https://bootstrap-blogzine.netlify.app'>
								<OpenInNewIcon />
							</a>
						</div>
					</Grid>
				</Grid>
			</section>
		</Container>
	);
}
