import React from 'react';

import imgAbout from '../images/about.jpeg';

import Title from '../components/Title';

const About = () => {
	return (
		<section className="section" id="about">
			<Title title={'about'} titleBold={'us'} />

			<div className="section-center about-center">
				<div className="about-img">
					<img src={imgAbout} className="about-photo" alt="awesome beach" />
				</div>
				<article className="about-info">
					<h3>explore the difference</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
						quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
						unde dolor?
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
						quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
						unde dolor?
					</p>
					<a href="#home" className="btn">
						read more
					</a>
				</article>
			</div>
		</section>
	);
};

export default About;
