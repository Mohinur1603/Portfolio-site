import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SkillBox from "./skill-box";

export default function Resume() {
	return (
		<Container maxWidth='lg'>
			<section id='resume'>
				<Typography
					variant='h2'
					textAlign={"center"}>
					Resume
				</Typography>
				<div className='resume'>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}>
						<Grid
							item
							p={5}
							xs={10}
							sm={8}
							md={10}
							lg={6}>
							<Typography
								variant='h2'
								my={3}>
								Education
							</Typography>
							<div className='box'>
								<Typography
									variant='h3'
									color={"#0563bb"}>
									Front-End Developer
								</Typography>
								<Stack
									direction={"row"}
									gap={2}
									alignItems={"center"}>
									<CalendarMonthIcon
										sx={{
											bgcolor: "#0563bb",
											color: "#fff",
											borderRadius: "50%",
											padding: "5px",
										}}
									/>
									<span style={{ backgroundColor: "#9993", padding: "2px" }}>
										2022 - 2023
									</span>
								</Stack>
								<p>
									<em>PDP IT Academy, Tashkent</em>
								</p>
								<p>
									Technologies: HTML,Css,Sass,Bootstrap,Styled
									Components,Material UI,React,Redux,Redux
									Toolkit,Webpack,Next.js,Github.
								</p>
								<span className='disc'></span>
							</div>
							<div className='box'>
								<Typography
									variant='h3'
									color={"#0563bb"}>
									Bachelor of Science in Mathematics
								</Typography>
								<Stack
									direction={"row"}
									gap={2}
									alignItems={"center"}>
									<CalendarMonthIcon
										sx={{
											bgcolor: "#0563bb",
											color: "#fff",
											borderRadius: "50%",
											padding: "5px",
										}}
									/>
									<span style={{ backgroundColor: "#9993", padding: "2px" }}>
										2010 - 2014
									</span>
								</Stack>
								<p>
									<em>Andijan State University</em>
								</p>
								<p>
									Courses: algebra and number theory, probability theory,
									mathematical analysis, analytical geometry, informatics and
									information technologies
								</p>
								<span className='disc'></span>
							</div>
						</Grid>
						<Grid
							item
							p={5}
							xs={10}
							sm={8}
							md={10}
							lg={6}>
							<Typography
								variant='h2'
								my={3}>
								Experience
							</Typography>
							<div className='box'>
								<Typography
									variant='h3'
									color={"#0563bb"}>
									Math Teacher
								</Typography>
								<Stack
									direction={"row"}
									gap={2}
									alignItems={"center"}>
									<CalendarMonthIcon
										sx={{
											bgcolor: "#0563bb",
											color: "#fff",
											borderRadius: "50%",
											padding: "5px",
										}}
									/>
									<span style={{ backgroundColor: "#9993", padding: "2px" }}>
										2018 - 2021
									</span>
								</Stack>
								<p>
									<em>54-th secondary school,Asaka</em>
								</p>
								<p>
									Mathematics teacher of secondary school 54, Asaka district,
									Andijan,Uzbekistan
								</p>
								<span className='disc'></span>
							</div>
							<div className='box'>
								<Typography
									variant='h3'
									color={"#0563bb"}>
									Math Teacher
								</Typography>
								<Stack
									direction={"row"}
									gap={2}
									alignItems={"center"}>
									<CalendarMonthIcon
										sx={{
											bgcolor: "#0563bb",
											color: "#fff",
											borderRadius: "50%",
											padding: "5px",
										}}
									/>
									<span style={{ backgroundColor: "#9993", padding: "2px" }}>
										2016 - 2017
									</span>
								</Stack>
								<p>
									<em>Agricultural Vocational College,Asaka </em>
								</p>
								<p>
									Mathematics teacher at Agricultural Vocational
									College,Asaka,Andijan,Uzbekistan
								</p>
								<span className='disc'></span>
							</div>
						</Grid>
					</Grid>
				</div>
				<div className='skills'>
					<Typography
						variant='h2'
						textAlign={"center"}
						my={5}>
						Skills
					</Typography>
					<Grid
						container
						spacing={3}>
						<Grid
							item
							xs={12}
							md={6}
							lg={6}>
							<SkillBox
								name={"HTML"}
								precent={"100%"}
								width={"100%"}
							/>
							<SkillBox
								name={"CSS"}
								precent={"98%"}
								width={"98%"}
							/>
							<SkillBox
								name={"JavaScript"}
								precent={"88%"}
								width={"88%"}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							lg={6}>
							<SkillBox
								name={"React"}
								precent={"85%"}
								width={"85%"}
							/>{" "}
							<SkillBox
								name={"Redux"}
								precent={"80%"}
								width={"80%"}
							/>{" "}
							<SkillBox
								name={"Next JS"}
								precent={"70%"}
								width={"70%"}
							/>
						</Grid>
					</Grid>
				</div>
			</section>
		</Container>
	);
}
