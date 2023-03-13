import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Typed from "typed.js";

export default function Header() {
	const [open, setOpen] = useState(false);
	const [display, setDisplay] = useState("none");

	// for Typed strings
	const el = useRef(null);
	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Front-end developer", "React Developer"],
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 100,
			loop: true,
		});

		// Destroying
		return () => {
			typed.destroy();
		};
	}, []);

	const handleOpen = () => {
		setOpen((pre) => (pre ? false : true));

		return open ? setDisplay("block") : setDisplay("none");
	};
	return (
		<>
			<div className='container'>
				<Box textAlign={"right"}>
					<div className='burger'>
						<IconButton
							onClick={handleOpen}
							sx={{ color: "white" }}>
							<MenuIcon />
						</IconButton>
					</div>
				</Box>

				<header
					id='header'
					style={{ display: `${display}` }}>
					<IconButton onClick={handleOpen}>
						<CloseIcon />
					</IconButton>
					<nav id='navbar'>
						<ul>
							<li>
								<a href='#hero'>
									<button className='btn active'>
										<HomeOutlinedIcon sx={{ marginBottom: "5px" }} />
										<span>Home</span>
									</button>
								</a>
							</li>
							<li>
								<a href='#about'>
									<button className='btn '>
										<PermIdentityIcon sx={{ marginBottom: "5px" }} />
										<span>About</span>
									</button>
								</a>
							</li>
							<li>
								<a href='#resume'>
									<button className='btn '>
										<InsertDriveFileOutlinedIcon sx={{ marginBottom: "5px" }} />
										<span>Resume</span>
									</button>
								</a>
							</li>
							<li>
								<a href='#portfolio'>
									<button className='btn '>
										<MenuBookOutlinedIcon sx={{ marginBottom: "5px" }} />
										<span>Portfolio</span>
									</button>
								</a>
							</li>
							<li>
								<a href='#contact'>
									<button className='btn '>
										<MailOutlinedIcon sx={{ marginBottom: "5px" }} />
										<span>Contact</span>
									</button>
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className='sidebar-menu'>
					<ul>
						<li>
							<a href='#hero'>
								<button className='btn active'>
									<HomeOutlinedIcon sx={{ marginBottom: "5px" }} />
									<span>Home</span>
								</button>
							</a>
						</li>
						<li>
							<a href='#about'>
								<button className='btn '>
									<PermIdentityIcon sx={{ marginBottom: "5px" }} />
									<span>About</span>
								</button>
							</a>
						</li>
						<li>
							<a href='#resume'>
								<button className='btn '>
									<InsertDriveFileOutlinedIcon sx={{ marginBottom: "5px" }} />
									<span>Resume</span>
								</button>
							</a>
						</li>
						<li>
							<a href='#portfolio'>
								<button className='btn '>
									<MenuBookOutlinedIcon sx={{ marginBottom: "5px" }} />
									<span>Portfolio</span>
								</button>
							</a>
						</li>
						<li>
							<a href='#contact'>
								<button className='btn '>
									<MailOutlinedIcon sx={{ marginBottom: "5px" }} />
									<span>Contact</span>
								</button>
							</a>
						</li>
					</ul>
				</div>
				<section id='hero'>
					<div>
						<Typography variant='h1'>Mohinur Mamayusupova</Typography>
						<Typography variant='h2'>
							I'm <span ref={el} style={{color:"white"}}></span>
						</Typography>
					</div>
				</section>
			</div>
		</>
	);
}
