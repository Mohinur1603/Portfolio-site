import React from "react";

export default function SkillBox({ width, name, precent }) {
	return (
		<>
			<div style={{ marginBottom: "20px", width: "95%", margin: "0 auto" }}>
				<div className='skills-title'>
					<p>{name}</p>
					<p>{precent}</p>
				</div>
				<div className='skill-box'>
					<div
						className='skill'
						style={{ width: `${width}` }}></div>
				</div>
			</div>
		</>
	);
}
