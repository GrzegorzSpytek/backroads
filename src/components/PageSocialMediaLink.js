import React from 'react';

const PageSocialMediaLink = ({ href, id, iconName, className }) => {
	return (
		<li key={id}>
			<a href={href} target="_blank" rel="noreferrer" className={className}>
				<i className={`fab ${iconName}`}></i>
			</a>
		</li>
	);
};

export default PageSocialMediaLink;
