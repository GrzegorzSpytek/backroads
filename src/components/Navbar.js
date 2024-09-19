import React from 'react';
import logo from '../images/logo.svg';

import { pageLinks, socialMedia } from '../data';

import PageLink from './PageLink';
import PageSocialMediaLink from './PageSocialMediaLink';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="backroads" />
					<button type="button" className="nav-toggle" id="nav-toggle">
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<ul className="nav-links" id="nav-links">
					{pageLinks.map((page) => {
						return <PageLink key={page.id} {...page} className={'nav-link'} />;
					})}
				</ul>

				<ul className="nav-icons">
					{socialMedia.map((social) => {
						return (
							<PageSocialMediaLink
								key={social.id}
								{...social}
								className={'nav-icon'}
							/>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
