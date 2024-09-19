import React from 'react';

import { pageLinks, socialMedia } from '../data';

import PageLink from './PageLink';
import PageSocialMediaLink from './PageSocialMediaLink';

const Footer = () => {
	return (
		<footer className="section footer">
			<ul className="footer-links">
				{pageLinks.map((page) => {
					return <PageLink key={page.id} {...page} className={'footer-link'} />;
				})}
			</ul>
			<ul className="footer-icons">
				{socialMedia.map((social) => {
					return (
						<PageSocialMediaLink
							key={social.id}
							{...social}
							className={'footer-icon'}
						/>
					);
				})}
			</ul>
			<p className="copyright">
				copyright &copy; Backroads travel tours company
				<span id="date"></span> all rights reserved
			</p>
		</footer>
	);
};

export default Footer;
