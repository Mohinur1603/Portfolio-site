import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function About() {
	return (
		<Container maxWidth='lg'>
			<section id='about'>
				<Box textAlign={"center"}>
					<Typography
						variant='h2'
						fontWeight={"600"}>
						About
					</Typography>			
				</Box>
				<Grid
					container
					direction={"row"}
					spacing={4}
					sx={{ marginTop: "40px" }}>
					<Grid
						item
						xs={8} sm={8} md={4}>
						<img
							src='https://static.vecteezy.com/system/resources/previews/002/256/984/original/businesswoman-entrepreneur-working-on-a-laptop-computer-at-her-office-desk-vector.jpg'
							alt='/'
							style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
						/>
					</Grid>
					<Grid
						item
						xs={8} sm={8} md={8}>
						<Typography
							variant='h6'
							sx={{ fontWeight: "bold" }}>
							Hey there!
						</Typography>
						<Typography
							variant='p'
							component='p'
							my={3}>
							Although I'm a math teacher, I'm also a programming student. I was
							interested in a hobby for myself and I was not afraid to change my
							profession.
						</Typography>
						<Typography
							variant='p'
							component='p'
							my={3}>
							My childhood dreams, which began with practicing on a non-working
							keyboard without a personal laptop, turned into programming.this
							is the beginning of my achievements.
						</Typography>
						<Typography
							variant='p'
							component='p'
							mb={4}>
							Although I have no programming experience yet, I am confident that
							I have the passion to complete tasks. If you want to share
							programming tasks with me, you can find me at:
						</Typography>
						<Box
							bgcolor={"#fff1e0"}
							py={2}>
							<Typography
								component='div'
								my={2}>
								<span
									style={{
										fontWeight: "700",
										marginRight: "10px",
										color: "#111",
									}}>
									☻ Telegram:
								</span>
								<a href='https://t.me/mohin1603'>@mohin_m</a>
							</Typography>
							<Typography component='div'>
								<span
									style={{
										fontWeight: "700",
										marginRight: "10px",
										color: "#111",
									}}>
									☻ Email:
								</span>
								<a href='https://t.me/mohin1603'>mohinur1603@gmail.com</a>
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</section>
		</Container>
	);
}
