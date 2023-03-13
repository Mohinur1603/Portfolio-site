import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
	return (
		<Container maxWidth='lg'>
			<section id='portfolio'>
				<Typography
					variant='h2'
					textAlign={"center"}
					my={5}>
					Contact
				</Typography>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={12}
						md={6}>
						<Box
							display={"flex"}
							lineHeight={"5px"}>
							<IconButton>
								<LocationOnOutlinedIcon />
							</IconButton>
							<Box>
								<h5>Location</h5>
								<p style={{ fontSize: "14px", color: "#555" }}>
									Uzbekistan, Andijan
								</p>
							</Box>
						</Box>
						<Box
							display={"flex"}
							lineHeight={"5px"}>
							<IconButton>
								<EmailOutlinedIcon />
							</IconButton>
							<Box>
								<h5>Email</h5>
								<p style={{ fontSize: "14px", color: "#555" }}>
									mohinur1603@gmail.com
								</p>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<TextField
							label='Your name'
							my={2}
							fullWidth
						/>
						<TextField
							label='Email'
							fullWidth
							sx={{ margin: "15px 0px" }}
						/>
						<TextField
							id='outlined-multiline-flexible'
							label='Message'
							multiline
							maxRows={4}
							fullWidth
						/>
                        <Button variant="contained" fullWidth sx={{mt:"10px"}}onClick={()=>alert("Thanks for message!")}>Send</Button>
					</Grid>
				</Grid>
			</section>
		</Container>
	);
}
